var prompt=require('prompt-sync')();
let a;
a=prompt("Enter the choice between 1,2,3 ::")
switch(a)
{
    case "1":
    console.log("good");
    break;
    case "2":
    console.log("better");
    break;
    case "3":
    console.log("best");
    break;
    default:
    console.log("invalid");

}