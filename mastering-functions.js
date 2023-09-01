function greet(name){
    console.log(`Hello there ${name}`)
}


let arro=(n)=>console.log(`${n}`)

let calcc=(a,b)=>{return (a*b)}


let student={
    name:'john',
    age:89,
    grade:'second',
    whois: function(){
        console.log(`${this.name} is ${this.age} at grade ${this.grade}}`)
    }
}

let library={

    books:[],
    addBook:function(n){
        this.books.push(n)
    },
    removeBook:function(s){
        this.books=this.books.filter((i)=>{return (i!==s)})
    }

}


