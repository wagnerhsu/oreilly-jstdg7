let count = [1, , 3];
for(let item in count) {
    console.log(item);
}
console.log("foreach:");
count.forEach(x => console.log(x));

console.log(Array.of(5));