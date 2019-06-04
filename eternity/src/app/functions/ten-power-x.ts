import { power } from './power';
import { floor } from './floor';
import { ePowerX } from './e-power-x';
import { abs } from './abs';
import BigNumber from 'bignumber.js';

const LN10 = 2.302585092994046; //e^(x*ln2*3.32...)

export function tenPowerX(val: number): BigNumber {
    let intVal: number = floor(val);
    let remain: number = val - intVal;
    let retained = new BigNumber(0);

    if (intVal < 0) {
        intVal = abs(intVal);
        retained = 1 / power(10, intVal) * ePowerX(remain * LN10);
    } else {
        retained = power(10, intVal) * ePowerX(remain * LN10);
    }

    return retained;
}
