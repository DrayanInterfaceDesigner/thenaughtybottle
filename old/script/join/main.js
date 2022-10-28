const btn = document.querySelectorAll(".form__button")
const btn_submit = btn[2]
const modal = document.querySelector(".modal__preloader")
const div = document.querySelectorAll(".rollable")
let counter = 0

function roll() {
    btn.forEach(btn => {
        btn.addEventListener('click', ()=> {
            counter++
            if(counter > 2) counter = 2;
            div.forEach(rollable => {
                rollable.style.transform = `translateX(${-100 * counter}%)`
            })
        })
    })
}

btn_submit.addEventListener('click', ()=> {
    modal.style.transform = `translateY(0%)`
    modal.style.opacity = 1
})

roll()