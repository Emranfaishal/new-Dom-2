function hideElementID(elementID){
   const element = document.getElementById(elementID);
   element.classList.add('hidden');
}
function shoElementID(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}

function HighLightColor(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400')
}


function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet =alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

function containerGame (){
    const alphabets =getRandomAlphabet();
    console.log('tome name ke',alphabets);
    const cerredAlphabets = document.getElementById('cerred-alphabet');
    cerredAlphabets.innerText= alphabets;
    // color tag 
    HighLightColor(alphabets);
}


function pay(){
    hideElementID('home-score');
    shoElementID('play-ground');
    containerGame();
    HighLightColor();
}