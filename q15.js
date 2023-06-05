var prompt=require('prompt-sync')();
{
    let i,n;
    let prime=true;
    n=prompt('Enter an integer ::');
    if(n==1){
        prime=true;
    }
    if(n>1){
    for(i=2;i<n;i++)
{
    if(n%1==0)
    prime=false;
    break;
}
    }
if (prime)
    console.log("Prime Number");
else
    console.log("Not a Prime Number");
}