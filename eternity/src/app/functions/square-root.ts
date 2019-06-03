import { abs } from './abs';

export function squareRoot(x: number, x0: number): number {
    let x1 = (x0 + (x / x0)) / 2.0;

    if (abs(x1 - x0) < Number.EPSILON) {
        return x1;
    } else {
        return squareRoot(x, x1);
    }
}
