import { isPalindrome } from "./question-01";
import { rotateArrayLeft } from "./question-02";
import { searchPairs } from "./question-03";

// COUNTION ==> TIDAK SEMPAT BUAT UNIT TEST KARENA WAKTU HABIS

// Palidrom
console.log(isPalindrome("ada"));
console.log(isPalindrome("adam"));
console.log(isPalindrome("Ada"));
console.log(isPalindrome("MadAm"));

// Rotate array
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
console.log(
  [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51],
  10
);
console.log(
  rotateArrayLeft(
    [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97],
    13
  )
);

// Search Pairs Count
console.log(searchPairs([1, 5, 3, 4, 2], 2))
console.log(searchPairs([2, 3, 5, 8, 6, 4, 1], 2))
console.log(searchPairs([270, 113, 240, 125, 330, 110], 1))

