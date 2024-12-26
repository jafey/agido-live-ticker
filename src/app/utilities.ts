export function removeByIndex(arr: string[], index: number): string[] {
  if (index >= 0 && index < arr.length) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
  }
  return arr;
}

export function getRandomNumber(n: number): number {
  return Math.floor(Math.random() * n);
}