
export function findMaxValueInArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }
  if (array.length === 0) {
    return undefined;
  }

  let max = -Infinity;
  for (const value of array) {
    const num = Number(value);
    if (Number.isNaN(num)) continue;
    if (num > max) max = num;
  }

  return max === -Infinity ? undefined : max;
}

export function findMinValueInArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }
  if (array.length === 0) {
    return undefined;
  }

  let min = Infinity;
  for (const value of array) {
    const num = Number(value);
    if (Number.isNaN(num)) continue;
    if (num < min) min = num;
  }

  return min === Infinity ? undefined : min;
}

export function findAverageValueInArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }
  if (array.length === 0) {
    return undefined;
  }

  let sum = 0;
  let count = 0;

  for (const value of array) {
    const num = Number(value);
    if (Number.isNaN(num)) continue;
    sum += num;
    count++;
  }

  return count === 0 ? undefined : sum / count;
}
