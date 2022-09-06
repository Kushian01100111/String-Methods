// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    text = text.split(" ")
    text.forEach((e,i,a)=>{
        let cache = e.split("")
        if(cache.length > 2){
            let first = cache[1],
            last = cache[cache.length-1];

            cache[1] = last
            cache[cache.length-1] = first
        }
        cache[0] = cache[0].charCodeAt(0)
        
        return a[i] = cache.join("")
    })
    return text.join(" ")
  }

  encryptThis("A wise old owl lived in an oak")