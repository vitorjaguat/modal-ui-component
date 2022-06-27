'use strict';

//Class selection:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')

//Function expressions:
const openModal = function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


//Event listeners (open/close modal)
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//Event listener for Esc button:
//The 'e' parameter receives the key that was pressed.
//The 'e.key' refers to the actual key that was pressed.
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})