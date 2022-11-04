const btn = document.querySelectorAll(".form__button")
const btn_submit = btn[2]
const modal = document.querySelector(".modal__preloader")
const div = document.querySelectorAll(".rollable")
const selectors = document.querySelectorAll(".login__step__selector")
const selectors_btn = document.querySelectorAll(".login__step")
const step_titles = ['Join the brotherhood', 'Just a more few steps...', 'Sign with blood!']
const step_title_el = document.querySelector('.login__title')

const fake_nome = document.getElementById('fake_name')
const fake_email = document.getElementById('fake_email')
const fake_senha = document.getElementById('fake_password')
const fake_cpf = document.getElementById('fake_cpf')
const fake_form = [fake_nome, fake_email, fake_senha, fake_cpf]

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const cpf = document.getElementById('cpf')
const form = [nome, email, senha, cpf]
const post_form = []

let counter = 0
selectors[0].classList.toggle('login__step__selector_active')
step_title_el.innerText = step_titles[0]


function onChangeTransferValue(input, output) {
    input.addEventListener('change', (e)=> {
        console.log('INPUT: ', input.value, input.innerText)
        output.value = input.value
        output.innerText = input.innerText
        console.log('OUTPUT: ', output.value, output.innerText)
    })
}

function transferValueForAll(input, output) {
    for (let x = 0; x < input.length; x++) {
        console.log('ELS (IN | OUT): ', input[x], output[x])
        onChangeTransferValue(input[x], output[x])
    }
}



function setTitle(counter) {
    step_title_el.innerText = step_titles[counter]
}
function setSelectorState(counter) {
    selectors[counter].classList.add('login__step__selector_active')
    selectors[counter-1].classList.remove('login__step__selector_active')
}
function slide(counter) {
    div.forEach(rollable => {
        rollable.style.transform = `translateX(${-100 * counter}%)`
    })
}
function cristalAndSlide() {
    for(let x = 0; x < selectors.length; x++) {

        selectors_btn[x].addEventListener("click", ()=> {
            slide(x)
            selectors.forEach(selector => {
                selector.classList.remove('login__step__selector_active')
            })
            selectors[x].classList.add('login__step__selector_active')
            setTitle(x)
            counter = x
        })
    }
}
function nextAndSlide() {
    btn.forEach(btn => {
        btn.addEventListener('click', e => {
            counter++
            if(counter > 2) counter = 2
            slide(counter)
            setSelectorState(counter)
            setTitle(counter)
        })
    })
}



function basicValidation(input) {
    const value = input.value

    const regex_az = new RegExp('^[a-zA-Z0-9_.-]*$'),
    regex_empty = new RegExp('^$')

    const 
    rg_az_error = "Must contain A-Z 0-9 . _",
    rg_empty_error = "Must not be empty."


    if(regex_empty.test(value)) return rg_empty_error
    if(!regex_az.test(value)) return rg_az_error
    return false
}

function validateName(input) {
    if(basicValidation(input)) return basicValidation(input)
    const value = input.value
    const 
    short = "Name is too short!",
    long = "It's too big, it won't fit...",
    valid = "All okay here."

    if(value.length < 8) return short
    if(value.length >= 56) return long
    return valid
}

function validateEmail(input) {
    const value = input.value
    // const regex_super = new RegExp('^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}+$)[A-Z0-9._%+-]{1,64}+@(?:(?=[A-Z0-9-]{1,63}+\.)[A-Z0-9]++(?:-[A-Z0-9]++)*+\.){1,8}+[A-Z]{2,63}+$')
    const rg_az_error = "This is not a valid e-mail adress."

    if(regex_super.test(value)) return rg_az_error
    if(contains) return short
    if(value.length > 56) return long
}

// console.log(validateEmail({value: 'abc12345.78'}))

function main() {


    requestAnimationFrame(main)
}
main()
transferValueForAll(fake_form, form)
nextAndSlide(counter)
cristalAndSlide(counter)