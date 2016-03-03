function showMinMax()
{
    var n1=document.getElementById("number1").value;
    var n2=document.getElementById("number2").value;
    var n3=document.getElementById("number3").value;
    console.log(n1);
    console.log(n2);
    console.log(n3);
    
    if( n1 > n2)
        {
            if(n1 > n3)
                {
                    document.getElementById("max").innerHTML= n1 + " is the maximum number" ;
                }
            else
                {
                    document.getElementById("max").innerHTML=n3 + " is the highest number";
                }
        }
    else {
        if(n2 > n3)
            {
                document.getElementById("max").innerHTML=n2 + "is the max number ";
                
            }
        else
            {
                document.getElementById("max").innerHTML=n3+ " is the greatest number"
            }
    }
};



function getMax(n1,n2,n3)
{
     if( n1 > n2)
        {
            if(n1 > n3)
                {
                    document.getElementById("max").innerHTML= n1 + " is the maximum number" ;
                }
            else
                {
                    document.getElementById("max").innerHTML=n3 + " is the maximum number";
                }
        }
    else {
        if(n2 > n3)
            {
                document.getElementById("max").innerHTML=n2 + "is the maximum number ";
                
            }
        else
            {
                document.getElementById("max").innerHTML=n3+ " is the maximum number"
            }
    }
    getMin(n1,n2,n3);
};

function getMin(n1,n2,n3){
      if( n1 < n2)
        {
            if(n1 < n3)
                {
                    document.getElementById("min").innerHTML= n1 + " is the minimum number" ;
                }
            else
                {
                    document.getElementById("min").innerHTML=n3 + " is the minimum number";
                }
        }
    else {
        if(n2 < n3)
            {
                document.getElementById("min").innerHTML=n2 + "is the minimum number ";
                
            }
        else
            {
                document.getElementById("min").innerHTML=n3+ " is the minimum number"
            }
    } 
};

