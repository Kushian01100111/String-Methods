// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
//Parameter:String ; without any specific format
//Results: this function is going to return the same string with the even indexes of that string in uppercase.
//Example: toWeirdCase( "String" );//=> returns "StRiNg"
//PseudoCode: 

function toWeirdCase(string){
    string = string.split(" ")
    for(let i = 0 ; i < string.length; i++){
        string[i]= string[i].split("")
        for(let x = 0; x < string[i].length; x++){
            if(x % 2 === 0) string[i][x]=string[i][x].toUpperCase()
        }
        string[i] = string[i].join("")
    }
    return string.join(" ")
  }

  toWeirdCase("This is a test")