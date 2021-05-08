const colors = ["Cyan", "Green", "rgba(133, 122, 200)", "#4169E1", "White"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = randomNumberGenerator();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function randomNumberGenerator() {
    return Math.floor(Math.random()*colors.length);
}