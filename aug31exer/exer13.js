
function wordPerWordBarByBar(s){

let wordsAll= s.split(' ')

let letters=[]
let w=[]

wordsAll.forEach(element => {
    letters.push(element.split('').reverse('').join(''))
});
letters.join(' ')

return letters.join(' ')

}