
const matrixLeft = document.querySelector('.matrix-left');
const matrixRight = document.querySelector('.matrix-right');
const letters = 'あ い う え おか き く け こさ し す せ そた ち つ て とな に ぬ ね のは ひ ふ へ ほ み む め もや ゆ よら り る れろわ を ん';


function createMatrixLetter(column) {
    const letter = document.createElement('div');
    letter.classList.add('matrix-letter');
    letter.innerText = letters[Math.floor(Math.random() * letters.length)];
    letter.style.left = `${Math.random() * 100}%`; 
    column.appendChild(letter);

  
    setTimeout(() => {
        letter.remove();
    }, 4000); 
}

function animateMatrix() {
    createMatrixLetter(matrixLeft);
    createMatrixLetter(matrixRight);
    requestAnimationFrame(animateMatrix);
}

// Uruchomienie animacji
requestAnimationFrame(animateMatrix);
