let o = { x: 1, y: 2, z: 3 };
for (let i in o) {
    console.log(i);
}

let p = Object.create(o);
p.name = "hi";
console.log("enumerate p:")
for (let i in p) {
    if (!p.hasOwnProperty(i)) continue;
    console.log(i);
}
Reflect.ownKeys(p).forEach(x=>console.log(x));