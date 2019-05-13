import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    selector: 'et-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

    @Language() lang;

    public equation: string = '';

    ngOnInit() {}

    ngOnDestroy() {}

}
