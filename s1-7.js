let age = prompt("enter youre age:");

if(age=="")
{
      console.log("please enter a age...");
}
else if(isNaN(age))
{
      console.log("please enter a number...");
}
else
{
     if(age>17 || age.trim()>17)
     {
        console.log("you are eligible for vote");
     }
     else{
        console.log("sorry you can not eligible for vote..");
     }
}