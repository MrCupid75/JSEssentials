let length;
let width;

const calculateArea = () => {
    length = document.querySelector("#length").value;
    width = document.querySelector("#width").value;

    let result = parseFloat(length) * parseFloat(width);
    document.getElementById("result").innerHTML = parseFloat(result);
}