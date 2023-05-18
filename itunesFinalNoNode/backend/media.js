import fetch from 'isomorphic-fetch'

//takes parameters form front end and searches the api with them
export const getMedia = (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${req.query.term}&media=${req.query.media}&limit=${req.query.limit}`)
    .then((res) => res.json())
    .then((results) => {
        res.send(results)
    })
}