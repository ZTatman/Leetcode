/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    let length = word2.length > word1.length ? word2.length : word1.length;
    if(word1.length === 1) return word1.concat(word2);
    if(word2.length === 1) return word1.slice(0, 1) + word2[0] + word1.slice(1);
    for(let i = 0; i < length; i++) {
        // No more chars in w1
        if(!word1[i] && word2[i]) {
            result += word2[i];
        }
        // No more chars in w2
        else if (word1[i] && !word2[i]) {
            result += word1[i];
        }
        // perfect case
        else result += word1[i] + word2[i];

        console.log(`${i} -> result: ${result}`)

    }
    return result;
};
