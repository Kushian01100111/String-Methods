// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    str = str.split(" ")
    str.forEach((e,i,a)=>{
        let number ;
        for(let i = 0; i < e.length; i++){
            if(isNaN(Number(e[i]))){
                number = i
                break
            } 
        }
        let cache,
            slices = e.slice(0,number).split(" ");
            slices[0] = String.fromCharCode(slices[0])
        if(e.length > 2){
            cache= e.slice(number,e.length).split("")
            let first = cache[0],
            last = cache[cache.length-1];

            cache[0] = last
            cache[cache.length-1] = first

            cache = slices.concat(cache.join(""))
            return a[i] = cache.join("")
        }
        return a[i] = slices.join("")
    })
    return str.join(" ")
}; 

decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')