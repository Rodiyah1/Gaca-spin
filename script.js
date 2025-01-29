const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

// Daftar hadiah dengan peluang masing-masing
let prizes = [
    { name: "Hadiah 1", chance: 0.00001 },
    { name: "Hadiah 2", chance: 50 },
    { name: "Hadiah 3", chance: 10 },
    { name: "Hadiah 4", chance: 5 },
    { name: "Hadiah 5", chance: 5 },
    { name: "Hadiah 6", chance: 0.000000000000000000000000000000000000000000000000000000001 },
    { name: "Hadiah 7", chance: 10 },
    { name: "Hadiah 8", chance: 10 },
    { name: "Hadiah 9", chance: 5 },
    { name: "Hadiah 10", chance: 4.99999 }
];

// Fungsi untuk memilih hadiah berdasarkan probabilitas
function weightedRandom(prizes) {
    let totalWeight = prizes.reduce((sum, prize) => sum + prize.chance, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < prizes.length; i++) {
        if (random < prizes[i].chance) return prizes[i].name;
        random -= prizes[i].chance;
    }
}

let spinning = false;

spinBtn.addEventListener("click", () => {
    if (spinning) return;
    spinning = true;

    let randomDeg = 360 * 5 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${randomDeg}deg)`;

    setTimeout(() => {
        spinning = false;
        let result = weightedRandom(prizes);
        alert(`Kamu mendapatkan: ${result}`);
    }, 3000);
});
