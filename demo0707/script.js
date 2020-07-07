// let a = [7, 5, 6, 7, 6, 7, 9]
// console.info(a.filter(value => a.indexOf(value) == a.lastIndexOf(value)))

// let s = "hello";
// let d = {};
// for (let i = 0; i < s.length; i++)
//     if (d.hasOwnProperty(s[i])) // s[i] in d
//         d[s[i]]++;
//     else
//         d[s[i]] = 1;

// console.info(d);

Date.prototype.isLeap = function() {
    console.info(this);
    let y = this.getFullYear();
    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
}

// let d = new Date(2019, 11, 12);
// console.info(d.isLeap());

Number.prototype.isPrime = function() {
    let n = this.valueOf();
    if (n < 2)
        return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;

    return true;
}

// let n = 17;
// console.info(n.isPrime());
String.prototype.countWords = function() {
    let s = this.valueOf();
    return s.trim().split(/\s+/).length;
}

let s = "   This is     a first    js class   ";
console.info(s.countWords());