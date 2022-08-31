// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
  if(this.valueOf() === '') return this.valueOf()
    let string = this.valueOf().trim().split(" ")
    string.forEach((n,index)=>{
      let cache = n.split("")
      cache[0] = cache[0].toUpperCase()
      return string[index] = cache.join("")
    })
    return string.join("")
  }

  console.log("test case".camelCase())
  console.log("".camelCase())
  console.log(" camel case word".camelCase())
  console.log("say hello ".camelCase())
  console.log("camel case method".camelCase())