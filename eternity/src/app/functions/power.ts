import BigNumber from 'bignumber.js';

/**
 * Standard power function, used in other functions.
 * @param num Base number.
 * @param exponent Power number.
 */
export function power(num: number, exponent: number): BigNumber {
    let result = new BigNumber(1);
    for (let i = 1; i <= exponent; ++i) {
        result = result.multipliedBy(num);
    }
    return result;
}
