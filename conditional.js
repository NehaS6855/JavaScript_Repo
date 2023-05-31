let english=70;
let hindi=90;
let physics=75;
let chemistry=60;
let maths=68;
let total,avg,grade;
 total=english+hindi+physics+chemistry+maths;
 console.log("Total = " , total);
 avg=total/5;
 console.log("Average = " , avg);

 if(avg>=90)
 grade="A+";
 else if(avg>=80 && avg<90)
 grade="A";
 else if(avg>=60 && avg<80)
 grade="B+";
 else if(avg>=50 && avg<60)
 grade="B";
 else if(avg>=35 && avg<50)
 grade="C";
 else 
 grade="Fail";

 console.log("Grade is = " , grade);

