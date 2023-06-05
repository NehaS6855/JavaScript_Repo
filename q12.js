var prompt=require('prompt-sync')();
let name,address,ap,tp,netAmount,d;
name=prompt("enter the name ::")
address=prompt("enter the address ::")
ap=prompt('enter the amount purchase ::')
tp=prompt("enter the type of purchase ::")
if(tp.match ('L'))
{
if(ap>=0 && ap<=2500)
    d=0
else if(ap>=25001 && ap<=57000)
    d=5/100*ap
else if(ap>=57001 && ap<=100000)
    d=75/1000*ap
else if (ap>100000)
    d=10/100*ap
}
if(tp.match('D')){
    if(ap>=0 && ap<=2500)
    d=5/100*ap
else if(ap>=25001 && ap<=57000)
    d=75/1000*ap
else if(ap>=57001 && ap<=100000)
    d=10/100*ap
else if (ap>100000)
    d=15/100*ap
}

netAmount=ap-d;
console.log("netAmount to be paid",netAmount)
console.log("Name",name)
console.log("Address",address)
