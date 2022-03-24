// 1. Use the id-selector to get your inputs' and the output element from the DOM
// for each input I'll need to repeat the following
const inputOne = document.querySelector(`#one`);

const inputTwo = document.querySelector(`#two`);


const inputThree = document.querySelector(`#three`);

const inputFour = document.querySelector(`#four`);


const inputFive = document.querySelector(`#five`);


const inputSix = document.querySelector(`#six`);


const inputSeven = document.querySelector(`#seven`);

const inputEight = document.querySelector(`#eight`);


const inputNine = document.querySelector(`#nine`);


const inputTen = document.querySelector(`#ten`);


const inputEleven = document.querySelector(`#eleven`);

const inputTwelve = document.querySelector(`#twelve`);


const output = document.querySelector(`.output`);
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} is the main character of this story. He is very ${inputTwo.value}. He is extremely ${inputThree.value}. He went to ${inputFour.value} on a beach.
  He did it ${inputFive.value}. He saw a ${inputSix.value}. Then he went to ${inputSeven.value} yo mama. Then he met a ${inputEight.value} thing. That thing was ${inputNine.value}.
  This is a ${inputTen.value}. I am ${inputEleven.value}. I want a ${inputTwelve.value}.`
  output.innerHTML = madlib
}

console.log(generateTemplate);
