import { power } from './power';
import { floor } from './floor';
import { ePowerX } from './e-power-x';
import { abs } from './abs';
import BigNumber from 'bignumber.js';

const LN10 = 2.302585092994046; // e^(x*ln2*3.32...)

export function tenPowerX(val: number): BigNumber {
    let intVal: number = floor(val);
    const remain: number = val - intVal;
    let retained = new BigNumber(0);
    const temp = new BigNumber(1);

    if (intVal < 0) {
        intVal = abs(intVal);
        retained = temp.dividedBy(power(10, intVal).multipliedBy(ePowerX(remain * LN10)));
    } else {
        retained = power(10, intVal).multipliedBy(ePowerX(remain * LN10));
    }

    return retained;
}
