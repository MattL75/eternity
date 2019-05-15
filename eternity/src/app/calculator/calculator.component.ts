import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    selector: 'et-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

    @Language() lang;

    public equation: string = '';

    public calculatorRows = [
        {},
    ];

    // NAH. MAKE AN ARRAY 9 to 1 for numbers.

    ngOnInit() {}

    ngOnDestroy() {}

    pressButton(button: string | number): void {
        this.equation += button;
    }

    @HostListener('keydown', ['$event'])
    keydownListener(event: KeyboardEvent): void {
        if (event.key === 'Backspace' && this.equation && this.equation.length > 0) {
            this.equation = this.equation.slice(0, -1);
        }
    }

}
