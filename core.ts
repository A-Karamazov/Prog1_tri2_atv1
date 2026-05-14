class Item {
    constructor(public title:string){ }
}

class TodoList{
    private items: Item [] = [];
    private filePath: string;

    constructor(filePath: string){
        this.filePath = filePath;
    }

    addItem(item: Item){
        this.items.push(item);
    }

    removeItem(index:number){
        this.items.splice(index, 1);

    }
    getItems(): Item [] {
        return [...this.items];
    }
}

//
const todolist = new TodoList('todos.json');
todolist.addItem(new Item('buy alguma cooisa'));
todolist.addItem(new Item('vender alguma cooisa'));
todolist.addItem(new Item('fazer alguma cooisa'));
todolist.removeItem(0);
console.log(todolist.getItems());