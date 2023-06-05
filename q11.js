var prompt=require('prompt-sync')();
let tc,d,ap;
tc=prompt('Enter the total cost of item ::')
{
if(tc<=2000)
{
    d=5/100*tc
}
else if(tc>=2001 && tc<=5000)
{
    d=25/100*tc
}
else if(tc>=5001 && tc<=10000)
{
    d=35/100*tc
}
else(tc>10001)
{
    d=50/100*tc
}
ap=tc-d
console.log("Amount Payable ::",ap)
}
