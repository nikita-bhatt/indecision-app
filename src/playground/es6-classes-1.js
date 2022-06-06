class Person{
   constructor (name ='Anonymous', age =0) {
    this.name = name;
    this.age =age;
   }
   getGreetings(){
       return `Hi. I am ${this.name}`;
   }
   getDescription()
   {
       return `${this.name} is ${this.age} year(s) old.`;
   }
}

class Student extends Person{
  constructor (name, age, major)
  {
      super(name,age);
      this.major=major;
  }
  hasMajor()
  {
      return !!this.major;
  }
  getDescription(){
      let description = super.getDescription();
      if(this.hasMajor())
      {
          return description += ` ${this.name} has major ${this.major}.`;
      }
      return description;
  }
}

class Traveller extends Person{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreetings()
    {
        let greetings = super.getGreetings();
        if(this.homeLocation)
        {
            return greetings += ` I am visiting from ${this.homeLocation}`;
        }
        return greetings;
    }

}

const me = new Traveller('Nikita Bhatt',26, 'Singali');
//console.log(me.hasMajor());
console.log(me.getGreetings());


const other = new Traveller();
//console.log(other.hasMajor());
console.log(other.getGreetings());