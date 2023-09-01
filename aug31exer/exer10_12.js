
function what(s){
    console.log(` so what do you say? it is cool ${s} `)
}



/* console log on click */


let personB={
    name:"john",
    age:87,
    occupation:'manager'
}
let button=document.querySelector('#greet')



button.addEventListener('click', ()=>{personGreet(personB)})

function personGreet(p){
    console.log(`${p.name}, I am  ${p.age} old and I am a  ${p.occupation}`)
}
/* 
console log on click */

/* 
sorted keys of object and values */
function gatorade(o){

let ks=Object.keys(o).sort((a,b)=>{return a-b})

let values=[]
ks.forEach((i)=>{
    values.push(o[i])
})
return [ks,values]

}


/* 
sorted keys of object and values */