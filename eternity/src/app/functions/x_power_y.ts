import BigNumber from 'bignumber.js';
import { ePowerX } from "./e-power-x";
import { power } from "./power";
import { abs } from "./abs";
import { floor } from "./floor";

/*
This function calculates x^y for x > 0 using the natural log (ln) series as follows:
ln(x) = 2[ ((x - 1) / (x + 1)) + (((x - 1) / (x + 1)) ^ 3) / 3 + (((x - 1) / (x + 1)) ^ 5) / 5 + ...]
*/

export function xPowerY(x: number, y: number, rounds: number) : BigNumber{
    const intPart = floor(abs(y));
    const floatPart = abs(y) - intPart;

    if(y < 0){
        return  new BigNumber(1).dividedBy(ePowerX(ln(x, rounds).multipliedBy(floatPart).toNumber()).multipliedBy(power(x, intPart)));
    }
    return ePowerX(ln(x, rounds).multipliedBy(floatPart).toNumber()).multipliedBy(power(x, intPart));
}

export function ln(x: number, rounds: number): BigNumber{
    let sum = new BigNumber(0.0);
    let n = ((x - 1.0) / (x + 1.0));

    for(let i = 1; i <= 5 * rounds; i += 2){
        sum = sum.plus(power(n, i).multipliedBy(1.0/i));
    }
    return sum.multipliedBy(2);
}
