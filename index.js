
//solution one: forEach 

// function numberedList(array){
//     array.forEach((element, index) => {
//        console.log(`${index + 1}. ${element}`)
//     }) 
//   }
  
//   //solution two: for loop
  
//   function numberedList(array){
//     for(let i = 0; i < array.length; i++){
//       console.log(`${i + 1}. ${array[i]}`)
//     }
//   }
  
//   //solution three: for of
  
//   function numberedList(array){
//     for(let element of array){
//       console.log(`${array.indexOf(element) + 1}. ${element}`)
//     }
//   }

// for (let i=5; i<= 20; i+=1){
//     console.log(i)
// }




function writeCards(nameArray, eventName){
    let messages =[]
        for (let i=0; i<nameArray.length; i++){
         messages.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!` ) 
          
    }
    return messages
}














































