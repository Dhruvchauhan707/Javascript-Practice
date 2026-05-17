let num;
let count=0;
for(let i=1;i<6;i++)
{
     num=parseInt(prompt("enter a number"));

     if(num=>0)
     {
        count++; 
     }
}    

console.log(`${count} number is positive OR ${count-5} number nagetive`);