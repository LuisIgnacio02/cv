alert("Puede hacer click en los recuadros con mis logros para ver un documento relacionado.");

const menuNav = document.getElementById("menu_barra"),
    abrirNav = document.getElementById("abrir_barra"),
    cerrarNav = document.getElementById("cerrar_barra")

abrirNav.addEventListener("click", ()=>{
    menuNav.classList.toggle("show")
})
cerrarNav.addEventListener("click", ()=>{
    menuNav.classList.remove("show")
})

const linkNav = document.querySelectorAll(".link_barra")

function linkAction(){
    menuNav.classList.remove("show")
}
linkNav.forEach(n => n.addEventListener("click", linkAction))

const orangeButton = document.getElementById("color_orange")
const blueButton = document.getElementById("color_blue")
const greenButton = document.getElementById("color_green")
const yellowButton = document.getElementById("color_yellow")
const changeFirstColor = "--first_color"
const changeDarkColor = "--first_color_dark"
const changeDarkerColor = "--first_color_darker"

orangeButton.addEventListener("click", _ => {
    document.documentElement.style.setProperty(changeFirstColor, "#CC4B2C")
    document.documentElement.style.setProperty(changeDarkColor, "#662616")
    document.documentElement.style.setProperty(changeDarkerColor, "#290F09")
})

blueButton.addEventListener("click", _ => {
    document.documentElement.style.setProperty(changeFirstColor, "#1687A7")
    document.documentElement.style.setProperty(changeDarkColor, "#276678")
    document.documentElement.style.setProperty(changeDarkerColor, "#092332")
})

greenButton.addEventListener("click", _ => {
    document.documentElement.style.setProperty(changeFirstColor, "#008000")
    document.documentElement.style.setProperty(changeDarkColor, "#006400")
    document.documentElement.style.setProperty(changeDarkerColor, "#004200")
})

yellowButton.addEventListener("click", _ => {
    document.documentElement.style.setProperty(changeFirstColor, "#CACA00")
    document.documentElement.style.setProperty(changeDarkColor, "#929216")
    document.documentElement.style.setProperty(changeDarkerColor, "#5b5b07")
})

// const sections = document.querySelectorAll("section[id]")
//
// window.addEventListener("scroll", scrollActive)
//
// function scrollActive(){
//     const scrollY = window.pageYOffset
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute("id")
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".menu_barra a[href* = " + sectionId + "]").classList.add("active")
//         }
//         else{
//             document.querySelector(".menu_barra a[href* = " + sectionId + "]").classList.remove("active")
//         }
//     })
// }