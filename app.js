window.addEventListener('load', () => {
    const buttonMenu = document.getElementById('buttonMenu')
    const buttonClose = document.getElementById('buttonClose')
    if(buttonMenu){
        const menuSecundario = document.getElementById('menuSecundario')
        if(menuSecundario){
            buttonMenu.addEventListener('click', () => {
                menuSecundario.classList.add('activeMenu')
                buttonMenu.classList.add('d-none')
                buttonClose.classList.remove('d-none')
            })
            buttonClose.addEventListener('click', () => {
                menuSecundario.classList.remove('activeMenu')
                buttonMenu.classList.remove('d-none')
                buttonClose.classList.add('d-none')
            })
        }
    }
})