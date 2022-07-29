module.exports = function toReadable(number) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let readable;

    if (number < 20) {
        readable = units[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10) {
            readable =
                dozens[Math.floor(number / 10)] + " " + units[number % 10];
        } else {
            readable = dozens[Math.floor(number / 10)];
        }
    } else if (number >= 100 && number < 1000) {
        let number1 = number - Math.floor(number / 100) * 100;

        if (number1 == 0) {
            readable = units[Math.floor(number / 100)] + " hundred";
        }
        if (number1 > 0 && number1 < 20) {
            readable =
                units[Math.floor(number / 100)] + " hundred " + units[number1];
        } else if (number1 >= 20) {
            if (number1 % 10) {
                readable =
                    units[Math.floor(number / 100)] +
                    " hundred " +
                    dozens[Math.floor(number1 / 10)] +
                    " " +
                    units[number1 % 10];
            } else {
                readable =
                    units[Math.floor(number / 100)] +
                    " hundred " +
                    dozens[Math.floor(number1 / 10)];
            }
        }
    }
    return readable;
};
