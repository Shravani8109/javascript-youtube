//if
const isuserloggedIn = true

if (2==="2"){
    console.log("executed");
}

//operators
// >,<,>=,<=,==,===

// const temprature = 41

// if (temprature<50){
//     console.log("weather is good");
    
// }
// else{
//     console.log("weather is not good");
    
// }

// const balance = 200
// if (balance < 40000) console.log("test");

// if (balance<500) {
//     console.log("less than 500");
    
// }else if(balance <700)
// {
//     console.log("less than 700");
    
// }
// else{
//     console.log("greater");
    
// }

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromGmail = true

if (userLoggedIn && debitcard){
    console.log("allow to buy courses");
    
}
if (LoggedInFromGmail || LoggedInFromGoogle) {
    console.log("user logged in");
    
}