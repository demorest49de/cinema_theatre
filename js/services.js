const _API_KEY = 'b4326da2f71741f2fd37fd13cda904d9'
const _BASE_URL = 'https://api.themoviedb.org/3'

/*trending/all/day?api_key=<<api_key>>*/

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error(err))


export const getTriends = async () => {
    const url = `${_BASE_URL}/trending/all/day?api_key={b4326da2f71741f2fd37fd13cda904d9}`
    const data = await getData('')
    console.log('data: ', data)
}