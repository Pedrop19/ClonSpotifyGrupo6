let records = document.querySelectorAll('.record');
let recordContainers = document.querySelectorAll('.record-container');

recordContainers.forEach(container => {
    container.addEventListener("mouseover", startAnimation);
    container.addEventListener("mouseout", resetAnimation);
});

function startAnimation(event) {
    let record = event.currentTarget.querySelector('.record');
    record.style.transform = 'translate(-50%, -100%)';
}

function resetAnimation(event) {
    let record = event.currentTarget.querySelector('.record');
    record.style.transform = 'translate(-50%, -50%)';
}
