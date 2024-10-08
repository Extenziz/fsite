// Efekt Matrix - Tworzenie liter w kolumnach
const matrixLeft = document.querySelector('.matrix-left');
const matrixRight = document.querySelector('.matrix-right');
const letters = 'あ い う え おか き く け こさ し す せ そた ち つ て とな に ぬ ね のは ひ ふ へ ほ み む め もや ゆ よら り る れろわ を ん';

// Funkcja do tworzenia liter w animacji
function createMatrixLetter(column) {
    const letter = document.createElement('div');
    letter.classList.add('matrix-letter');
    letter.innerText = letters[Math.floor(Math.random() * letters.length)];
    letter.style.left = `${Math.random() * 100}%`; // Litery wewnątrz kolumny
    column.appendChild(letter);

    // Usuwanie litery po zakończeniu animacji
    setTimeout(() => {
        letter.remove();
    }, 4000); // Czas trwania animacji
}

// Funkcja animująca literowanie po kolumnach, uruchamiana za pomocą requestAnimationFrame
function animateMatrix() {
    createMatrixLetter(matrixLeft);
    createMatrixLetter(matrixRight);
    requestAnimationFrame(animateMatrix);
}

// Uruchomienie animacji
requestAnimationFrame(animateMatrix);
