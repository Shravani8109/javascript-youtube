// var a =300
// let a =200
// if(true){
//     let a = 100
//     const b = 20

// }
// console.log(a);

//child or inner function can access parent or outer functions values but outer function can not aceess 
// inner functions values

function one(){
    const username = "shravnai"

    function two (){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if (true){
    const username = "shravani"
    if (username === "shravani")
    {
        website =" youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++Interesting+++++++++++++++

//we can call function before execution but we canoot call variable before declaration
console.log(addone(5));

function addone(num){
    return num+1
}

// addTwo(5)
const addTwo = function(num)
{
    return num +2
}
addTwo(5)
