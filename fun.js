// Create a new function that takes two arguments and adds them together

function addNums(one, two) {
    let result = one + two;
    console.log("We\'re adding numbers today!" + " " + one + " " + "plus" + " " + two + " " + "equals" + " " + result)
}

addNums(4,5);

// So ending my console log with just one + two gave me string concatenation instead of math.  That was interesting.  I mean I could have just console logged the math and not made it fancy and that worked, obviously, since result's value works.

// Now basically the same thing but with multiplication, and returning the result outside the scope of the function.

function multiplyNums(one, two) {
    let answer = one * two;
    return answer
}

let answer = multiplyNums(6,7);
console.log(answer)

// Didn't feel like making a fancy sentence.

// Okay let's do the counting loop.  You did it with a for loop and I could do it the easy way and copy it, but clearly I don't do that.

function counting(start,end) {
    if (start < end) {
        console.log("I'm sorry Dave, I'm afraid I can't do that.")
    }
    else {
        while (start >= end) {
            console.log(start)
            start--
        }
    }
    if (start = end) {
        console.log("Ding!")
    }
}

counting(10,1)

//Interesting note, if I set end to 0 then it doesn't ding.

let noise = ""
let cats = window.prompt("How many cats do you have?");
let hungry;
let hunger;

function enoughCats() {
    if (cats > 0) {
        hungry = confirm("Is it time to eat?\nPress OK for yes, Cancel for no.");
        return hungry
    }
    else {
        document.write("Why are you here?  You don't have any cats.")
    }
}

function areTheyHungry() {
    if (hungry == true) {
        hunger = window.prompt("On a scale of 1 to 10, how hungry are they?", "")
        return hunger
    }
    else {
        hunger = 0
        return hunger
    }
}

function timeToEat (numberOfCats, hungerScale) {
    let volume = 0
    if(numberOfCats > volume) {
        while (numberOfCats > volume) {
            noise = `${noise} meow`
            volume++
        }
    }
    if (hungry === false && numberOfCats > 0) {
        document.write("It's not time to eat yet.  You only hear " + noise + ".")
    }
    else {
        while (hungerScale > 1 && hungerScale <= 10) {
            noise = `${noise} ${noise}`
            hungerScale--
        }
    }
    if (hungerScale === 1) {
        document.write("You hear " + noise + ". You should feed them before they eat you.")
    }
    if (hungerScale > 10) {
        document.write("Oh come on, they can't be that hungry.")
    }
}

enoughCats()
areTheyHungry()
timeToEat(cats,hunger);


// Okay that was fun but back to the homework.  Here is a global variable, with a function that returns an argument added to it.

let whargarbl = 5

function wubbawubba(arg1) {
    whargarbl = whargarbl + arg1;
    return whargarbl;
}

console.log(wubbawubba(10));

// Finally, an IIFE.  The semicolon on the console log right above trolled me when I forgot it, I was getting "console log is not a function" and that is NOT a useful error because I was trying to console log in my IIFE.  Now, when I changed to an alert and the message didn't change, I knew I should be looking elsewhere. >_>

(function() {
    alert("Look at me, I'm an IIFE!");
})();