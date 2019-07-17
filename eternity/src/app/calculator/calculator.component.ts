import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { Calculator } from './calculator';
import { MatSnackBar } from '@angular/material';

/**
 * Component representing the calculator.
 */
@Component({
    selector: 'et-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

    /** Current active language of the application. */
    @Language() lang;

    /** DOM reference to the input element. */
    @ViewChild('mainInput')
    inputElement: ElementRef<HTMLInputElement>;

    /** Current equation being displayed in the input element. */
    equation: string = '';

    /** Instance of the calculator class being used. */
    calculator: Calculator = new Calculator();

    /**
     * Constructor for the Calculator component. Should never be invoked directly.
     * @param snackbar Injected snackbar service.
     * @param translation Injected translation service.
     */
    constructor(private snackbar: MatSnackBar, public translation: TranslationService) {}

    /** Initialization procedure. Should never be invoked directly. */
    ngOnInit() {}

    /** Destroy procedure. Should never be invoked directly. */
    ngOnDestroy() {}

    /**
     * Method called when a character button is pressed in the calculator.
     * @param button The character being pressed.
     */
    pressButton(button: string | number): void {
        this.equation += button;
    }

    /**
     * Evaluates the expression. Fails gracefully.
     */
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

    /**
     * Switches the mode from deg to rad or from rad to deg.
     */
    switchMode(): void {
        if (this.calculator.modeStr === 'Deg') {
            this.calculator.setMode('Rad');
        } else {
            this.calculator.setMode('Deg');
        }
    }

    /**
     * Pops the last character from the equation.
     */
    removeLastCharacter(): void {
        if (this.equation && this.equation.length) {
            this.equation = this.equation.slice(0, -1);
        }
    }

    /**
     * Event listener for enter or backspace key events.
     */
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

    /**
     * Returns true if the input element is currently focused.
     */
    private isInputFocused(): boolean {
        return this.inputElement.nativeElement as HTMLElement === document.activeElement;
    }

    /**
     * Returns true if the main context button is focused, or has a focused parent.
     */
    private isContextButtonFocused(): boolean {
        return document.activeElement.classList.contains('et-calculator-main-btn');
    }

}
