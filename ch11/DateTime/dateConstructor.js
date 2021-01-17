let now = new Date();
console.log('toString:', now.toString());
console.log('toLocaleString:', now.toLocaleString());
console.log('toISOString:', now.toISOString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toDateString());
console.log(now.toTimeString());
let century = new Date(2100, // Year 2100
    0, // January
    1, // 1st
    2, 3, 4, 5); // 02:03:04.005, local time

const formatNumberToString = (num, minChars) => {
    return num.toString().length < minChars
        ? formatNumberToString(`0${num}`, minChars)
        : num.toString()
}
let month = now.getMonth() + 1;
console.log(`${now.getFullYear()}-${formatNumberToString(month, 2)}-${formatNumberToString(now.getDate(), 2)} ${formatNumberToString(now.getHours(), 2)}:${formatNumberToString(now.getMinutes(), 2)}:${formatNumberToString(now.getSeconds(), 2)}`);
function PadDigits(input, totalDigits) {
    var result = input;
    if (totalDigits > input.length) {
        for (i = 0; i < (totalDigits - input.length); i++) {
            result = '0' + result;
        }
    }
    return result;
} 