import { power } from './power';
import { factorial } from './factorial';
import BigNumber from 'bignumber.js';

export function ePowerX(val: number, rounds: number = 40): BigNumber {
    let retained = new BigNumber(1);
    let nominator: BigNumber;
    let denominator: BigNumber;

    for (let i = 1; i < rounds; ++i) {
        nominator = power(val, i);
        denominator = factorial(i);
        retained = retained.plus(nominator.dividedBy(denominator));
    }

    return retained;
}
