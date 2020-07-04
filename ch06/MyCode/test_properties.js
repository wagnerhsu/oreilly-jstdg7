let o = { x: 1 };
let r = "x" in o;
console.assert(r === true);
console.assert(o.hasOwnProperty("x") === true);
console.assert(o.hasOwnProperty("Y") === false);
console.assert(o.hasOwnProperty("toString") === false);
console.assert(Object.prototype.hasOwnProperty("toString") === true);