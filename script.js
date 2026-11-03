// PAGE NAVIGATION

function showPage(pageId) {
    document.querySelectorAll("main").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");
}

function openLetter() {
    showPage("letter");
}

function goBack() {
    showPage("welcome");
}

function openSurprise() {
    showPage("surprise");
}


// MUSIC PLAYER

const song = document.getElementById("mySong");

function toggleMusic() {
    const song = document.getElementById("mySong");
    const musicBtn = document.getElementById("musicBtn");

    if (song.paused) {
        song.play();
        musicBtn.textContent = "Pause Music ♡";
    } else {
        song.pause();
        musicBtn.textContent = "Press Play ♡";
    }
}

// BIRTHDAY WISH

function makeWish() {
    const candle = document.querySelector(".candle");
    const message = document.getElementById("wish-message");

    if (candle) {
        candle.classList.add("blown");
    }

    if (message) {
        message.classList.remove("hidden");
    }
}
function redeemCoupon(name) {
    alert(
        "Coupon redeemed! ♡\n\n" +
        name +
        "\n\nWith all my love,\nBarnabi ♡"
    );
}
function openLoveLetter() {
    document.getElementById("love-letter-popup")
        .classList.remove("hidden");
}
function showKisses() {
    const old = document.querySelector(".kiss-overlay");
    if (old) old.remove();

    const overlay = document.createElement("div");
    overlay.className = "kiss-overlay";

    const emojis = ["💋", "💋", "💋", "💕"];

    for (let i = 0; i < 250; i++) {
        const kiss = document.createElement("span");

        kiss.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        kiss.style.left = Math.random() * 100 + "vw";
        kiss.style.top = Math.random() * 100 + "vh";
        kiss.style.fontSize = (90 + Math.random() * 100) + "px";
        kiss.style.transform = "rotate(" + (Math.random() * 360) + "deg)";

        overlay.appendChild(kiss);
    }

    document.body.appendChild(overlay);

    setTimeout(function() {
        overlay.remove();
    }, 4000);
}
function openSongLetter() {
    document.getElementById("song-letter-popup")
        .classList.remove("hidden");
}

function closeSongLetter() {
    document.getElementById("song-letter-popup")
        .classList.add("hidden");
}
function closeLoveLetter() {
    const letter = document.getElementById("love-letter-popup");

    if (letter) {
        letter.classList.add("hidden");
    }
}