function c_to_f(){
        a = document.getElementById("first").value;
        document.getElementById("disp").innerHTML = Math.round(10*(a * 1.8 + 32) )/10 + "°F";
}
function f_to_c(){
        a = document.getElementById("first").value;
        document.getElementById("disp").innerHTML = Math.round(10*((a - 32 )/ 1.8))/10 + "°C";
}