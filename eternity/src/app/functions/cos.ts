import { power } from './power';
import { factorial } from './factorial';
import { PI } from './pi';
import BigNumber from 'bignumber.js';

/**
 * Function to calculate the cos of a value.
 * @param val The value to evaluate as part of the function.
 * @param rounds Number of rounds to execute for the infinite series.
 * @param mode Whether to evaluate as a rad or deg.
 */
export function cos(val: number, rounds: number = 40, mode: 'Deg' | 'Rad' = 'Deg'): BigNumber {
    val = mode === 'Deg' ? val * (PI / 180.0) : val;
    let retained = new BigNumber(0);
    let nominator: BigNumber;
    let denominator: BigNumber;
    let multiplier: BigNumber;

    for (let i = 0; i < rounds; ++i) {
        nominator = power(-1, i);
        denominator = factorial(2 * i);
        multiplier = power(val, 2 * i);
        retained = retained.plus(nominator.dividedBy(denominator).multipliedBy(multiplier));
    }

    return retained;
}
