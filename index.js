

function writeCards(names, eventName) {
  let array = []
  for (let i=0; i<names.length; i++) {

  array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return array
  }



function countDown() {
  let i= 10;
  while (i >= 0) {
    console.log(i--);
}
}