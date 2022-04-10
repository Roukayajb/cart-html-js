function DeleteAll(){

   var cartitems= document.getElementsByClassName("Cart-Items");
   for (var i = 0; i < cartitems.length; i++) {
    cartitems[i].style.display = 'none';
   }
   var checkout= document.getElementsByClassName("checkout");
   for (var j = 0; j < checkout.length; j++) {
    checkout[j].style.display = 'none';
}

}
function Modifyqteplus(price,i){
var qteinitial=document.getElementById("qte"+i).innerHTML;
console.log(qteinitial);
let ancientSum=document.getElementById("sum"+i).innerHTML;
console.log(ancientSum.length);
let ancientSumm=ancientSum.substring(0,ancientSum.length-1);
console.log(ancientSumm);
     qteinitial++ ;
    console.log(qteinitial);  
  document.getElementById("qte"+i).textContent= qteinitial ;
  let nvQte=qteinitial*price;
    var sum=document.getElementById("sum"+i).textContent= nvQte+"D" ;
    document.getElementById("sum"+i).textContent=sum;
   let ancientTot= document.getElementById("tot").innerHTML ;
   ancientTot= ancientTot.substring(0,ancientTot.length-1);
   console.log(ancientTot);
  let nvTot= ancientTot-ancientSumm;
  nvTot= nvTot+nvQte;
  console.log(nvTot);
  document.getElementById("tot").textContent= nvTot+"D";
}
function Modifyqteminus(price,i){
    var qteinit=document.getElementById("qte"+i).innerHTML;
    console.log(qteinit);
    if(qteinit==1){
        console.log(qteinit);  
        qteinit--;
        document.getElementById("qte"+i).textContent= qteinit ;
        document.getElementById("sum"+i).textContent=qteinit+"D"
        let ancTot= document.getElementById("tot").innerHTML ;
        ancTot= ancTot.substring(0,ancTot.length-1);
        let nvtot= ancTot-price;
        document.getElementById("tot").textContent= nvtot+"D";
    }else if(qteinit >1){
        qteinit-- ;
        console.log(qteinit);  
        document.getElementById("qte"+i).textContent= qteinit ;
        let nvqnte=qteinit*price;
        console.log(nvqnte);
        document.getElementById("sum"+i).textContent= nvqnte+"D"
        var summ=document.getElementById("sum"+i).innerHTML ;
        let  summin= summ.substring(0,summ.length-1);
        console.log(summin);
        let nvsum=Math.abs(summin-nvqnte);
        document.getElementById("sum"+i).textContent=nvsum+"D";
        let ancTot= document.getElementById("tot").innerHTML ;
        ancTot= ancTot.substring(0,ancTot.length-1);
        let nvtot= ancTot-nvqnte;
        document.getElementById("tot").textContent= nvtot+"D";
    }else {
        alert("veuillez saisir une quantité positive !");

    }

}

function removeitem(x){
    var summ=document.getElementById("sum"+x).innerHTML ;
        let  summin= summ.substring(0,summ.length-1);
        console.log(summin);
        let ancTot= document.getElementById("tot").innerHTML ;
        ancTot= ancTot.substring(0,ancTot.length-1);
        let nvtot= ancTot-summin;
        document.getElementById("tot").textContent= nvtot+"D";
    const element=document.getElementById("item"+x);
    element.remove();

}
function red(c){
    var el=document.getElementsByClassName("like");
    console.log(el);
    document.getElementsByClassName("like")[c-1].style.fill="red";
 
}