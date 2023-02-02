function dot_product(v1, v2)
{
    let ps = 0;
    // Loop for calculate dot product
    for (let i = 0; i < v1.length; i++)
    {
         ps = ps + v1[i] * v2[i];  
    }
    return ps;
}

let v1=[];
let v2=[];
if (dot_product(v1,v2)==0 )
{
console.log("v1 and v2 are orthogonal")
}
console.log( "The dot product of v1 and v2 is " + dot_product(v1,v2));