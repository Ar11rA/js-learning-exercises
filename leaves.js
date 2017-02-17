const users = require('./user.js')
class leave {
  constructor(leaveType, allowance=0, deductions) {
    this.leaveType = leaveType
    this.allowance = allowance
    this.deductions = deductions
  }
  calcSalary(numberOfLeaves, salary) {
    const deduction = this.deductions * (numberOfLeaves - this.allowance)
    return (salary - deduction)
  }
  calcAllowance(age) {
    if (age > 50) {
      this.allowance = 20
    }
    else {
      this.allowance = 5
    }
  }
}
const userX = new users('abc',60,3000)
const leaveObj = new leave('sickness',0,100)
leaveObj.calcAllowance(userX.age)
const newSalary = leaveObj.calcSalary(40,userX.salary)
userX.updateSalary = newSalary
console.log(userX.returnDetails)