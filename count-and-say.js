// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
// For example, the saying and conversion for digit string "3322251":

// my solution
var countAndSay = function(n) {
    if (n === 1) return "1";

    let prevTerm = "1";
    for (let i = 2; i <= n; i++){
        let newTerm = "";
        let count = 1;

        for (let j = 0; j < prevTerm.length; j++){
            if (prevTerm[j] === prevTerm[j + 1]){
                count++
            } else {
                newTerm += count + prevTerm[j];
                count = 1;
            }
        }
        prevTerm = newTerm;
    }

    return prevTerm;
};