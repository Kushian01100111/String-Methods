// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
//Parameter: String, exeption words(optinal);
//Results:The string pass when the function is call is going to be pass to a title case format; the first letter of each word is becomes uppercase execpt for the exeption words that had to stay lowecase unless they are the first letter of the string
//Example:  titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
//PseudoCode:
function titleCase(title, minorWords) {
    if(!title) return title
    
    if(minorWords) {
      minorWords = minorWords.toLowerCase().split(" ")
}
  title = title.split(" ")

  title.forEach((n,i,a)=>{
    let cache = n.toLowerCase()
    if(!minorWords || !minorWords.includes(cache) || i === 0){
        cache = cache.split("")
        cache[0] = cache[0].toUpperCase()
        return a[i] = cache.join("")
    }
    return a[i] = cache
  })

  return title.join(" ")
}

titleCase('THE WIND IN THE WILLOWS', 'The In')