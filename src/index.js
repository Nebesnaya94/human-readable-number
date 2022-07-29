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
        if (number % 100 > 0 && number % 100 < 20) {
            readable =
                units[Math.floor(number / 100)] +
                " hundred " +
                units[number % 100];
        } else if (number % 100 >= 20 && number % 10) {
            readable =
                units[Math.floor(number / 100)] +
                " hundred " +
                dozens[Number(number[1])] +
                " " +
                units[Number(number[2])];
        } else if (number % 100 >= 20 && number % 10 == 0) {
            readable =
                units[Math.floor(number / 100)] +
                " hundred " +
                dozens[Number(number[1])];
        } else {
            readable = units[Math.floor(number / 100)] + " hundred";
        }
    }
    return readable;
};
