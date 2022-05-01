const _API_KEY = 'b4326da2f71741f2fd37fd13cda904d9'
const _BASE_URL = 'https://api.themoviedb.org/3'
const _LANGUAGE = '&language=ru-RU'

/*trending/all/day?api_key=<<api_key>>*/

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error(err))


export const getTriends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${_BASE_URL}/trending/${type}/${period}?api_key=${_API_KEY}${_LANGUAGE}&page=${page}`
    return await getData(url)
}