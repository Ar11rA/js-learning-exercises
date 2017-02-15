var chai = require('chai')
var expect = chai.expect
var sumFn = require('../test.js')
describe('when sum function is tested', function () {
  it('should return sum when 2 valid nos given', function (done) {
    sumFn(5, 6, (data) => {
      console.log(data)
      expect(data).to.eqls(17)
      done()
    })
  })
})