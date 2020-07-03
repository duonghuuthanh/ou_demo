let a = [5, 8, 5, 9, -9, 4];
console.info(a.map(value =>  value + 2));
console.info(a.filter(value => value < 0 && value % 2 != 0))
a.sort((t1, t2) => t2 - t1);
console.info(a);


let add = (a, b) => a + b;
let mul = (a, b) => a * b;

function execute(func) {
    return func(20, 10);
}

// console.info(execute(add));
// console.info(execute(mul));


// function add(a, b) {
//     return a + b;
// }

function student(firstName, lastName) {
    this.fn = firstName;
    this.ln = lastName;

    this.fullName = () => {
        return ""; //`${this.fn} ${this.ln}`;
    } 
}

let s1 = new student("A", "B");
console.info(s1.fullName());