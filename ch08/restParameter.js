function max(first=-Infinity, ...rest) {
    let maxValue = first;
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}

const m = max(1, 10, 100, 2, 3, 1000, 4, 5, 6);
console.log(m);
console.log(max());