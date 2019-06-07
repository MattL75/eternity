import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CalculatorComponent } from '../calculator/calculator.component';
import { Language, TranslationService } from 'angular-l10n';

@Component({
    selector: 'et-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    @Language()
    lang: string;

    constructor(public dialogRef: MatDialogRef<SettingsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CalculatorComponent,
                public translation: TranslationService,
                public snackbar: MatSnackBar) {
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    applyNewProperties(rounds: string, precision: string): void {
        const roundsNum = Number(rounds);
        const precisionNum = Number(precision);
        if (roundsNum > 1 && roundsNum <= 400) {
            if (precisionNum >= 0 && precisionNum < 7) {
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
