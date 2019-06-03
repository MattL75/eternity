import { power } from './power';
import { factorial } from './factorial';
import BigNumber from 'bignumber.js';

export function ePowerX(val: number, rounds: number = 20): BigNumber {
    let retained = new BigNumber(1 + val);
    let nominator: BigNumber, denominator: BigNumber;
    for (let i = 0; i < rounds; ++i) {
        nominator = power(val, i + 2);
        denominator = factorial(i + 2);
        retained = retained.plus(nominator.dividedBy(denominator));
    }
    return retained;
}
