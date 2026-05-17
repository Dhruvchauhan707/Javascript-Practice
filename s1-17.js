let count=0;

for(let i=1;i<=20;i++)
{
    if(i%2!=0 && count<3)
    {
        console.log(i);
        count++;
    }
}