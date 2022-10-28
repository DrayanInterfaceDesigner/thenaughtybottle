const phrases = [
    "i feel like streching",
    "FOR THE HOOORRRDE!!!",
    "Imagine playing WoW in 2k22 lmao",
    "would you murder the president?",
    "I'm full of stuff ( ͡° ͜ʖ ͡°)",
    "Até o infinito... ...para sempre e sempre",
    "Lembre-se dessa noite, porque é o inicio da eternidade",
    "Carpe diem!",
    "Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.",
    "Osmanthus Wine...",
    "I AM JUST A FREAK!!!",
    "É loucura odiar todas as rosas porque um dia uma te espetou",
    "tu te tornas eternamente responsável por aquilo que cativas",
    "A gente corre o risco de chorar um pouco quando se deixa cativar.",
    "corações de luar e sorrisos de raios de sol",
    "YOU CAN'T LOGOUT! :D"
]

function grabRandomPhrase(el) {
    const rand = Math.ceil(Math.random() * (phrases.length -1))
    el.innerText = phrases[rand]
}
function toggleClass(trigger, affect, className) {
    trigger.addEventListener('click', ()=> {
        affect.forEach(target => {
            target.classList.toggle(className)
        })
    })
}
grabRandomPhrase(document.getElementById('announcement__text'))
toggleClass(document.querySelector('.openstore__button'), 
[document.querySelector('.openstore__button__inner__inner'),
document.querySelector('.openstore__button')], 
'clippath__click')