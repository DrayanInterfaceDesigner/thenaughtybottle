const btn_submit = document.querySelector(".form__button")
const modal = document.querySelector(".modal__preloader")

btn_submit.addEventListener('click', ()=> {
    modal.style.transform = `translateY(0%)`
    modal.style.opacity = 1
})

function lol() {
    btn_submit.addEventListener('click', ()=> {
        modal.style.transform = `translateY(0%)`
        modal.style.opacity = 1
    })
    // document.getElementById('login').submit();
}