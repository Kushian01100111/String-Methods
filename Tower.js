// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
//Parameter: Number; The height of the tower
//Results: shuold return the a tower with the height equivalent to the number given by the parameter
//Example: nFloors => [
                    //   "     *     ", 
                    //   "    ***    ", 
                    //   "   *****   ", 
                    //   "  *******  ", 
                    //   " ********* ", 
                    //   "***********"
                    // ]
//PseudoCode: 

function towerBuilder(nFloors) {
    let tower = new Array(nFloors),
        firstArray = new Array((nFloors * 2-1)),
        i = tower.length-1
for(let t= 0; t < firstArray.length; t++){
    firstArray[t]= '*'
}
tower[tower.length-1] = firstArray

while(i > 0){
    for(let x = 0; x < nFloors-1; x++){
        firstArray= firstArray.map((n,index)=>{
            if(index === 0 + x) return n = " "
            else if(index === firstArray.length-1 - x) return n = " "
            else return n
        })
        i--
        tower[i] = firstArray
    }
} 
tower =  tower.map(n =>{
    return n = n.join("")
})

   return tower
  }

  towerBuilder(10)