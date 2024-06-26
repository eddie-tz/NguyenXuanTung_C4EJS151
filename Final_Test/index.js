const symbols = ["bau", "cua", "tom", "ca", "huou", "ga"];
const bets = { "bau": 0, "cua": 0, "tom": 0, "ca": 0, "huou": 0, "ga": 0 };
let totalBets = 0;
let spinning = false;

// DOM elements
const results = [
    document.querySelector('#result1 img'),
    document.querySelector('#result2 img'),
    document.querySelector('#result3 img')
];
const images = document.querySelectorAll('.bet-container .image-container img');
const betDisplays = document.querySelectorAll('.bet');
const spinButton = document.getElementById('spinButton');
const resetButton = document.getElementById('resetButton');
const resultMessage = document.getElementById('resultMessage');

// Event listeners for placing bets
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        if (!spinning && totalBets < 3) {
            const symbol = img.parentElement.getAttribute('data-symbol');
            if (bets[symbol] < 3) {
                bets[symbol]++;
                totalBets++;
                betDisplays[index].innerHTML = ` ${bets[symbol]}`;
            }
        }
    });
});

// Event listener for spinning
spinButton.addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        spinButton.disabled = true;
        resetButton.disabled = true;
        images.forEach(img => img.parentElement.style.pointerEvents = 'none');

        let spinCount = 0;
        const spins = [];
        const intervals = [];

        for (let i = 0; i < 3; i++) {
            spins.push(symbols[Math.floor(Math.random() * symbols.length)]);
            intervals.push(setInterval(() => {
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                results[i].src = `${randomSymbol}.png`;
                spinCount++;
                if (spinCount >= 100) {
                    clearInterval(intervals[i]);
                    results[i].src = `${spins[i]}.png`;
                    if (i === 2) {
                        spinning = false;
                        spinButton.disabled = false;
                        resetButton.disabled = false;
                        images.forEach(img => img.parentElement.style.pointerEvents = 'auto');
                        checkResult(spins);
                    }
                }
            }, 10));
        }
    }
});

// Event listener for resetting bets
resetButton.addEventListener('click', () => {
    if (!spinning) {
        for (let symbol in bets) {
            bets[symbol] = 0;
        }
        totalBets = 0;
        betDisplays.forEach(display => {
            display.innerHTML = " 0";
        });
        resultMessage.innerHTML = "";
    }
});

function checkResult(spins) {
    const resultCount = { "bau": 0, "cua": 0, "tom": 0, "ca": 0, "huou": 0, "ga": 0 };
    spins.forEach(spin => {
        resultCount[spin]++;
    });
    const resultArray = [];
    for (let symbol in resultCount) {
        if (resultCount[symbol] > 0) {
            resultArray.push(`${symbol.charAt(0).toUpperCase() + symbol.slice(1)} ${resultCount[symbol]}`);
        }
    }
    const resultString = resultArray.join(', ');

    let correctBets = 0;
    spins.forEach(spin => {
        correctBets += bets[spin];
    });

    if (correctBets > 0) {
        console.log(`Bạn đã đoán đúng với kết quả: ${resultString}`);
    } else {
        console.log(`Bạn đã đoán sai với kết quả: ${resultString}`);
    }
    resetBets();
}

function resetBets() {
    for (let symbol in bets) {
        bets[symbol] = 0;
    }
    totalBets = 0;
    betDisplays.forEach(display => {
        display.innerHTML = " 0";
    });
}
