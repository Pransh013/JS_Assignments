const button = document.querySelectorAll('.btn');
const body = document.querySelector('body');

button.forEach( (btns) => {
    btns.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
    })
})