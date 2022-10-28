const btn = document.querySelectorAll(".form__button")
const btn_submit = btn[2]
const modal = document.querySelector(".modal__preloader")
const div = document.querySelectorAll(".rollable")
const selectors = document.querySelectorAll(".login__step__selector")
const step_titles = ['Join the brotherhood', 'Just a more few steps...', 'Sign with blood!']
const step_title_el = document.querySelector('.login__title')

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const cpf = document.getElementById('cpf')
const form = [nome, email, senha, cpf]
const post_form = []

let counter = 0
selectors[0].classList.toggle('login__step__selector_active')
step_title_el.innerText = step_titles[0]


function roll() {
    btn.forEach(btn => {
        btn.addEventListener('click', ()=> {
            counter++
            if(counter > 2) counter = 2;
            div.forEach(rollable => {
                rollable.style.transform = `translateX(${-100 * counter}%)`
            })
            selectors[counter].classList.add('login__step__selector_active')
            selectors[counter-1].classList.remove('login__step__selector_active')

            step_title_el.innerText = step_titles[counter]

        })
    })
}

btn_submit.addEventListener('click', ()=> {
    modal.style.transform = `translateY(0%)`
    modal.style.opacity = 1
})

roll()