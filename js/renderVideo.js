import {getTriends} from "./services.js"

const filmWeek = document.querySelector('.film-week')
const firstRender = data => {
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${data.vote_average}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}" alt="постер ${data.title}">
            <p class="film-week__title_origin">${data.original_title}</p>
        </div>
        <h2 class="film-week__title">${data.title}</h2>
        <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
    </div>
    `
}

const renderVideo = async () => {
    const data = await getTriends()
    firstRender(data.results[0])
}

export default renderVideo

export function toCamelCase(str = '') {

    if (!str) {
        return ''
    }
    const regExp1 = new RegExp('[^a-z0-9].', 'gm')
    let stringToChange = str

    let someDelimiter = stringToChange.match(regExp1)[0][0] //_

    if (someDelimiter === '_') {

        const params = stringToChange.match(regExp1)
        params.forEach(el => {
            let elUpper = el.toUpperCase()
            stringToChange = stringToChange.replace(el, elUpper)
        })

        const expression = new RegExp(`${someDelimiter}`, 'gm')
        stringToChange = stringToChange.replace(expression, '')

        const firstChar = stringToChange.charAt(0).toLowerCase() //t
        stringToChange = stringToChange.replace(/^./, firstChar)
        return stringToChange
    }

    if(someDelimiter !== null){

        const regExp2 = new RegExp('[^a-zA-Z]', 'gm')
        someDelimiter = stringToChange.match(regExp2)[0]

        if (someDelimiter === '-') {
            const regExp1 = new RegExp(`${someDelimiter}`, 'gm')
            stringToChange = stringToChange.replace(regExp1, '')
        }

        return stringToChange
    }
}

const result1 = toCamelCase('the_stealth_warrior')
const result2 = toCamelCase('The-Stealth-Warrior')

console.log(' result1: ', result1)
console.log(' result2: ', result2)

const result3 = toCamelCase('')
console.log('result3: ', result3)
