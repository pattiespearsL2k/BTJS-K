
function Sort() {
    var a = Number(document.getElementById("inpNum1").value);
    var b = Number(document.getElementById("inpNum2").value);
    var c = Number(document.getElementById("inpNum3").value);
    var sort = "";
    if (a > b) {
        if (b > c) {
            sort = c + " < " + b + " < " + a;
        }
        else if (a > c) {
            sort = b + " < " + c + " < " + a;

        }
        else
            sort = b + " < " + a + " < " + c;

    }
    else if (b > c) {

        if (a > c) sort = c + " < " + a + " < " + b;
        else sort = a + " < " + c + " < " + b;
    }
    else sort = a + " < " + b + " < " + c;
    document.getElementById("txtSort").innerHTML = sort;

}
document.getElementById("btnSort").onclick = Sort;

