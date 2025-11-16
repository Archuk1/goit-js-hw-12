import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    submit_BTN: document.querySelector('.submit-btn'),
    input_Delay: document.querySelector('.input-delay'),
    Radio: document.querySelector('input[type="radio"]')
}




refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const delay = refs.input_Delay.value;
    const state = refs.Radio.checked;
    const promise = createPromise(delay,state);
    promise.then().catch();
    refs.form.reset();
});


//!=====================================================

function createPromise(delay, state) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (state) {
                res(iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight"}))
            } else {
                rej(iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight"}))
            }
        }, delay)
    });
    return promise;
    
}
