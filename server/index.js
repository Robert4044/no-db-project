const express = require('express')
const movieCtrl = require('./controllers/moviesController')
const basketCtrl = require('./controllers/basketController')

const app = express()
const PORT = 8080

app.use(express.json())

app.get('/api/movies', movieCtrl.getAllMovies) // Postman - able to get

app.get('/api/basket', basketCtrl.getBasket) // Postman -able to get
app.post('/api/basket', basketCtrl.addToBasket) // Postman - able to add
app.put('/api/basket/:basket_id', basketCtrl.changeRating) // Postman - able to adjust rating
app.delete('/api/basket/:basket_id', basketCtrl.removeFromBasket) // Postman - able to remove item from basket
app.delete('/api/basket', basketCtrl.clearBasket) // Postman - able to clear basket

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
