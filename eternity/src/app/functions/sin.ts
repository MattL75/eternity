import { power } from './power';
import { factorial } from './factorial';
import BigNumber from 'bignumber.js';
import { PI } from './pi';

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
