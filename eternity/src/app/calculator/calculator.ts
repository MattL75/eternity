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

/**
 * Main calculator class which takes care of most processing.
 */
export class Calculator {

    /** Instance of the math parser from math.js. */
    private parser = math.parser();

    /** Number of rounds per infinite series configured for this instance of the calculator. */
    private rounds: number;

    /** Decimal precision to display for this instance of the calculator. */
    private precision: number;

    /** Mode of the calculator. Deg/Rad. */
    private mode: 'Deg' | 'Rad';

    /**
     * Constructor for the Calculator class.
     * @param rounds Number of rounds per infinite series.
     * @param precision Number of decimals to show.
     * @param mode Mode of the calculator. Deg/Rad.
     */
    constructor(rounds: number = 40, precision: number = 3, mode: 'Deg' | 'Rad' = 'Deg') {
        this.rounds = rounds;
        this.precision = precision;
        this.mode = mode;
        this.initializeCustomOperations();
    }

    /**
     * Evaluates a mathematical expression.
     * @param equation The equation to evaluate.
     */
    public evaluate(equation: string): number {
        return Number(this.parser.eval(equation).toFixed(this.precision));
    }

    /**
     * Sets the number of rounds to execute per infinite series.
     * @param rounds Number of rounds to be set.
     */
    public setRounds(rounds: number): void {
        this.rounds = rounds;
    }

    /**
     * Returns the number of rounds.
     */
    public getRounds(): number {
        return this.rounds;
    }

    /**
     * Set the decimal precision that is displayed.
     * @param precision Number of decimals to show.
     */
    public setPrecision(precision: number): void {
        this.precision = precision;
    }

    /**
     * Get the number of decimals displayed.
     */
    public getPrecision(): number {
        return this.precision;
    }

    /**
     * Set the mode of the calculator. Deg/Rad
     * @param mode New mode to set.
     */
    public setMode(mode: 'Deg' | 'Rad'): void {
        this.mode = mode;
    }

    /**
     * Returns the mode string.
     */
    public get modeStr(): string {
        return this.mode;
    }

    /**
     * Initializes the calculator with the custom operations defined by the project.
     */
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
            return tenPowerX(val).toNumber();
        });

        // Custom PI symbol
        this.parser.set('π', PI);
    }

}
