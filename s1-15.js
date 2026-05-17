let a;

while(1)
{
    a=prompt("enter a  odd number");
  if(a=="" || isNaN(a))
  {
      console.log("please give the curract input");
      break;
  }  
  else{

  
    if(a%2==0)
    {
        console.log("that is even number,please try again");
        break;
    }    
    else{
        console.log(a);
    }
  }  
}