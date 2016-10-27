var pow = require('../js/pow.js');

describe("pow", function() {
  it("it test pow", function() {

  	var result;

  	result = pow(3, 3);

    expect(result).toBe(27);
  });
});