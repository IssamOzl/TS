interface book{
    title:string
    price : number
    isbn:number
}

interface movie{
    title:string
    type:string
}

class Collection<T>{
    public data: T[] = []

    add(item:T):void{
        this.data.push(item)
    }

}

let booksCollection = new Collection<book>()
booksCollection.add({title:"Book1",price:182,isbn:54664})
booksCollection.add({title:"Book2",price:75,isbn:156})
console.log(booksCollection)