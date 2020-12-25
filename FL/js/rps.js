document.getElementById("komBildo").src= img/p(3).png;
document.getElementById("miaBildo").src= img/p(3).png;
document.getElementById("homPoento").innerHTML=0;
document.getElementById("komPoento").innerHTML=0;
document.getElementById("Ŝtono"  ).onclick = () => kompari(0);
document.getElementById("Papero" ).onclick = () => kompari(2);
document.getElementById("Tondilo").onclick = () => kompari(1);

kompari = function(n){
    let p=Math.floor(3*Math.random());
    if (p-n==-1 || p-n==2){
        document.getElementById("komPoento").innerHTML = ++komp;
    }
        else
         if (p-n != 0){
        document.getElementById("homPoento").innerHTML = ++homo;
    }
    document.getElementById("komBildo").src=novImg[p];
    document.getElementById("miaBildo").src=novImg[n];
}

let novImg= ["img/r(3).png","img/s(3).png","img/p(3).png"];    
let homo=0;
let komp=0;
