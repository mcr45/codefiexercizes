/* Create a new JavaScript file to practice the concepts you've picked up.
Write a minimum of three distinct functions:
    A no-parameter function displaying a greeting.
    A function accepting a name as its parameter to show a personalized greeting.
    A function taking two numbers as parameters, returning their sum.
Execute your functions to ascertain they operate as anticipated.
After you've wrapped up your exercises, commit the JavaScript file to a GitHub repository. 
This not only helps in tracking your progress but also offers a platform to share your code when necessary. */



function Hey(){
    console.log("Hello, greetings")
}

function personalizedGreet(name){
    console.log(`hey there ${name}`)
}

function summa(a,b){
    return a+b

}

Hey()
personalizedGreet("John")
summa(5,89)