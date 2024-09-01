function hideElementID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}
function shoElementID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function highLightColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeHighLight(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}


function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

function containerGame() {
    const alphabets = getRandomAlphabet();
    console.log('tome name ke', alphabets);
    const curredAlphabets = document.getElementById('curred-alphabet');
    curredAlphabets.innerText = alphabets;
    // color tag 
    highLightColor(alphabets);
}
function curredScoreElement(elementID) {
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function curredElementById(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}
function hiddenKeyButtonPress(event) {
    const playerPressed = event.key;
    console.log('playerPressed', playerPressed);

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const curredAlphabetsElement = document.getElementById('curred-alphabet');
    const curredAlphabet = curredAlphabetsElement.innerText;
    const expandAlphabet = curredAlphabet.toLowerCase();
    console.log(expandAlphabet, playerPressed);

    if (expandAlphabet === playerPressed) {
        console.log('you get a point')

        const curredScore = curredScoreElement('curred-score');
        const upCurredScore = curredScore + 1;
        curredElementById('curred-score', upCurredScore);
        removeHighLight(playerPressed);
        containerGame();
    }
    else {
        console.log('you missed ,you lost point');
        const curredScore = curredScoreElement('curred-life');
        const upCurredScore = curredScore - 1;
        curredElementById('curred-life', upCurredScore);
        if (upCurredScore === 0) {
            gameOver();
        }
    }
}
document.addEventListener('keyup', hiddenKeyButtonPress);


function pay() {
    hideElementID('home-score');
    hideElementID('final-score')
    shoElementID('play-ground');

    curredElementById('curred-life', 5);
    curredElementById('curred-score', 0);
    containerGame();
    highLightColor();
}
function getElementTextByID(elementID) {
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}


function gameOver() {
    hideElementID('play-ground');
    shoElementID('final-score');

    const lestScore = curredScoreElement('curred-score');
    console.log(lestScore);
    curredElementById('game-end', lestScore);


    const curredAlphabetText = getElementTextByID('curred-alphabet');
    removeHighLight(curredAlphabetText);

}


