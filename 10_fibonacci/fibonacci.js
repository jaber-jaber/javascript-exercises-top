const fibonacci = function(index) {
    let prev = 0;
    let next = 1;
    let fNumber;
    let intIndex = parseInt(index);

    if (intIndex === 1) {
        return 1;
    }
    
    if (intIndex === 0) {
        return 0;
    } else if (intIndex < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= intIndex; i++) {
            fNumber = prev + next;
            prev = next;
            next = fNumber;
        }
    }
    
    return fNumber;
};

// Do not edit below this line
module.exports = fibonacci;
