import BigNumber from 'bignumber.js';
import { ePowerX } from "./e-power-x";

/*
This function calculates x^y for x & y > 0 using the natural log (ln) series as follows:
ln(x) = 2[ ((x - 1) / (x + 1)) + (((x - 1) / (x + 1)) ^ 3) / 3 + (((x - 1) / (x + 1)) ^ 5) / 5 + ...]
*/

export function xPowerY(x: number, y: number, rounds: number) : BigNumber{
    return ePowerX(y * ln(x, rounds));
}

export function ln(x: number, rounds: number){
    let sum = new BigNumber(0.0);

    for(let i = 1; i <= 100 * rounds; i += 2){
        sum = sum.plus((1.0/i) * pow(x, i));
    }
    return sum.multipliedBy(2).toNumber();
}

function pow(x, iteration){
    let acc = ((x - 1.0) / (x + 1.0));
    for(let i = 1; i <= iteration; i++){
        acc *= ((x - 1.0) / (x + 1.0));
    }

    return acc;
}
