let record = document.querySelector('.record');
let recordContainer = document.querySelector('.record-container');

recordContainer.addEventListener("mouseover", startAnimation);
recordContainer.addEventListener("mouseout", resetAnimation);

function startAnimation() {
    record.style.transform = 'translate(-50%, -100%)';
}

function resetAnimation() {
    record.style.transform = 'translate(-50%, -50%)';
}
