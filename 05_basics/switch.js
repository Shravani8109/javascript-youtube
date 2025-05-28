const  userEmail =[]

if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("dont have user");
    
}

//falsy values 
//false,o,-0,BigInt 0n,"",null,undefined,NAN     --->these all are falsy values

//truthy values
// "0", 'false', " ", [],{}, function(){}

if (userEmail.length===0) {
    console.log("array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}