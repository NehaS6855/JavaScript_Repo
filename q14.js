var prompt=require('prompt-sync')();
{
let i,n,f=1;
n=prompt("Enter an natural number ::");
for (i=1;i<=n;i++)
{
    f=f*i;
}
    console.log("Factorial Amount ::",f)

}