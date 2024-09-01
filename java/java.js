// function pay(){
//     const homeScore = document.getElementById('home-score');
//     // hidden korar nayom 
//     homeScore.classList.add('hidden');
//     // console.log(homeScore.classList);
//     // add korar nayom 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround);
// }


// function getRandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets)

//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     console.log(index);
// }
// function hiddenKeyButtonPress(event) {
//     const playerPressed = event.key;
//     console.log('playerPressed', playerPressed);
//     const curredAlphabetsElement = document.getElementById('curred-alphabet');
//     const curredAlphabet = curredAlphabetsElement.innerText;
//     const expandAlphabet = curredAlphabet.toLowerCase();
//     console.log(expandAlphabet, playerPressed);

//     if (expandAlphabet === playerPressed) {
//         console.log('you get a point')
//         const curredScoreElement =document.getElementById("curred-score");
//         const curredScoreText = curredScoreElement.innerText;
//         const curredScore = parseInt(curredScoreText);
//         console.log(curredScore);
//         const newScore = curredScore + 1;
//         curredScoreElement.innerText = newScore;

//         removeHighLight(playerPressed);
//         containerGame();
//     }
//     else {
//         console.log('you missed ,you lost point');
//         const curredLifeElement = document.getElementById('curred-life');
//         const curredLifeText = curredLifeElement.innerText;
//         const curredLife = parseInt(curredLifeText);
//         const newLife = curredLife - 1;
//         curredLifeElement.innerHTML = newLife;
        
//     }
// }
// document.addEventListener('keyup', hiddenKeyButtonPress);