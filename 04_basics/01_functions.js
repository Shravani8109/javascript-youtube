function sayMyname() {
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("i");

}
//function calling
// sayMyname()

//function referance
// sayMyname

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)


// function addTwoNumbers(number1,number2){
//   let result = number1+number2
//   return result
    // return number1+number2
// }
// const result =  addTwoNumbers(3,6);
// console.log("result:",result);

// function loginUser(username){
    
//     if (!username ){
//         console.log("please enter username");
//         return
        
//     }
//     return `${username} is logged in`
// }

// function loginUser(username){
    
//     if (username === undefined){
//         console.log("please enter username");
//         return
        
//     }
//     return `${username} is logged in`
// }
// console.log(loginUser("shravani"));
// console.log(loginUser());

function calculatePrice(val1,val2,...num1){
    return num1
}

console.log(calculatePrice(200,300,400,2000));

// const user ={
//     username :"sp",
//     price :200
// }
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    

}
// handleObject(user)
handleObject(
    {
    username:"shrvani",
    price:299
})

const mynewArray = [100,200,3000]
function returnsecondvalue(getarray){
    return getarray[1]

}
console.log(returnsecondvalue(mynewArray));
