// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}


function hexStringToRGB(hexString) {
  let result = {r:0, g:0, b:0},
      hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'],
      rgb = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  if(hexString[0] === '#')hexString = hexString.slice(1, hexString.length);
  
  for(let i = 0; i< hexString.length; i += 2){
      let cache = hexString.slice(i,i+2).toUpperCase(),
          first = rgb[hex.findIndex(n=> n === cache[0])] * 16,
          secund = rgb[hex.findIndex(n=> n === cache[1])]
    if(result.r === 0)result.r = first + secund
    else if(result.g === 0) result.g = first + secund
    else result.b = first + secund
  }
  
  return result
}

  hexStringToRGB("#ff9933")