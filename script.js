const btn = document.getElementById("btn")
const title = document.getElementById("title")

btn.addEventListener("click", () => {
    title.classList.toggle("changed")
})

console.log(btn.textContent)

console.log(p.textContent)   // "Hello"
console.log(p.innerHTML)     // "Hello"

console.log(i.textContent)   // ""
console.log(i.innerHTML)     // ""
console.log(i.value)         // "123"

