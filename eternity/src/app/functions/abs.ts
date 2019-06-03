export function abs(val: BigNumber): BigNumber {
  if(val < 0.0) {
    return -val;
  } else {
    return val;
  }
}
