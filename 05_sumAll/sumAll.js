const sumAll = function(x, y) {
    let sum = 0;
    const ERROR = "ERROR";

    if (typeof(x) == typeof(y)) {
        if (x < 0 || y < 0) {
            return ERROR;
        } else if (x > y) {
            for (let num = y; num <= x; num++) {
                sum = sum + num;
            }
        } else if (x <= y) {
            for (let num = x; num <= y; num++) {
                sum = sum + num;
            }
        }
    } else {
        return ERROR;
    }
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
