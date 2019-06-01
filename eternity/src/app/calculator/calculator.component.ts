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

    ngOnInit() {}

    ngOnDestroy() {}

    pressButton(button: string | number): void {
        this.equation += button;
    }

    @HostListener('document:keydown', ['$event'])
    keydownListener(event: KeyboardEvent): void {
        if (event.key === 'Backspace' && this.equation && this.equation.length > 0) {

            // TODO problem: can't highlight and delete. Remove input and put a span?
            this.equation = this.equation.slice(0, -1);
        }
    }

}
