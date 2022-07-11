class UserService {
    _url = 'https://jsonplaceholder.typicode.com/users'

    getUsers() {
        return fetch(this._url)
            .then(value => value.json())
    }
}
export {UserService}
