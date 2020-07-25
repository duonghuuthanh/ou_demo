import { getCategories, getItems, addItem } from "./services.js";

window.displayCategory = (renderHTML) => {
    getCategories().then(cates => {
        let c = document.getElementById("cateId");
        c.innerHTML = "";
        cates.forEach(cat => {
            c.innerHTML += renderHTML(cat);
        });
    })
}

window.itemDefault = item => {
    return `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.amount}</td>
                <td>${item.createdDate}</td>
                <td>${item.category}</td>
                <td></td>
            </tr>`;
};

window.displayItems = (renderHTML, cateId=-1, sortBy=null) => {
    getItems().then(items => {
        if (cateId > 0)
            items = items.filter(it => it.category == cateId);

        if (sortBy != null) {
            items.sort(sortBy);
        }

        let item = document.getElementById("itemId");
        item.innerHTML = "";
        items.forEach(it => {
            item.innerHTML += renderHTML(it)
        });
    });
}

window.sortByName = (item1, item2) => {
    return item1.name.localeCompare(item2.name);
}

window.sortByAmount = (item1, item2) => {
    let d = item1.amount - item2.amount;

    return -(d > 0 ? 1: (d < 0?-1:0));
}

window.addItemView = () => {
    let name = document.getElementById("nameId").value;
    let amount = parseFloat(document.getElementById("amountId").value);
    let cateId = parseInt(document.getElementById("cateId").value);

    addItem(name, amount, cateId).then(res => {
        console.log(res);
        window.location = "index.html";
    }).catch(err => {
        console.log(err)
    });
}

window.drawChart = async () => {
    const cates = await getCategories();
    const items = await getItems();

    let data = {};
    cates.forEach(cat => {
        data[cat.name] = 0;
        items.forEach(it => {
            if (it.category == cat.id) {
                data[cat.name] += it.amount;
            }
        });
    });

    console.log(data);
    let labels = [];
    let values = [];
    for (let key in data) {
        labels.push(key);
        values.push(data[key]);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: '# of Votes',
                            data: values,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }