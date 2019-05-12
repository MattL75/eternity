import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';

const THEMES: string[] = [
    'material-light',
    'material-dark'
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

    constructor(public locale: LocaleService) { }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
    }

}
