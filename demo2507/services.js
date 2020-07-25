let host = "https://5efaff6280d8170016f75d51.mockapi.io";

let apis = {
    "category": `${host}/api/category`,
    "item": `${host}/api/items`
};

export let getCategories = async () => {
    const res = await fetch(apis["category"]);
    const data = await res.json();

    return Promise.resolve(data);
}

export let getItems = async () => {
    const res = await fetch(apis["item"]);
    const data = await res.json();

    return Promise.resolve(data);
}

export let addItem = async (name, amount, cateId) => {
    let d = new Date();
    const res = await fetch(apis["item"], {
        method: "post",
        body: JSON.stringify({
            "name": name,
            "amount": amount,
            "category":cateId,    
            "createdDate": `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.status == 201) {
        const data = await res.json();

        return Promise.resolve(data);
    }

    return Promise.reject(res);
}