var chai = require('chai')
var expect = chai.expect
var sumFn = require('../promise.js')
describe('when sum function is tested', function () {
  it('should return sum when 2 valid nos given', function (done) {
    sumFn(5,9).then((sum)=>{
      expect(sum).to.eqls(10)
      done()
    })
    .catch((err) => {
      expect(err).to.eqls('sum greater than 10')
      done()
    })
    })
  })
