var num1,num2,dropdownMenuButton1
function add(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var add=num1+num2;
    alert(add);

}

function sub(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var sub=num1-num2;
    alert(sub);

}


function mult(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var mult=num1*num2;
    alert(mult);

}


function div(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var div=num1/num2;
    alert(div);

}

function mod(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var mod=num1%num2;
    alert(mod);

}