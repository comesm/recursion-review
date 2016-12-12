// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if(obj === undefined) {
    return 'undefined';
  }
 

  if (typeof obj === 'object') {
    if(obj === null) {
      return 'null';
    }

    if (Array.isArray(obj))
    {
      let stringifiedArrayResult = '';

      for (let i = 0; i < obj.length; i++) {
        if(i !== 0)
        {
          stringifiedArrayResult += ',' + stringifyJSON(obj[i]);
        }
        else
        {
          stringifiedArrayResult += stringifyJSON(obj[i]);
        }
        //console.log('line25 ' + '[' + stringifiedArrayResult + ']');
       
      }

    return '[' + stringifiedArrayResult + ']';
      
    }
    else
    {
      let stringifiedObjResult = [];
      
      for(let key in obj) {
        if ((typeof obj[key] !== 'function') && (obj[key] !== undefined)){
          let currKeyValuePairString = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          stringifiedObjResult.push(currKeyValuePairString);
        }
      }

      return '{' + stringifiedObjResult.toString() + '}';
    }
  }

  return obj + '';

  // your code goes here
};
