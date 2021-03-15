module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var existBracket = {};
  for(var j = 0; j < bracketsConfig.length; j += 1) {
    existBracket[bracketsConfig[j][0]] = bracketsConfig[j][1];
  }

  stack.push(str.charAt(0));

  for(var i = 1; i < str.length; i += 1) {
    if(str.charAt(i) === existBracket[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(str.charAt(i)); 
    }
  }
  if (stack.length > 0) {return false;}
  return true;
};
