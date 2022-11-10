function toUrl(string){  // "jasmine ann"
  let result = ""
  
  for (let i =0; i<string.length; i++) {
  if(typeof(string) !== typeof("string")) {
  return "not a string"
  
  }else if(string[i] !== " ")
      result = result.concat(string[i])
  
  else if (string[i] === " ")
     result =  result.concat("%20");
  }
  return result;
  }