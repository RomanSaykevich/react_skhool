class CommentService {
    _url = 'https://jsonplaceholder.typicode.com/comments'

    getComments() {
        return fetch(this._url)
            .then(value => value.json())
    }
}

export {CommentService}