const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


// Add words for the sentences

let names = ["Peter", "Michell", "Jane", "Steve"]

let places = ["Sofia", "Plovdiv", "Varna", "Burgas"]

let verbs = ["eats", "holds", "sees", "plays with", "brings"]

let nouns = ["stones", "cake", "apple", "laptop", "bikes"]

let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"]

let details = ["near the river", "at home", "in the park"]

// Create a Method for Getting a Random Word
function getRandomWord(array){
    let word = array[Math.floor(Math.random() * array.length)]
    return word
}

//implement Generator Logic

let randomName = getRandomWord(names)
let randomPlace = getRandomWord(places)
let randomVerb = getRandomWord(verbs)
let randomNoun = getRandomWord(nouns)
let randomAdverb = getRandomWord(adverbs)
let randomDetail = getRandomWord(details)


let who = `${randomName} from ${randomPlace}`

let action = `${randomAdverb} ${randomVerb} ${randomNoun}`

let sentence = `${who} ${action} ${randomDetail}`

console.log('Hello, this is your first random-generated sentence:')
console.log(sentence)

let recursiveAsyncReadLine = function(){
    readline.question('Click [Enter] to generate a new one.', string => {
        randomName = getRandomWord(names);
        randomPlace = getRandomWord(places);
        randomVerb = getRandomWord(verbs);
        randomNoun = getRandomWord(nouns);
        randomAdverb = getRandomWord(adverbs);
        randomDetail = getRandomWord(details);

        who = `${randomName} from ${randomPlace}`;
        action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
        sentence = `${who} ${action} ${randomDetail}`;

        console.log('Here is your new random-generated sentence:');
        console.log(sentence);

        recursiveAsyncReadLine(); // Prompt for input again
    });
};

recursiveAsyncReadLine();

