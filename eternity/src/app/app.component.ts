import { AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Language, LocaleService } from 'angular-l10n';
import { MatDialog } from '@angular/material';
import { CalculatorComponent } from './calculator/calculator.component';
import { SettingsComponent } from './settings/settings.component';
import { Meta } from '@angular/platform-browser';

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
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

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
     * @param meta Service used to update page meta information.
     * @param elRef Reference to the component element.
     */
    constructor(public locale: LocaleService,
                public dialog: MatDialog,
                public meta: Meta,
                private elRef: ElementRef) {}

    /** Initialization method for the main component. Should never be invoked manually. */
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.initMetaColorTag();
    }

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
     * Updates the active theme and the meta tag for chrome mobile.
     * @param theme Theme to select.
     */
    changeTheme(theme: string): void {
        this.activeTheme = theme;
        setTimeout(() => {
            this.setMetaThemeColor();
        });
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

    /**
     * Initializes the meta theme-color tag.
     */
    private initMetaColorTag(): void {
        let styles = getComputedStyle(this.elRef.nativeElement);
        let colorValue = styles.getPropertyValue('--primary');
        this.meta.addTag({name: 'theme-color', content: colorValue.trim()});
    }

    /**
     * Updates the meta theme-color tag.
     */
    private setMetaThemeColor(): void {
        let styles = getComputedStyle(this.elRef.nativeElement);
        let colorValue = styles.getPropertyValue('--primary');
        this.meta.updateTag({name: 'theme-color', content: colorValue.trim()});
    }

}
