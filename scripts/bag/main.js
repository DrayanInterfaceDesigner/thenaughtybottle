const price_values = document.querySelectorAll(".mod__price__value")
const total_price = document.getElementById("total__price")
const total_amount = document.querySelector(".bag__quantity")
let total = 0
price_values.forEach(p => {
    total += eval(p.innerText)
})

total_price.innerText = total
total_amount.innerText = price_values.length