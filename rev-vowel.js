// Description:
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// my solution
function isVowel(char) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return vowels.has(char.toLowerCase());
}
var reverseVowels = function (s) {
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (isVowel(chars[left]) && isVowel(chars[right])) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    } else if (isVowel(chars[left])) {
      right--;
    } else {
      left++;
    }
  }
  return chars.join("");
};
