function hello(name:string|number, t:any) {
    console.info(`Hello ${name} --- ${t}`)
}

hello("Nam", "abc")
hello(4545, true)