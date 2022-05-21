export const roundToTwoAfterZero = number => {
  const normalizedNumber = Number(number).toFixed(2);
  const intoNumber = Number(normalizedNumber);
  return intoNumber;
};
