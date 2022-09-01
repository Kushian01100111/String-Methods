// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.
//Parameter: 2 funtions one of encrypt and one for the decypet : String -  n: number
//Results: The encrypt, encrypts the string, starts by grabing the odd-indexes of the string and creating a new string with it, later the rest of the string indexes are added to the string, this process is repited a amount of times equivalent to the n parameter, decrypt would be the same but in reverse so that you are able to get the original string
//Example:  encrypt("012345", 2)  =>  "135024"  ->  "304152"
//decrypt("304152", 2)  =>  "135024"  ->  "012345"
//PseudoCode: 

function encrypt(text, n) {
  if (!text || n <= 0) return text;
    for(let i = 0; i < n; i++){
        let temp = text.split("")
        let result = []
        for(let x = 0; x < temp.length; x++){
            if(x % 2 === 1) result.push(temp[x])
        }
        for(let t = 0; t < temp.length; t++){
            if(t % 2 === 0) result.push(temp[t])
        }
        text = result.join("")
    }
    return text
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const result = new Array(encryptedText.length);
    while (n--) {
      let i = 0;
      for (let x = 1; x < result.length; x += 2) {
        result[x] = encryptedText[i++];
      }
      for (let t = 0; t < result.length; t += 2) {
        result[t] = encryptedText[i++];
      }
      encryptedText = result.join('');
    }
    return encryptedText;
}

encrypt("01234", 3)
decrypt('20314', 3)