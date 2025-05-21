// const myArray = [1,2,3,4,5]
// const myHeros =["shktiman","naagraj"]

// const myArray2 = new Array (1,2,3,4)
// console.log(myArray[1]);

//array methods
// myArray.push(6)
// myArray.push(8)
// myArray.pop()
//add element at start
// myArray.unshift(9)
// myArray.unshift(8)
//delete starting element

//join() converts type into string
// const NewArray = myArray.join()
// console.log(NewArray);
// console.log(typeof(NewArray));

// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// console.log("A",myArray);
// const myn1 = myArray.slice(1,3)
// console.log(myn1);

// console.log("B",myArray);
// const myn2 = myArray.splice(1,3)
// console.log(myn2);


const dc_heros = ["shaktiman","batman","kuleshi"]
const marvel_heros =["naagraj","spiderman","heroshi"]
// const another_array  = dc_heros.push(marvel_heros)
// console.log(another_array);

//combine two arrays
//1)concat function
// const result = marvel_heros.concat(dc_heros)
// console.log(result);

//2)spred operator
// const all_new_heros = [...dc_heros,...marvel_heros]
// console.log(all_new_heros);

//convert nested array into single array
// const nested_array =[1,2,3,4,[5,6,7],[9,87,99,[1,2,3]]]
// const real_another_array = nested_array.flat(Infinity)
// console.log(real_another_array);

//check this is array or not give output in boolean form
// console.log(Array.isArray("shravani"));

//convert string into array form
// console.log(Array.from("shravani"))
//gives empty list because we have to tell that we want keys array or values array
// console.log(Array.from({name:"shravu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));









