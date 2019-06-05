import { abs } from './abs';

const epsilon = 0.000001;

export function sqrt(x: number, x0: number): number {
    const x1 = (x0 + (x / x0)) / 2.0;
    if (abs(x1 - x0) < epsilon) {
        return x1;
    } else {
        return sqrt(x, x1);
    }
}
