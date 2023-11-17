// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:
// Input: s = "Hello"
// Output: "hello"

// Example 2:
// Input: s = "here"
// Output: "here"

// Example 3:
// Input: s = "LOVELY"
// Output: "lovely"

// my solution(elaborate version)
var toLowerCase = function(s) {
    // declare an empty variable
    let result = '';
    // looping over the string
    for (let i = 0; i < s.length; i++){
        const charCode = s.charCodeAt(i)
        // checking if character is uppercase
        if(charCode >= 65 && charCode <= 90){
            // convert to lowercase by adding ascii difference
            result += String.fromCharCode(charCode + 32)
        } else {
            // keep the character as it is
            result += s[i]
        };
    }
    // return result
    return result;
};

// my solution(short version)
var toLowerCaseShort = function(s) {
    return s.toLowerCase()
};