function cong(a, C=7, b=0) {
    return a + b;
}

function showLock() {
    let d = new Date();

    return `${d.getDate()}:${d.getMonth() + 1}:${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
} 

function addColor() {
    let color = document.getElementById("colorId").value;
    let area = document.getElementById("colorArea");
    area.innerHTML += `<div><input type="button" style="background-color: ${color};" onclick="fillColor(this)" /></div>`;
}

function hideShape() {
    let shapes = document.querySelectorAll(".shapeSvg > div");
    shapes.forEach(v => v.style.display="none");
}

function showShape(obj) {
    hideShape();
    document.querySelector(`.shapeSvg > div:nth-child(${obj.getAttribute('rel')})`).style.display = "block";
}

function fillColor(obj) {
    let c = obj.style.backgroundColor;
    let svg = document.querySelectorAll("svg :first-child");
    svg.forEach(v => v.setAttribute("fill", c));
}

function init() {
    let shapes = document.querySelectorAll(".shapeSvg > div:not(:first-child)");
    shapes.forEach(value => {
        value.style.display = "none";
    });

    setInterval(function() {
        let clock = document.getElementById("clock");
        clock.innerText = showLock();
    }, 1000);
}