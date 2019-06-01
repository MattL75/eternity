import * as math from 'mathjs';

export class Calculator {

    private parser = math.parser();

    constructor() {
        this.initializeCustomOperations();
    }

    static squareRoot(val: number): number {
        return val;
    }

    static sin(val: number): number {
        return val;
    }

    static cos(val: number): number {
        return val;
    }

    private initializeCustomOperations(): void {

        // Square root custom function
        this.parser.set('sqrt', (val) => {
            return Calculator.squareRoot(val);
        });

        // Sin custom function
        this.parser.set('sin', (val) => {
            return Calculator.sin(val);
        });

        // Cos custom function
        this.parser.set('cos', (val) => {
            return Calculator.sin(val);
        });
    }

}
