import BigNumber from 'bignumber.js';

/**
 * Factorial function used in various other functions.
 * @param val The number to find the factorial of.
 */
export function factorial(val: number): BigNumber {
    let retained = new BigNumber(1);
    for (let i = 2; i <= val; ++i) {
        retained = retained.multipliedBy(i);
    }
    return retained;
}
