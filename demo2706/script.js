function execute() {
    let w = document.getElementById("weightId").value;
    let h = document.getElementById("heightId").value;

    let weight = parseFloat(w);
    let height = parseFloat(h);
    let bmi = weight / Math.pow(height, 2);

    let re = document.getElementById("ketQuaId");
    let k = "";
    if (bmi < 18.5) {
        k = "underweight";
    } else if (bmi < 24.9) {
        k = "normal";
    }
    re.innerHTML = `<span style='color:red;'>${bmi}; result:${k}</span>`;
}

function exchange() {
    let amount = parseFloat(document.getElementById("amountId").value);
    let currency = document.getElementById("currencyId").value;

    let k = 0;
    switch (currency) {
        case "eur":
            k = amount / 26000;            
            break;
        case "usd":
            k = amount / 23000;
            break;
        case "aud":
            k = amount / 18000;
            break;
    }

    let k2 = document.getElementById("ketQuaId2");
    k2.innerHTML = `${amount} VND = ${k.toFixed(2)} ${currency}`;
}

function changeImg(obj) {
    let im = document.getElementById("mainImg");
    im.src = obj.src;
}

function changeColor(nameColor) {
    let m = document.getElementById("mainImg");
    m.src = `images/galaxys8/${nameColor}1.jpg`;

    let images = document.querySelectorAll(".thumb img");
    images.forEach(function(value, index) {
        value.src = `images/galaxys8/${nameColor}${index + 1}.jpg`;
    });
}