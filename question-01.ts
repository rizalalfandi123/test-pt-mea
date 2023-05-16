type IsPanlindrome = (word: string) => boolean;

export const isPalindrome: IsPanlindrome = (word) => {
  // TODO: Delete space and make lowercase
  word = word.replace(/\s/g, "").toLowerCase();

  // TODO: Reverse word
  let reverseWord = word.split("").reverse().join("");

  return word === reverseWord;
};


console.log(isPalindrome("MadAm"))
