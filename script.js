
function Solve(value) {
    document.getElementById('res').value += value;
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    var current = document.getElementById('res').value;
    document.getElementById('res').value = current.substring(0, current.length - 1);
}

function Result() {
    var result = eval(document.getElementById('res').value);
    document.getElementById('res').value = result;
}
