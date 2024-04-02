window.addEventListener('load', () => {
    const buttonMenu = document.getElementById('buttonMenu')
    const buttonClose = document.getElementById('buttonClose')
    if(buttonMenu){
        const menuSecundario = document.getElementById('menuSecundario')
        const nav = document.getElementById('nav')
        if(menuSecundario){
            buttonMenu.addEventListener('click', () => {
                menuSecundario.classList.add('activeMenu')
                buttonMenu.classList.add('d-none')
                buttonClose.classList.remove('d-none')
                nav.classList.remove('navSombra')
                nav.style.borderBottom = "1px solid lightgray"
            })
            buttonClose.addEventListener('click', () => {
                menuSecundario.classList.remove('activeMenu')
                buttonMenu.classList.remove('d-none')
                buttonClose.classList.add('d-none')
                nav.classList.add('navSombra')
                nav.style.borderBottom = "0px solid #707070"
            })
        }
    }
})