import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Language } from 'angular-l10n';
import { Calculator } from './calculator';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'et-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

    @Language() lang;

    @ViewChild('mainInput')
    inputElement: ElementRef<HTMLInputElement>;

    equation: string = '';

    calculator: Calculator = new Calculator();

    constructor(private snackbar: MatSnackBar) {}

    ngOnInit() {}

    ngOnDestroy() {}

    pressButton(button: string | number): void {
        this.equation += button;
    }

    evaluate(): void {
        try {
            const result = this.calculator.evaluate(this.equation);
            this.equation = '= ' + result;
        } catch(e) {
            this.snackbar.open('Invalid equation.', 'Dismiss', {
                duration: 5000
            });
        }
    }

    @HostListener('document:keydown', ['$event'])
    keydownListener(event: KeyboardEvent): void {
        switch (event.key) {
            case('Backspace'): {
                if (this.equation && this.equation.length && !this.isInputFocused()) {
                    this.equation = this.equation.slice(0, -1);
                }
                break;
            }
            case('Enter'): {
                if (this.equation && this.equation.length) {
                    this.evaluate();
                }
                break;
            }
            default: {
                const match = event.key.match(/[0-9a-zA-Z]/);
                if (match && event.key.length === 1 && !this.isInputFocused()) {
                    this.pressButton(event.key);
                }
            }
        }
    }

    private isInputFocused(): boolean {
        return this.inputElement.nativeElement as HTMLElement === document.activeElement;
    }

}
