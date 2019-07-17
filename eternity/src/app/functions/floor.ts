/**
 * Floor function, brings the passed value down to its closest lower integer.
 * @param val The value to evaluate.
 */
export function floor(val: number): number {
    let i: number = 1;
    let prev: number = 1;
    let result: number = 0;
    let prevResult: number = 0;

    if (val > 0) {
        while (val > result) {
            if (val >= prev) {
                result = prev;
                prev = prev + i;
                i = i * 2;
            } else {
                if (prevResult == result) {
                    return result;
                }
                prevResult = result;
                i = 1;
                prev = result;
            }
        }
    } else if (val < 0) {
        prev = -1;
        while (val < result) {
            if (val <= prev) {
                result = prev;
                prev = prev - i;
                i = i * 2;
            } else {
                if (prevResult == result) {
                    return result;
                }
                prevResult = result;
                i = 1;
                prev = result;
            }
        }
    }

    return result;
}
