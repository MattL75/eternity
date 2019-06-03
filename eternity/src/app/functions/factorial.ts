import BigNumber from 'bignumber.js';

export function factorial(val: number): BigNumber {
    let retained = new BigNumber(1);
    for (let i = 2; i <= val; ++i) {
        retained = retained.multipliedBy(i);
    }
    return retained;
}
