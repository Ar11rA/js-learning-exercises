class users {
  constructor(name, age, salary) {
    this.name = name
    this.age = age
    this.salary = salary
  }
  set updateSalary(salary) {
    this.salary = salary
  }
  get returnDetails() {
    const objUser = {
      name: this.name,
      age: this.age,
      salary: this.salary
    }
    return objUser
  }
}
module.exports = users 
// const userX = new users('X', 42, 90000)
// userX.updateSalary = 180000
// console.log(userX.returnDetails)