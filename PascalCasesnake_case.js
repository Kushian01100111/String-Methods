// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

//Parameter: String; string-numbers ----> the string have a PascalCase format : "TestController"
//Results: It should return the string in snake_case notation, if it's a number return the number as a strign
//Example: "TestController"  -->  "test_controller"; 1  -->  "1"
//PseudoCode: identify the paramater string or number
//Check the letter inside of the string if they are in uppercase, if they are then string is slice at the start of all uppercase letters to the star of the next one, except the firt one
//Then they are push into an array, the array element past from uppercase to lowercase and join together with .join("_")

function toUnderscore(string) {
    if(typeof string === 'number') return string.toString()
    let result = [],
        indexes= [];
    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[i].toLowerCase()) indexes.push(i) 
    }
    for(let x= 0; x < indexes.length; x++){
        if(x === indexes.length - 1) result.push(string.slice(indexes[x],string.length))
        else result.push(string.slice(indexes[x],indexes[x+1]))
    }
    // TODO: complete 
    return result.map(n => n.toLowerCase()).join("_")
  }

  toUnderscore(1)