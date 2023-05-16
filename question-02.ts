type RotateArrayLeft = (arr: number[], rotations: number) => number[];

export const rotateArrayLeft: RotateArrayLeft = (arr, rotation) => {
  const lengthOfArray = arr.length;

  // TODO: return arr when is empty array
  if (lengthOfArray === 0) return arr;

  const modulusRotation = rotation % lengthOfArray;

  const separateArray1 = arr.slice(modulusRotation);

  const separateArray2 = arr.slice(0, modulusRotation);

  return separateArray1.concat(separateArray2);
};

