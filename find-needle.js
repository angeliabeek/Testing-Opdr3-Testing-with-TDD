const findNeedle = function (words, item) {
    const indexNeedle = words.findIndex(word => word == item);
    return indexNeedle;
    // or return words.indexOf(item);
};
module.exports = findNeedle;