var prompt=require('prompt-sync')();
let ti,age,gender,tex;
age=prompt("Enetr age ::");
gender=prompt("Enter gender ::");
ti=prompt("Enetr amount of taxable income ::");
if(age>65 || gender=='F')
{
    console.log("Wrong Category")
}
else if(age<=65 && gender=='M')
{
if (ti<160000)
    tax=0;
else if (ti-160000 && ti<=500000)
    tax=(ti-160000)*10/100;
else if(ti>500000 && ti<=800000)
    tax=[(ti-500000)*20/100 +34000];
else if (ti>800000)
    tax=[(ti-800000)*30/100 +94000];

    console.log("Income tax payable",tax)
}