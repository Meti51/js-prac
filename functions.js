function addNum(num1 =1 , num2=3){
  return (num1 + num2);
}

console.log(addNum(2,3));

/* ----------------------OBJECT ORIENTED ----*/
// function Person(fname, lname, dob){
//   this.fname = fname;
//   this.lname = lname;
//   this.dob = new Date(dob);
//   this.getBirthYear = function() {
//     return this.dob.getFullYear();
//   }
// }
//
// Person.prototype.getFullName = function(){
//   return `${this.fname}  ${this.lname}`
// }
// console.log(person1.getFullName)

//class
class Person {
  constructor(fname, lname, dob){
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
  }
  getBirthYear() {
      return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.fname}  ${this.lname}`
  }
}
const person1 = new Person('john', 'doe', '4-3-2010')
console.log(person1)
