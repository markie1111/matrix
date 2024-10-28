const canvas = document.getElementById('matrixfaszom');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "あぁかさたなはまやゃらわがざだばぱいぃきしちにひみりゐぎじぢびぴうぅくすつぬふむゆるゅぐずづぶぷえぇけせてねへめれゑげぜでべぺおぉこそとのほもよょろをごぞどぼぽゔっん";
const charArray = characters.split("");

const colors = ["#00ff00", "#66ff66", "#ffff66", "#3399ff", "#00ffff", "#ff66ff", "#ff3333", "#ff9900"];

const fontsize = 20;
const columns = canvas.width / fontsize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontsize}px monospace`;

    drops.forEach((y, x) => {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.fillText(text, x * fontsize, y * fontsize);

        if (y * fontsize > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        }

        drops[x]++;
    });
}

setInterval(draw, 75);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});