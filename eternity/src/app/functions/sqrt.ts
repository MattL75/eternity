import { abs } from './abs';

export function sqrt(x: number, x0: number): number {
    const x1 = (x0 + (x / x0)) / 2.0;
    if (abs(x1 - x0) < Number.EPSILON) {
        return x1;
    } else {
        return sqrt(x, x1);
    }
}
