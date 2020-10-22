module.exports = function toReadable (number) {
    let length = 0;
    let num = number;
    let result = "";
    let oneDigit = 0;
    let twoDigit = 0;
    let threeDigit = 0;
    let need = true;
    while(num > 1) {
        num /= 10;
        length++;
    }
    if (number === 0) {
        return "zero";
    }
    if (number === 10) {
        return "ten";
    }
    if(number === 100) {
        return "one hundred";
    }
    if(length === 3) {
        oneDigit = number%10;
        twoDigit = number%100;
        threeDigit = (number-twoDigit)/100;
    } else if(length === 2){
        twoDigit = number;
        oneDigit = number%10;
    } else {
        oneDigit = number;
    }
   if (threeDigit != 0) {
    switch(threeDigit) {
        case 1:
        result += "one hundred";
        break;
        case 2:
        result += "two hundred";
        break;
        case 3:
        result += "three hundred";
        break;
        case 4:
        result += "four hundred";
        break;
        case 5:
        result += "five hundred";
        break;
        case 6:
        result += "six hundred";
        break;
        case 7:
        result += "seven hundred";
        break;
        case 8:
        result += "eight hundred";
        break;
        case 9:
        result += "nine hundred";
    }
   }
   if(number%100 != 0 && number > 99) {
       result += " ";
   }
   if(twoDigit >= 10 && twoDigit <= 20) {
    need = false;
    switch(twoDigit) {
        case 10:
        result += "ten";
        break;
        case 11:
        result += "eleven";
        break;
        case 12:
        result += "twelve";
        break;
        case 13:
        result += "thirteen";
        break;
        case 14:
        result += "fourteen";
        break;
        case 15:
        result += "fifteen";
        break;
        case 16:
        result += "sixteen";
        break;
        case 17:
        result += "seventeen";
        break;
        case 18:
        result += "eighteen";
        break;
        case 19:
        result += "nineteen";
        break;
        case 20:
        result += "twenty";
        break;
   }
} else if (twoDigit > 20) {
    twoDigit=(twoDigit - oneDigit)/10;
    switch(twoDigit) {
        case 2:
        result += "twenty";
        break;
        case 3:
        result += "thirty";
        break;
        case 4:
        result += "forty";
        break;
        case 5:
        result += "fifty";
        break;
        case 6:
        result += "sixty";
        break;
        case 7:
        result += "seventy";
        break;
        case 8:
        result += "eighty";
        break;
        case 9:
        result += "ninety";
    }
}
if(number%10 != 0 && twoDigit < 10) {
    if(number%100 > 10){
        result += " ";
    }
    need = true;
}
if (oneDigit != 0 && need) {
    switch(oneDigit) {
        case 1:
        result += "one";
        break;
        case 2:
        result += "two";
        break;
        case 3:
        result += "three";
        break;
        case 4:
        result += "four";
        break;
        case 5:
        result += "five";
        break;
        case 6:
        result += "six";
        break;
        case 7:
        result += "seven";
        break;
        case 8:
        result += "eight";
        break;
        case 9:
        result += "nine";
        break;
    }
   }
   return result;
}