function DetermineTri() {
    var x = Number(document.getElementById("inp1").value);
    var y = Number(document.getElementById("inp2").value);
    var z = Number(document.getElementById("inp3").value);
    var deter = "";

    if (x == y && y == z)
        deter = "Tam giác đều";
    else if (x == y || y == z || z == x)
        deter = "Tam giác cân"

    else
        deter = "Tam giác vuông";


   document.getElementById("txtTriangle").innerHTML=deter;
}

document.getElementById("btnTriangle").onclick = DetermineTri;