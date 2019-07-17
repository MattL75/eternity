import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Language, LocaleService } from 'angular-l10n';
import { MatDialog } from '@angular/material';
import { CalculatorComponent } from './calculator/calculator.component';
import { SettingsComponent } from './settings/settings.component';

/** Constant list of themes for the application. */
const THEMES: string[] = [
    'material-light',
    'material-dark',
    'high-contrast',
    'beach-day'
];

/** Constant list of languages for the application. */
const LANGS: any[] = [
    {short: 'en', long: 'English'},
    {short: 'fr', long: 'Français'}
];

/**
 * The main bootstrapped component of the eternity scientific calculator.
 */
@Component({
    selector: 'et-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    /** The currently active language. Used for internationalization. */
    @Language()
    lang: string;

    /** The currently active theme. Controls the values of the css custom properties. */
    @HostBinding('class')
    activeTheme: string = 'material-light';

    /** A list of the available themes. Defined in the app.component.ts file as a const. */
    availableThemes: string[] = THEMES;

    /** A list of the available languages. Defined in the app.component.ts file as a const. */
    availableLangs: any[] = LANGS;

    /**
     * Constructor for the main component. Should never be invoked manually.
     * @param locale Locale service, injected.
     * @param dialog Injected dialog service.
     */
    constructor(public locale: LocaleService, public dialog: MatDialog) {}

    /** Initialization method for the main component. Should never be invoked manually. */
    ngOnInit(): void {}

    /** The destroy sequence defined for the main component. Should never be invoked manually. */
    ngOnDestroy(): void {}

    /**
     * Function that sets a new language and translates the application.
     * @param language The language to select.
     */
    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
    }

    /**
     * Function that opens the settings dialog.
     * @param calculator The calculator component instance to use for the settings.
     */
    openSettingsDialog(calculator: CalculatorComponent): void {
        this.dialog.open(SettingsComponent, {
            panelClass: this.activeTheme,
            data: calculator
        });
    }

}
