// https://www.hackerrank.com/challenges/30-class-vs-instance/problem?h_r=next-challenge&h_v=zen

class Person {
  constructor(initialAge) {
    if (initialAge > 0) this.age = initialAge;
    else if (initialAge < 0) {
      this.age = 0;
      console.log('Age is not valid, setting age to 0...');
    }
  }

  yearPasses() {
    this.age++;
  }

  amIOld() {
    if (this.age < 13) console.log('You are young..');
    else if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager..');
    } else console.log('You are old..');
  }
}
