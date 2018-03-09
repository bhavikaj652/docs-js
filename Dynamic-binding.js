let greetLib= {
    name : "Bhavika",
    sayName : function (message,from) {
    console.log(message + ' I\'m ' +this.name + " - " + from);
    }
};

greetLib.sayName()
let person={name: 'Nag'};
let employee={name: 'Sapient'};


//way-1
//greetLib.sayName.call(person,"hello","chennai")
//greetLib.sayName.call(employee,"hey","bengalore")

//way-2
// greetLib.sayName.apply(person,["hello","bangalore"])
//greetLib.sayName.apply(employee,["hello","bangalore"])


//way-3
// let greetValue1=greetLib.sayName.bind(person,"hello","bangalore")
// let greetValue2=greetLib.sayName.bind(employee,"hello","bangalore")

// greetValue1()
// greetValue1()     call n number of times after bind
// greetValue1()
// greetValue2()


//way-4 bind then pass arguments in seperate steps

let greetValue1=greetLib.sayName.bind()
greetValue1("hi","bangalore")

