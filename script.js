const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const index = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(index);
    const blackKeyIndex = BLACK_KEYS.indexOf(index);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex])
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex])
    }
})

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

function playNote(key) {
    const notes = document.getElementById(key.dataset.note);
    notes.currentTime = 0;
    notes.play();
    key.classList.add('active');
    notes.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}