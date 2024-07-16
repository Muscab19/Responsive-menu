let iconButton = document.querySelector("#menuBtn")
let list = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let cancel = document.querySelector("#menu")

iconButton.addEventListener("click", function(){
    list.style.display = "flex"
    buttons.style.display = "block"
    iconButton.style.display = "none"
    cancel.style.display = "block"
})

cancel.addEventListener("click", function(){
    list.style.display = "none"
    buttons.style.display = "none"
    iconButton.style.display = "block"
    cancel.style.display = "none"
})