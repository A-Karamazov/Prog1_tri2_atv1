class Item {
    constructor(public title:string){ }
}

class TodoList{
    private items: Item [] = [];
    private filePath: string;

    async constructor(filePath: string){
        this.filePath = filePath;
        await this.readListFromDisk()
    }

    private async saveListToDisk() {
        const file = Bun.file(this.filePath)
        const data = JSON.stringify(this.items)
        await file.write(data)
    }

        private async readListFromDisk() {
            const file = Bun.file(this.filePath)
            //const text = await file.text()
            //const data  JSON.parse(text)
            const data = await file.json();
            this.items = data.map((v: any) => {
                return new Item(v.title)
            })
        }

    async addItem(item: Item){
        this.items.push(item);
        await this.saveListToDisk()
    }

    async removeItem(index:number){
        this.items.splice(index, 1);
        await this.saveListToDisk()
    }

    /**
     * Retorna uma cópia da lista de itens
     */
    getItems(): Item [] {
        return Array.from(this.items);
    }
}


export default TodoList
export { Item, TodoList }
