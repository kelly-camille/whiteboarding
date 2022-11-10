const removeDup = (array) => {
  for (let i=0; i < array.length; i++) {
    for(let j=0; j < array.length; j++) {
      if (array[i] === array[j]) {
          if (i === j)
          {
          }
          else {
          array.splice(i, 1);
          }
      }
      else {
      }
    }
  }
return array;
}