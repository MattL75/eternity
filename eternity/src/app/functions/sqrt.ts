import { abs } from './abs';

/** Constant value for epsilon. */
const epsilon = 0.000001;

/**
 * Square root function. Used by typing sqrt(number). Babylonian method.
 * @param x The number to find the square root of.
 * @param x0 An approximation of the square root.
 */
export function sqrt(x: number, x0: number): number {
    const x1 = (x0 + (x / x0)) / 2.0;
    if (abs(x1 - x0) < epsilon) {
        return x1;
    } else {
        return sqrt(x, x1);
    }
}
