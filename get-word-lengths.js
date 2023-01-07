const getWordLengths = function (someWords) {
    const wordLengths = someWords.map(word => word.length);
    return wordLengths;
};

module.exports = getWordLengths;