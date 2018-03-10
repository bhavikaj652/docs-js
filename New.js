let tnrService={
    doTeach:function(sub){
        console.log("Tnr-"+this.name +" teaching sub.");

    }
}

var tnr={
    name: "Nag"
};

var emp={
    name: "Neha"
};

let teachBtn=document.getElementById('teachBtn');
//let value=tnrService.doTeach.bind(emp);    //it will print the value but if we want to print on event then write below line
teachBtn.addEventListener('click',tnrService.doTeach.bind(emp));