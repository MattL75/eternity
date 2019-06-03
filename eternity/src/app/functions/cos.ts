import { power } from './power';
import { factorial } from './factorial';
import { PI } from './pi';
import BigNumber from 'bignumber.js';

export function cos(val: number, rounds: number = 40): BigNumber {
    val = val * (PI / 180.0);
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
