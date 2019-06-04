import * as math from 'mathjs';
import { sin } from '../functions/sin';
import { cos } from '../functions/cos';
import { ePowerX } from '../functions/e-power-x';
import { abs } from '../functions/abs';
import { sqrt } from '../functions/sqrt';
import {xPowerY} from "../functions/x_power_y";

export class Calculator {

    private parser = math.parser();
    private rounds: number;
    private precision: number;

    constructor(rounds: number = 40, precision: number = 3) {
        this.rounds = rounds;
        this.precision = precision;
        this.initializeCustomOperations();
    }

    public evaluate(equation: string): number {
        return Number(this.parser.eval(equation).toFixed(this.precision));
    }

    public setRounds(rounds: number): void {
        this.rounds = rounds;
    }

    public setPrecision(precision: number): void {
        this.precision = precision;
    }

    private initializeCustomOperations(): void {

        // Square root custom function
        this.parser.set('sqrt', (val) => {
            return sqrt(val, val / 2);
        });

        // Sin custom function
        this.parser.set('sin', (val) => {
            return sin(val, this.rounds).toNumber();
        });

        // Cos custom function
        this.parser.set('cos', (val) => {
            return cos(val, this.rounds).toNumber();
        });

        // ePowerX custom function
        this.parser.set('ePower', (val) => {
            return ePowerX(val, this.rounds).toNumber();
        });

        this.parser.set('power', (x, y) =>{
            return xPowerY(x, y).toNumber();
        });

        // Absolute value custom function
        this.parser.set('abs', (val) => {
            return abs(val);
        });
    }

}
