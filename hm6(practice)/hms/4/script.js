
function reverse(){
    a =  document.getElementsById("first").value;
   document.getElementById("disp").innerHTML =  reverse_a_number(a);
}
function reverse_a_number()
{
  a = a + "";
  return a.split("").reverse().join("");
}

