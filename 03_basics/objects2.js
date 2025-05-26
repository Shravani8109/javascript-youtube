//singletone object
// const tinderUser = new Object()

//non singletone object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);
//object nesting 
const regularUser ={
    email : "some@gmail.com",
    fullname :{
          userFullname:
          {
              firstname:"shravani",
              lastname :"patil"
          }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4= {6:"l",9:"k"}



// const obj3 = {obj1,obj2}
//assign combine all object values--we can assign objects
// const obj3 = Object.assign({},obj1,obj2,obj4)
//spred operator
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const Users =[
    {
        id:1,
        email:"sp@gmail.com"
    },
     {
        id:1,
        email:"sp@gmail.com"
    },
     {
        id:1,
        email:"sp@gmail.com"
    },
     {
        id:1,
        email:"sp@gmail.com"
    }
]
Users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//entries----convert in array
// console.log(Object.entries(tinderUser));

//object destructuring in js

const course ={
    courseName :"js with chai and cofee",
    price : 999,
    courseInstructor :"hitesh"
}
// course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor);
// console.log(courseInstructor);


