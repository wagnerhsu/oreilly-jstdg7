let o = { 
    x: "don't change this value"
};

let otherFunc = function(obj) {
    obj.x = "Hi";
    console.log(obj);
};
console.log(otherFunc(Object.create(o)));
console.log(o);