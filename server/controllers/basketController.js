const movies = require('../data.json')

const basket = {
    items: [],
    rating: 0,
}

let basketId = 0

module.exports = {
    getBasket: (req, res) => {
        res.status(200).send(basket)
    },
    addToBasket: (req, res) => {
        const { movie_id, rating } = req.body // ? might need rating here
        const index = basket.items.findIndex(
            element => element.id === +movie_id
        )
        if (index === -1) {
            const movie = movies.find(element => element.id === +movie_id)
            movie.movie_id = basketId
            movie.rating = rating
            basket.items.push(movie)
            basketId++
        }

        res.status(200).send(basket)
    },
    changeRating: (req, res) => {
        const { basket_id } = req.params

        const { action } = req.query

        const index = basket.items.findIndex(
            element => element.id === +basket_id
        )
        if (index === -1) {
            return res.status(404).send('Movie not in basket')
        }
        if (action === 'increase') {
            basket.items[index].rating++
        } else if (action === 'decrease' && basket.items[index].rating > 0) {
            basket.items[index].rating--
        } else {
            return res
                .status(400)
                .send(
                    `Query ${action} is not supported. Use either increase or decrease`
                )
        }
        res.status(200).send(basket)
    },
    removeFromBasket: (req, res) => {
        const { basket_id } = req.params

        const index = basket.items.findIndex(
            element => element.id === +basket_id
        )
        if (index === -1) {
            return res.status(404).send('Item is not in basket')
        }
        basket.items.splice(index, 1)
        res.status(200).send(basket)
    },
    clearBasket: (req, res) => {
        basket.rating = 0
        basket.items = []
        res.status(200).send(basket)
    },
}
