var prompt=require ('prompt-sync')();
function main()
{
let p,r,t,si;
console.log("Enter the principal,rate and time :");
p=prompt("Enter the Principal:");
r=prompt("Enter the Rate:");
t=prompt("Enter the Duration:");
si=(p*r*t)/100;
console.log("Simple Interest ::",si)
}
main()