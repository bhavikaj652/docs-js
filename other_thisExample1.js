let pName= 'Global'
let person1 = {
 //pName : 'Nag', //object's property
 sayName: function() {
     let pName='Local'
     console.log('im' + pName);  //context's hierarchy data
     console.log('im' + person.pName );//referencing object's data
     console.log('im' + this.pName); //context's owner data
 }
}

/*let oldPerson= person;
person.sayName()
person= {pName: 'Ria'}

oldPerson.sayName();
//person.sayName() //error because now person has become a new object with pName attribute only

*/


let person2= {pName : 'Ria'}

let person=person1;
let oldPerson=person1;
person=person2;
oldPerson.sayName()