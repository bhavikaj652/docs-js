class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.status = false;
    }

    // set title(title) {
    // this._title=title
    // }

    // get title() {
    //     return this._title
    // }

    // set id(id) {
    //     this._id=id
    //     }

    //     get id() {
    //         return this._id
    //     }

    //     set status(status) {
    //         this._status=status
    //         }

    //         get id() {
    //             return this._id
    //         }
}


class TodoService {

    constructor() {

        this.todos = []
    }
    addToDo(title) {
        TodoService.todoId++;
        let newTodo = new Task(TodoService.todoId, title)
        this.todos.push(newTodo)
    }

    editToDo(title,newTitle) {
        this.todos.forEach((item, idx) => {
            if (item.title === title) {
                // let idx= this.todos.indexOf(item)
                item.title = newTitle
            }
        });
    }

    /* deleteToDo(id) {
         for(let p of todos) {
             if(p.getId()===id) {
                 this.todos.splice(p, 1);
             }
         }
         */

    deleteTodo(title) {
        this.todos.forEach((item, idx) => {
            if (item.title === title) {
               //  let idx= this.todos.indexOf(item)
                this.todos.splice(idx, 1)
            }
           
        }
        );
    }




    completeToDo(id) {
        this.todos.forEach((item, idx) => {
            if (item.id === id) {
                // let idx= this.todos.indexOf(item)
               item.status= true
            }
            
        }
        );
    }

    completeAll() {
        this.todos.forEach((item, idx) => {
            if (item.status === false) {
                // let idx= this.todos.indexOf(item)
               item.status= true
            }
            
        }
        );

    }

    clearComplete() {
        this.todos.forEach((item, idx) => {
            if (item.status === true) {
                // let idx= this.todos.indexOf(item)
                this.todos.splice(idx, 1)
            }
            
        }
        );
    }

    viewAll() {
        console.log(this.todos)
    }
}

TodoService.todoId = 0;
let service = new TodoService();
service.addToDo('walk')
service.addToDo('sleep')
service.addToDo('listen')
service.addToDo('study')
service.editToDo('walk','walking')
service.deleteTodo('walking')
service.completeToDo(2)
service.clearComplete()
service.completeAll()
service.viewAll()