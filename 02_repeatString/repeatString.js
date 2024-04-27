const repeatString = function(string, num) {

    const ERROR = "ERROR";

    if (num < 0) return ERROR;
    
    let repeatString = '';

    for (let i = 0; i < num; i++) {
        repeatString += string;
    }

    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
