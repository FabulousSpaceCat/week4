// Day 1

let declare = "This is a string.";
let numerology = 65535;

// One is a string, one is a number

console.log(declare);
console.log(numerology);

// They both work

console.log(declare*numerology);

// We multiply them together for raisins
// Clearly the result is not a number

console.log(2+true);

// When we're using a boolean as a number, false is 0 and 1 is true

// Day 2

let token = (2 + 5) * 2

// Parenthesis to adjust our order of operations.  But I kind of feel like you meant me to make a for loop to count it up five, then multiply by two.

console.log('Token = ' + token);

// So a modulo by 3, guessing the remainder I'm looking for is 2.

console.log('Modulo of token = ' + (token % 3));

let newNumber = 14

function numberTeam() {
    if (newNumber % 2 == 0)
    return ('Woo it\'s even!');
        else if (newNumber % 2 !== 0)
            return ('Aww, it\'s odd.');
}

console.log(numberTeam());

// OMG you got shot in a TV show!

let answer;
let amShot = true;
let fleshWound = false;
let hasName = true;

function amIGonnaLiveDoc() {
    if (amShot == true && fleshWound == true) {
        answer = 'Take a tylenol and call me in the morning.';
    }
    else if (amShot == true && hasName == true) {
            answer = 'There\'s going to be a dramatic recovery arc for you, but you\'ll live.';
        }
    else {
        answer = 'Oh no honey you\'re gonna die.';
        }
        return answer
    }


console.log('The doctor said \"' + amIGonnaLiveDoc() + '\"');

// I could have done that without the function I'm sure.  But I need the practice.  
// This would be good to revisit with an object, because I can give the object properties, and I can tell it to evaluate different people who have been shot in a TV show.

