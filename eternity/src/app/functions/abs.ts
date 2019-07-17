/**
 * Absolute value function.
 * @param val The number to evaluate.
 */
export function abs(val: number): number {
    if(val < 0.0) {
        return -val;
    } else {
        return val;
    }
}
