import * as math from 'mathjs';
import { sin } from '../functions/sin';
import { cos } from '../functions/cos';
import { ePowerX } from '../functions/e-power-x';
import { abs } from '../functions/abs';
import { sqrt } from '../functions/sqrt';
import { floor } from '../functions/floor';
import { tenPowerX } from '../functions/ten-power-x';
import { PI } from '../functions/pi';
import { xPowerY } from '../functions/x_power_y';

export class Calculator {

    private parser = math.parser();
    private rounds: number;
    private precision: number;
    private mode: 'Deg' | 'Rad';

    constructor(rounds: number = 40, precision: number = 3, mode: 'Deg' | 'Rad' = 'Deg') {
        this.rounds = rounds;
        this.precision = precision;
        this.mode = mode;
        this.initializeCustomOperations();
    }

    public evaluate(equation: string): number {
        return Number(this.parser.eval(equation).toFixed(this.precision));
    }

    public setRounds(rounds: number): void {
        this.rounds = rounds;
    }

    public getRounds(): number {
        return this.rounds;
    }

    public setPrecision(precision: number): void {
        this.precision = precision;
    }

    public getPrecision(): number {
        return this.precision;
    }

    public setMode(mode: 'Deg' | 'Rad'): void {
        this.mode = mode;
    }

    public get modeStr(): string {
        return this.mode;
    }

    private initializeCustomOperations(): void {

        // Square root custom function
        this.parser.set('sqrt', (val) => {
            return sqrt(val, val / 2);
        });

        // Sin custom function
        this.parser.set('sin', (val) => {
            return sin(val, this.rounds, this.mode).toNumber();
        });

        // Cos custom function
        this.parser.set('cos', (val) => {
            return cos(val, this.rounds, this.mode).toNumber();
        });

        // ePowerX custom function
        this.parser.set('ePower', (val) => {
            return ePowerX(val, this.rounds).toNumber();
        });

        // xPowerY custom function
        this.parser.set('power', (x, y) => {
            return xPowerY(x, y, this.rounds).toNumber();
        });

        // Absolute value custom function
        this.parser.set('abs', (val) => {
            return abs(val);
        });

        // Floor custom function
        this.parser.set('floor', (val) => {
            return floor(val);
        });

        // tenPowerX custom function
        this.parser.set('tenPower', (val) => {
            return tenPowerX(val);
        });

        // Custom PI symbol
        this.parser.set('π', PI);
    }

}
