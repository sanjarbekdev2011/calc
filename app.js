function tozala(){
    var inp1 = document.getElementById("inp1");
    var inp2 = document.getElementById("inp2");
    var inp3 = document.getElementById("inp3");
    var inp4 = document.getElementById("inp4");

    inp1.value = " ";
    inp2.value = " ";
    inp3.value = " ";
    inp4.value = " ";

}

function hisobla(){
    var inp1 = document.getElementById("inp1");
    var inp2 = document.getElementById("inp2");
    var inp3 = document.getElementById("inp3");
    var inp4 = document.getElementById("inp4");
    var select = document.getElementById('select');
    var natijainp = document.getElementById('natija'); 
    var natija1 = 0;
    var natija2 = 0;
    var natija = 0;


    natija1 =  inp1.value/inp2.value;
    natija2 =  inp3.value/inp4.value;
    console.log(typeof(select.value));

    if(select.value == "*"){
        natija = natija1 * natija2;
        natijainp.value = natija;
        console.log(select.value);
    }
    if(select.value == "/") {
        natija = natija1 / natija2;
        natijainp.value = natija;
        console.log(select.value);
    } 
    if(select.value == "-") {
        natija = natija1 - natija2;
        natijainp.value = natija;
        console.log(select.value);
    } 
    if(select.value == "+") {
        natija = natija1 + natija2;
        natijainp.value = natija;
        console.log(select.value);
    } 

}