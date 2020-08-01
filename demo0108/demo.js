function t(name) {
    this.name = name;
}

function tt(name, age) {
    t.call(this, name)
    this.age = age
}

let o = new tt('nva', 15);
console.info(`${o.name} - ${o.age}`)

function test(country, province) {
    console.info(`${this.name} - ${country} - ${province}`)
}

test.call({"name": "abc"}, "Vietnam", "TPHCM")