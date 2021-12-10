function Count(){
    var a = Number(document.getElementById("inpN1").value);
    var b = Number(document.getElementById("inpN2").value);
    var c = Number(document.getElementById("inpN3").value);
    var countEven=0;
    var countOdd=0;

    if(a%2===0) countEven++;
    if(b%2===0) countEven++;
    if(c%2===0) countEven++;
    countOdd= 3-countEven;
    
    document.getElementById("txtCount").innerHTML=" Có " + countEven + " số chẵn và "+ countOdd+ " số lẻ ";
    
}
document.getElementById("btnCount").onclick=Count;