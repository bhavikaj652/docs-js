/*function init() {

let count=0;
let foo="bar"
function doCount() {
    count++;
}

function getCount() {
    return count;
}

return {
    increment:doCount,
    value:getCount
}

}

let counter=init();
*/


function newInit() {
    let value="nice"
      let foo="bar"
    function returnValue(){
        var name="xyz"
      //  console.log(foo);
        return value; 
    }
    return returnValue;
}
let counterValue=newInit()
console.log(counterValue());


