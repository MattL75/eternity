import BigNumber from 'bignumber.js';
import {ePowerX} from "./e-power-x";

export function xPowerY(x, y) : BigNumber{
    return ePowerX(y * ln(x));
}

export function ln(x: number){
    let sum = new BigNumber(0.0);

    for(let i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum.plus((1.0/i) * pow(x, i));
        }
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
