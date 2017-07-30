module.exports = {
  bindAFunction: function(operandA) {
    return (function(operandA) {
      return function addThreeTo(operandB) {
        console.log(operandA + operandB);
      }
    })(operandA)
  }
}
