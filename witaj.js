// Funkcja dla efektu wpisywania poziomo
function typeWriter(text, element, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay); // Opóźnienie wpisywania kolejnych liter
        }
    }
    type();
}

// Znajdź element tekstowy w oknie
const textElement = document.querySelector('.nowe-okno p');
const textContent = "ACTA NON VERBA";

// Wywołanie funkcji typewriter z opóźnieniem wpisywania liter
typeWriter(textContent, textElement, 100); // 200 ms opóźnienia między literami

// Funkcja dla efektu wpisywania poziomo dla przycisku
function typeWriterButton(text, element, delay = 100) {
    let i = 0;
    element.innerHTML = ''; // Wyczyść zawartość przycisku przed animacją
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay); // Opóźnienie wpisywania kolejnych liter
        }
    }
    type();
}

// Znajdź element przycisku
const buttonElement = document.getElementById('nextSectionBtn');
const buttonText = "MORE"; // Tekst do wpisania

// Dodaj zdarzenie, które uruchomi animację wpisywania przy najechaniu myszką
buttonElement.addEventListener('mouseover', () => {
    typeWriterButton(buttonText, buttonElement, 150); // Uruchom efekt wpisywania liter przy najechaniu
});



