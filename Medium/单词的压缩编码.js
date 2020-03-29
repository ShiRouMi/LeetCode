/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words = words.sort((a, b) => b.length - a.length)
    let length = words.length, ss = words[0] + '#'
    for(let i=1; i<length; i++) {
        let val = words[i] + '#'
        if(ss.indexOf(val) === -1) {
            ss += val
        }
    }
    return ss.length
};

console.log(minimumLengthEncoding(["time", "me", "mell"]))