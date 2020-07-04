let point = {
    x: 3, y: 4, valueOf: function () {
        return Math.hypot(this.x, this.y);
    }
};

console.log(point == 5);