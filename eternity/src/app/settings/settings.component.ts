import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CalculatorComponent } from '../calculator/calculator.component';
import { Language, TranslationService } from 'angular-l10n';

/**
 * The settings component which appears inside a modal triggered from the AppComponent.
 */
@Component({
    selector: 'et-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    /** The current language, as defined by the AppComponent. */
    @Language()
    lang: string;

    /**
     * Constructor for the SettingsComponent. Should never be invoked directly.
     * @param dialogRef Reference to the dialog.
     * @param data Data being passed to the dialog.
     * @param translation Injected translation service.
     * @param snackbar Injected snackbar service.
     */
    constructor(public dialogRef: MatDialogRef<SettingsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CalculatorComponent,
                public translation: TranslationService,
                public snackbar: MatSnackBar) {
    }

    /** Initialization method for the settings component. Should never be invoked manually. */
    ngOnInit(): void {}

    /** Destroy procedure method for the settings component. Should never be invoked manually. */
    ngOnDestroy(): void {}

    /**
     * Applies the passed properties to the calculator component. Also deals with validation of the values.
     * @param rounds The number of calculation rounds to do for infinite series. (1-400)
     * @param precision The number of decimal points displayed. (0-7)
     */
    applyNewProperties(rounds: string, precision: string): void {
        const roundsNum = Number(rounds);
        const precisionNum = Number(precision);
        if (roundsNum > 1 && roundsNum <= 400) {
            if (precisionNum >= 0 && precisionNum <= 7) {
                this.data.calculator.setRounds(roundsNum);
                this.data.calculator.setPrecision(precisionNum);
                this.snackbar.open(this.translation.translate('settingsSuccess'), this.translation.translate('success'), {
                    duration: 5000
                });
                this.dialogRef.close();
            } else {
                this.snackbar.open(this.translation.translate('precisionSettingsError'), this.translation.translate('dismiss'), {
                    duration: 5000
                });
            }
        } else {
            this.snackbar.open(this.translation.translate('roundsSettingsError'), this.translation.translate('dismiss'), {
                duration: 5000
            });
        }
    }

}
