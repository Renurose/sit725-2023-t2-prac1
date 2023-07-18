function changeText() {
    let textArray = ['Hi','Hello','Hey'];
    let randomNumber = getRandomNumber(0, textArray.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textArray[randomNumber];
}

function getRandomNumber(min, max) {
    // randomly get between 0 to 4
    return Math.floor(Math.random()*(max-min+1)+min);
}
