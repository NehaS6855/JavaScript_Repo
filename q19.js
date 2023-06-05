function main()
{
let i,f=2,s=1,t,sum=0;
sum=f+s;
for (i=1;i<=8;i++)
{
    t=f+s;
    sum+=t;
    f=s;
    s=t;
}
    console.log("Sum =",sum);
}
main()