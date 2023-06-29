// Description:
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// my solution
var canConstruct = function (ransomNote, magazine) {
  const charCount = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
};
