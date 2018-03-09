let pName= 'Global'
let person = {
 pName : 'Nag', //object's property
 sayName: function() {
     let pName='Local'
     console.log('im' + pName);  //context's hierarchy data
     console.log('im' + person.pName );//referencing object's data
     console.log('im' + this.pName); //context's owner data
 }
}
let oldPerson= person;
person= {pName: 'Ria'}
oldPerson.sayName();