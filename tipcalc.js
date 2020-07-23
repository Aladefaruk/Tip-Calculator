const tipmoney=()=>{

let billamount= document.getElementById("billamount").value;

let serv= document.getElementById("serv").value;

let pip= document.getElementById("pip").value;

if ( billamount==="" || serv==0){return window.alert ("Please fill the empty spaces")};

if (pip==="" || pip<=1) { pip=1; document.getElementById('each').style.display="none";} 
else{document.getElementById('each').style.display="block"};

let total= (billamount *serv)/pip;

total=Math.round((total*100)/100);

total=total.toFixed(2);

document.getElementById('totaltip').style.display="block";

document.getElementById('tip').innerHTML=total
};

document.getElementById('totaltip').style.display="none";

cal.addEventListener("click", function(){tipmoney()});



