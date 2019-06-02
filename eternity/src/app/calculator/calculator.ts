import * as math from 'mathjs';
import { sin } from '../functions/sin';
import { cos } from '../functions/cos';

export class Calculator {

    private _parser = math.parser();
    private _rounds: number;
    private _precision: number;

    constructor(rounds: number = 20, precision: number = 3) {
        this._rounds = rounds;
        this._precision = precision;
        this.initializeCustomOperations();
    }

    public evaluate(equation: string): number {
        return Number(this._parser.eval(equation).toFixed(this._precision));
    }

    public setRounds(rounds: number): void {
        this._rounds = rounds;
    }

    public setPrecision(precision: number): void {
        this._precision = precision;
    }

    private initializeCustomOperations(): void {

        // Square root custom function
        this._parser.set('sqrt', (val) => {
            // TODO
            return sin(val);
        });

        // Sin custom function
        this._parser.set('sin', (val) => {
            return sin(val, this._rounds).toNumber();
        });

        // Cos custom function
        this._parser.set('cos', (val) => {
            return cos(val, this._rounds);
        });
    }

}
