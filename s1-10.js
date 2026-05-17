let pass=123456;

let pass2=prompt("enter youre password");

if(pass2=="")
{
    console.log("please provide password...");
}    
else
{
    if(pass==pass2)
    {
        console.log("log in sucssesfull...");
    }
    else{
        console.log("incorect password...");
    }
}