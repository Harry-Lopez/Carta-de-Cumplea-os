const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnOpenElement.addEventListener('click', ()=> {
    const pestañaElement = document.querySelector('.pestaña')
    pestañaElement.classList.add('open-pestaña')

    setTimeout(()=>{
        pestañaElement.style.zIndex = -2

        const contenidoElement = document.querySelector('.contenido')
    contenidoElement.classList.add('open-contenido')

    },500)
})

btnCloseElement.addEventListener('click', ()=> {
    const pestañaElement = document.querySelector('.pestaña')

    const contenidoElement = document.querySelector('.contenido')
    contenidoElement.classList.remove('open-contenido')
    contenidoElement.classList.add('close-contenido')

    setTimeout(()=>{
        pestañaElement.style.zIndex = 0
        pestañaElement.classList.remove('open-pestaña')
    },500)
})

//Actualizado