import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
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

    constructor(private snackbar: MatSnackBar, public translation: TranslationService) {}

    ngOnInit() {}

    ngOnDestroy() {}

    pressButton(button: string | number): void {
        this.equation += button;
    }

    evaluate(): void {
        try {
            const result = this.calculator.evaluate(this.equation);
            this.equation = result + '';
        } catch (e) {
            this.snackbar.open(this.translation.translate('invalidEquation'), this.translation.translate('dismiss'), {
                duration: 5000
            });
        }
    }

    switchMode(): void {
        if (this.calculator.modeStr === 'Deg') {
            this.calculator.setMode('Rad');
        } else {
            this.calculator.setMode('Deg');
        }
    }

    removeLastCharacter(): void {
        if (this.equation && this.equation.length) {
            this.equation = this.equation.slice(0, -1);
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
                if (this.equation && this.equation.length && !this.isContextButtonFocused()) {
                    this.evaluate();
                }
                break;
            }
        }
    }

    private isInputFocused(): boolean {
        return this.inputElement.nativeElement as HTMLElement === document.activeElement;
    }

    private isContextButtonFocused(): boolean {
        return document.activeElement.classList.contains('et-calculator-main-btn');
    }

}
