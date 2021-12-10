function Hello() {
    var myOption = document.getElementById("mySelect").value;
    var x = "";
    switch (myOption) {
        case "B":
            x = "Xin chào Bố";
            break;
        case "M":
            x = "Xin chào Mẹ";
            break;
        case "A":
            x = "Xin chào Anh trai";
            break;
        case "E":
            x = "Xin chào Em gái";
            break;

        default:
            break;

    }
    document.getElementById("txtHello").innerHTML = x;
   
}

document.getElementById("btnHello").onclick = Hello;
