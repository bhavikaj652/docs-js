function sessionStart() {
    function Trainer(name) {
        this.name=name;
        this.doTeach=function() {
            console.log(this.name+' tnr teaching....');
            let self=this;
            let doLearn=function() {
                console.log(this.name+" learning from "+self.name)
            }
            return doLearn;
        }
        }

    

    function Employee(name) {
        this.name=name
    }

    let tnr=new Trainer('Bhavika')
    let e1=new Employee('A')
    let e2=new Employee('B')
    let learn=tnr.doTeach();
  //  tnr.doTeach.call(e1)  A tnr teaching.....
   // tnr.doTeach.call(e2)   B tnr teaching.....
    learn.call(e1)
    learn.call(e2)
}
sessionStart()