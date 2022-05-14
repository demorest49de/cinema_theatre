import {
    getPopular,
    getTop
} from "./services.js"

import renderCard from "./renderCard.js"

const otherFilmsTitle = document.querySelector('.other-films__title')
const filmWeek = document.querySelector('.film-week')
const getNav = document.querySelectorAll('.get-nav')
console.log('getNav: ', getNav)

const menuLink = () => {// отличие форич от мап. форич ничего не возвращает, мап - возвращает измененный элемент
    getNav.forEach((nav) => {
        nav.addEventListener('click', event => {

            const target = event.target.closest('.get-nav__link') // отбор куда кликать и что показывать через closest()

            if (target) {
                event.preventDefault()
                filmWeek.style.display = 'none'
            }
        })
    })
}

export default menuLink