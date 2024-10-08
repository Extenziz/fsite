const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");

// Ustawienia canvas na pełny ekran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tworzymy tablicę punktów
let points = [];
const numPoints = 100;
const maxDistance = 120;
const speedFactor = 0.2; // Spowolnienie prędkości

for (let i = 0; i < numPoints; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 5 * speedFactor, // prędkość pozioma z uwzględnieniem spowolnienia
        vy: (Math.random() - 0.5) * 5 * speedFactor, // prędkość pionowa z uwzględnieniem spowolnienia
        radius: 2, // rozmiar punktu
    });
}

// Funkcja do rysowania punktów i linii między nimi
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < points.length; i++) {
        let p1 = points[i];

        // Rysowanie punktu
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff'; // kolor punktów
        ctx.fill();

        // Rysowanie linii między punktami, jeśli są blisko siebie
        for (let j = i + 1; j < points.length; j++) {
            let p2 = points[j];
            let distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`; // przezroczystość linii
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }

        // Aktualizacja pozycji punktu
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Odbicie od krawędzi
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
    }

    requestAnimationFrame(draw);
}

// Interakcja po kliknięciu - zmiana kierunku punktów w zależności od miejsca kliknięcia
canvas.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    points.forEach(p => {
        const dx = clickX - p.x;
        const dy = clickY - p.y;
        const angle = Math.atan2(dy, dx);

        // Ustawianie nowej prędkości w kierunku kliknięcia
        p.vx = Math.cos(angle) * 2 * speedFactor;
        p.vy = Math.sin(angle) * 2 * speedFactor;
    });
});

draw();

// Aktualizacja rozmiaru canvas przy zmianie rozmiaru okna
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


//MORE
document.getElementById('nextSectionBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');
    
    // Dodaj efekt zanikania do pierwszej sekcji
    firstSection.classList.add('fade-out');
    
    // Czekaj, aż pierwsza sekcja całkowicie zaniknie
    setTimeout(() => {
        // Usuwamy klasę fade-out, aby przygotować do powrotu (opcjonalnie)
        firstSection.classList.remove('fade-out');

        // Pokazujemy nową sekcję z efektem fade-in
        nextSection.classList.add('fade-in');
        nextSection.classList.add('fade-in-visible'); // Dodajemy klasę, aby sekcja się pojawiła
        
        // Płynne przewinięcie do nowej sekcji
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }, 800); // Czas dopasowany do długości efektu fade-out
});

// Obsługa kliknięcia przycisku "Powrót"
document.getElementById('backBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');

    // Dodaj efekt zanikania do następnej sekcji
    nextSection.classList.add('fade-out');

    setTimeout(() => {
        // Usuwamy klasę fade-out, aby przygotować sekcję na ponowne pojawienie się
        nextSection.classList.remove('fade-out');
        nextSection.classList.remove('fade-in-visible'); // Usuwamy klasę, aby móc ją dodać ponownie

        // Pokazujemy główną sekcję z efektem fade-in
        firstSection.classList.add('fade-in');
        firstSection.classList.add('fade-in-visible'); // Dodajemy klasę, aby sekcja się pojawiła
        
        // Płynne przewinięcie do pierwszej sekcji
        firstSection.scrollIntoView({ behavior: 'smooth' });
    }, 800); // Czas dopasowany do długości efektu fade-out
});

// Obsługa kliknięcia przycisku "Powrót"
document.getElementById('backBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');

    // Dodaj efekt fade-out do bieżącej sekcji (ukrywanie następnej sekcji)
    nextSection.classList.add('fade-out');

    // Opóźnienie dla płynnej animacji fade-out
    setTimeout(() => {
        // Przewiń do poprzedniej sekcji (głównej)
        firstSection.scrollIntoView({ behavior: 'smooth' });
        
        // Usuń klasy odpowiedzialne za widoczność i efekt zanikania
        nextSection.classList.remove('next-section-visible');
        nextSection.classList.remove('fade-out');
        
        // Ważne: Zresetuj wszystkie elementy, które mogły być niewidoczne
        firstSection.classList.remove('fade-out');
    }, 500); // Opóźnienie, aby efekt zanikania był widoczny
});
