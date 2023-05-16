type SearchPairs = (arr: number[], target: number) => number;

export const searchPairs: SearchPairs = (arr, target) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === target) {
        result++;
      }
    }
  }

  return result;
};

console.log(searchPairs([2, 3, 5, 8, 6, 4, 1], 2));
