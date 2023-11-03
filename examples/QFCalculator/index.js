let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")

let response = document.getElementById("response")

function calculate(){
    let xml = new XMLHttpRequest()
    xml.addEventListener("load", function(){
        console.log(this.responseText)
        response.innerHTML = this.responseText
    })
    xml.open("GET", `https://cloud-math-c045aa7f02f6.herokuapp.com/api/math?operation=quadratic-formula&a=${parseFloat(a.value)}&b=${parseFloat(b.value)}&c=${parseFloat(c.value)}`)
    xml.send()
    console.log(`https://cloud-math-c045aa7f02f6.herokuapp.com/api/math?operation=quadratic-formula&a=${parseFloat(a.value)}&b=${parseFloat(b.value)}&c=${parseFloat(c.value)}`)
}