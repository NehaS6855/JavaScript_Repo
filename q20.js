function main()
{
let a=1,b=0,c,n;
console.log("First 15 Pell Numbers Are ::");
for (n=1;n<=13;n++)
{
    c=a + 2*b;
    a=b;
    b=c;
    console.log(c);
}
}
main()