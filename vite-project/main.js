import './style.css'

const h1 = document.querySelector("h1")
h1.addEventListener("click", (e)=> {
  alert(e.target)
})