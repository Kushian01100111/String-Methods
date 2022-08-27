// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//Parameter: string; they had a camel format
//Results: the string should be returned the camel string separeted but mataining the uppercase letter
//Example: "camelCasing"  =>  "camel Casing"
//PseudoCode: Check the letter inside of the string if they are in uppercase, if they are then string is slice at the start of all uppercase letters to the star of the next one.
function solution(string) {
    let result = [],
        indexes= []

    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[i].toLowerCase()) indexes.push(i)
        else if(indexes.length < 1 && i === string.length - 1) result.push(string)
    }

    if (result.length < 1){
        for(let x = 0; x <= indexes.length; x++){
            if(x === 0) result.push(string.slice(0,indexes[x]))
            else if(x === indexes.length ) result.push(string.slice(indexes[x-1],string.length))
            else result.push(string.slice(indexes[x-1],indexes[x]))
        }
    }
    
    
    return result.join(" ")
}

solution("use")