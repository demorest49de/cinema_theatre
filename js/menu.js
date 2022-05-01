const openMenu = (nav, active) => {
    nav.classList.add(active)
}
const closeMenu = (nav, active) => {
    nav.classList.remove(active)
}

const slideMenu = ({openBtn, menu, classActiveMenu, closeTrigger}) => {


    const burgerBtn = document.querySelector(openBtn)
    const navigation = document.querySelector(menu)
    const navigationClose = document.querySelectorAll(closeTrigger)

    navigationClose.forEach((element) => {
        element.addEventListener('click', () => {
            closeMenu(navigation, classActiveMenu)
        })
    })

    burgerBtn.addEventListener('click', () => {
        /*пишем анонимку здесь чтобы передать параметры иначе не получится*/
        openMenu(navigation, classActiveMenu)
    })
}

export default slideMenu