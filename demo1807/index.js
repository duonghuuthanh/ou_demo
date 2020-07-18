class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calLen(p) {
        return Math.sqrt(Math.pow(this.x-p.x, 2) 
                + Math.pow(this.y-p.y, 2));
    }
}

// let p1 = new Point2D(2, 3);
// let p2 = new Point2D(7, 8);
// console.info(p1.calLen(p2));

new Promise(resolve => resolve(1)).then(k => {
    console.info(k);
    return k + 10;
}).then(k => {
    console.info(k);
}).then(() => {
    console.info("done");
}).catch();

console.info("sync");

