const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];
const numPoints = 100;
const maxDistance = 120;
const speedFactor = 0.2; 

for (let i = 0; i < numPoints; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 5 * speedFactor, 
        vy: (Math.random() - 0.5) * 5 * speedFactor, 
        radius: 2, 
    });
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < points.length; i++) {
        let p1 = points[i];

       
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff'; 
        ctx.fill();

       
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

       
        p1.x += p1.vx;
        p1.y += p1.vy;

       
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
    }

    requestAnimationFrame(draw);
}


canvas.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    points.forEach(p => {
        const dx = clickX - p.x;
        const dy = clickY - p.y;
        const angle = Math.atan2(dy, dx);

        
        p.vx = Math.cos(angle) * 2 * speedFactor;
        p.vy = Math.sin(angle) * 2 * speedFactor;
    });
});

draw();


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



document.getElementById('nextSectionBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');
    
   
    firstSection.classList.add('fade-out');
    
    
    setTimeout(() => {
        
        firstSection.classList.remove('fade-out');

        
        nextSection.classList.add('fade-in');
        nextSection.classList.add('fade-in-visible'); 
        
       
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }, 800); 
});


document.getElementById('backBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');

 
    nextSection.classList.add('fade-out');

    setTimeout(() => {
       
        nextSection.classList.remove('fade-out');
        nextSection.classList.remove('fade-in-visible'); 

     
        firstSection.classList.add('fade-in');
        firstSection.classList.add('fade-in-visible'); 
        
   
        firstSection.scrollIntoView({ behavior: 'smooth' });
    }, 800); 
});


document.getElementById('backBtn').addEventListener('click', function() {
    const firstSection = document.querySelector('.pole-1');
    const nextSection = document.getElementById('nextSection');

    
    nextSection.classList.add('fade-out');

    setTimeout(() => {
        
        firstSection.scrollIntoView({ behavior: 'smooth' });
        
        
        nextSection.classList.remove('next-section-visible');
        nextSection.classList.remove('fade-out');
        
        
        firstSection.classList.remove('fade-out');
    }, 500); 
});
