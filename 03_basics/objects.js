//singleton
// Object.create


//object literals
//object creation

const mySym = Symbol("key")

const Jsuser = {
    name : "shravani",
    age : 22,
    [mySym]:"mykey1",
    "full name":"shravani dipak patil",
    location :"kolhapur",
    email : "shravani@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["monday","tuesday"]
}
//ways to access elements of object
// console.log(Jsuser.email);
//efficient way
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);


console.log(Jsuser[mySym]);

//change the object value
Jsuser.email = "shravani8109@gmail.com"
console.log(Jsuser.email);

//if we dont want to make changes in values for that we can freez the object
// Object.freeze(Jsuser)
Jsuser.email = "shravani8109@chatgpt.com"
console.log(Jsuser.email);

console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    
}
//this give output undefined
console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

