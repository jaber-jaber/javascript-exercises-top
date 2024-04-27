const reverseString = function(string) {
    const revArray = string.split("");;
    let reversedString = '';

    reversedString = revArray.reverse().toString()
    
    for (i = 0; i < reversedString.length; i++) {
      reversedString = reversedString.replace(',','')

    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
