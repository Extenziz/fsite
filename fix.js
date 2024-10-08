
const headerText = "MANIFEST";
const manifestText = `Manifest of Creativity in the Digital Era
In a world where the boundaries between the real and the virtual dissolve, I find myself compelled to explore the infinite possibilities of creativity through technology. This is not merely a website; it is a reflection of my belief that art and code are two sides of the same coin. Through every line of code, I express a part of myself, blending creativity with logic, aesthetics with functionality.
Creativity, in its essence, is boundless. It thrives in the spaces where innovation meets imagination, where pixels come to life through the power of ideas. In this digital era, I am not confined by the limits of traditional mediums. Instead, I am empowered by the tools that technology provides, pushing me to rethink what it means to create.
I embrace the chaos of experimentation. In the uncertainty of every new project, in every failed attempt, I find new ways to grow. Creativity does not follow a straight path, and neither do I. This space is my playground, where I deconstruct the familiar and rebuild it in unexpected ways.
Technology is not the enemy of creativity; it is its enabler. It allows me to take abstract concepts and give them form, to turn visions into realities that can be experienced by others. Every animation, every interaction on this page is a testament to the power of merging art and code into one seamless experience.
To be creative is to be brave. It is to challenge the norm, to question what is, and to strive for what could be. I choose to embrace the unknown, to dive headfirst into the digital canvas with no fear of failure, because each mistake is just a step toward something new.
In this digital space, I am not limited by physical constraints. The only limits are the edges of my imagination, and those edges expand with every new challenge I take on. This is my manifesto of digital creativity, where every pixel tells a story, and every interaction invites you to become part of the journey.

`;

function typeWriter(element, text, speed, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); 
        }
    }
    type();
}


document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById('typed-header');
    const textElement = document.getElementById('typed-text');

    
    typeWriter(headerElement, headerText, 50, function() { 
        
        typeWriter(textElement, manifestText, 1);  
});