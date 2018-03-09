console.log("Hello World!")
var name="Nag"
var selection='abc'
var dynamicString=`the result is ${12+3}`
console.log(dynamicString)
var menu=`
          1.Biryani
          2.Poha`
console.log(menu)
var count=12;
var cost=12.12;
var found=true
var bool=NaN
if(!NaN){
    console.log(".........")
}
if(!""){
    console.log("empty string")
}

var v;
var newV=""
var config=new Object();
config.url="http//";
config.httpMethod="GET";
config.doSomething=function() {
    console.log("run......");
}
delete config.httpMethod
var newConfig={
    url:"https://...",
      httpMethod: "POST",
      doSomething: function() {
          console.log("ok.....")
      }
}
var arr=new Array();
arr.push("item1")
arr.push("item2")
arr[2]="abc"
var newArr=["item1","item2","item3"];
var ssn=new RegExp("\\d{2}-\\d{3}-\\d{4}");
var newSsn=/\d{2}-\d{3}-\d{4}/;
var add=new Function("n1","n2","var r= n1+n2; return r;")
function sum(n1,n2) {
    var r=n1+n2;
    return r;
}
/*if (true) {
   // let foo;
   // let foo; // SyntaxError thrown.
  }
  if (true) {
    let foo;
    //var foo; // SyntaxError thrown.
  }
*/

function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
  }
  do_something();
var person={
    name:'Nag',
    'home-address': 'Chennai'
};
//person.name='Nag N'
//console.log(person.name)
person['name']='Nag N'
console.log(person.name)
console.log(person['name'])
console.log(person['home-address'])
var propName='name'
console.log(person[propName])
person['home-address']='Bengaluru'
console.log(person['home-address'])
