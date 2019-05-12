import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule
} from "@angular/material";
import {L10nConfig, L10nLoader, LogLevel, ProviderType, StorageStrategy, TranslationModule} from "angular-l10n";
import {HttpClientModule} from "@angular/common/http";

const l10nConfig: L10nConfig = {
    logger: {
        level: LogLevel.Warn
    },
    locale: {
        languages: [
            { code: 'en', dir: 'ltr' },
            { code: 'it', dir: 'ltr' }
        ],
        language: 'en',
        storage: StorageStrategy.Cookie
    },
    translation: {
        providers: [
            { type: ProviderType.Static, prefix: './assets/locale-' }
        ],
        caching: true,
        composedKeySeparator: '.',
        missingValue: 'No key'
    }
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig),
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public l10nLoader: L10nLoader) {
        this.l10nLoader.load();
    }
}
