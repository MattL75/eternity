import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Language, LocaleService } from 'angular-l10n';
import { MatDialog } from '@angular/material';
import { CalculatorComponent } from './calculator/calculator.component';
import { SettingsComponent } from './settings/settings.component';

const THEMES: string[] = [
    'material-light',
    'material-dark',
    'high-contrast',
    'beach-day'
];

const LANGS: any[] = [
    {short: 'en', long: 'English'},
    {short: 'fr', long: 'Français'}
];

@Component({
    selector: 'et-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    @Language()
    lang: string;

    @HostBinding('class')
    activeTheme: string = 'material-light';

    availableThemes: string[] = THEMES;

    availableLangs: any[] = LANGS;

    constructor(public locale: LocaleService, public dialog: MatDialog) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
    }

    openSettingsDialog(calculator: CalculatorComponent): void {
        this.dialog.open(SettingsComponent, {
            data: calculator
        });
    }

}
