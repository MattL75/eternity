import { power } from './power';
import { factorial } from './factorial';
import BigNumber from 'bignumber.js';
import { PI } from './pi';

/**
 * Function to calculate the sin of a value.
 * @param val The value to evaluate as part of the function.
 * @param rounds Number of rounds to execute for the infinite series.
 * @param mode Whether to evaluate as a rad or deg.
 */
export function sin(val: number, rounds: number = 40, mode: 'Deg' | 'Rad' = 'Deg'): BigNumber {
    val = mode === 'Deg' ? val * (PI / 180.0) : val;
    let retained = new BigNumber(0);
    let nominator: BigNumber;
    let denominator: BigNumber;
    let multiplier: BigNumber;

    for (let i = 0; i < rounds; ++i) {
        nominator = power(-1, i);
        denominator = factorial(2 * i + 1);
        multiplier = power(val, 2 * i + 1);
        retained = retained.plus(nominator.dividedBy(denominator).multipliedBy(multiplier));
    }

    return retained;
}
