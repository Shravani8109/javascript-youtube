//string declaration
let name = "shravani"
let surname = "patil"

// console.log(name + surname+ " value");
//back-tic  literals or string interpolation
// console.log(`Hello my name is ${name} my surname is${surname}`);

//string declaration another way
let gameName = new String("shravani")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.length);
//prototype methods
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('s'));

// substring --negative values not allowed

// const newString = gameName.substring(0,4)
//last index not include
// console.log(newString);

//slicing -- we can use negative values
// const anotherString = gameName.slice(-8,2)
// console.log(anotherString);

//trim ---removes all white spaces from string
//trimStart(),trimEnd()

// const newString = "      shravani    "
// const anewstring = "           shravani"
// console.log(newString.trim());
// console.log(anewstring);

//replace()
let url = "shravani-%-20-patil,com"
// console.log(url.replace('%20','-'));
// console.log(url.includes('shravani'));
// console.log(url.includes('snnnnnn'));

//split() --based on - or ,
console.log(url.split('-'));
console.log(url.split(','));


