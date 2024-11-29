window.alert("You can use the keys: A,S,D,F,G,H,J,K,L to play the drums");


document.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!pad) return;
    pad.classList.add("onClick");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
});

document.addEventListener('click', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const pad = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
    if (!pad) return;
    pad.classList.add("onClick");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
});

document.addEventListener('keyup', (e) => {
    const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!pad) return;
    pad.classList.remove('onClick');
})

const pads = document.querySelectorAll('.pads');

const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('onClick');
}

pads.forEach(key => key.addEventListener('transitionend', removeTransition));
