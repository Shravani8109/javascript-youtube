const user ={
    username :"shravani",
    price :999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "ppp"
// user.welcomeMessage()
//node gives this output {} empty object and in window it will give all window objects 
//in browser global object is window object
// console.log(this);

//when we try to access variable inside function using this it will give output as undefined
//if we try to access inside object it will give output 
// function chai(){
//     let username = "sh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "sh"
//     console.log(this.username);
    
// }

const chai = ()=>{
    let username = "sh"
    console.log(this.username);
    
}
chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2

// }

// OR
// const addTwo = (num1,num2)=> num1+num2

// const addTwo = (num1,num2)=> (num1+num2)

//return object in single line
const addTwo = (num1,num2)=>({username:"sp"})



console.log(addTwo(3,4));
