const addOne = function (numbers) {
    const newArray = numbers.map(number => number + 1);
    return newArray;
};

module.exports = addOne;