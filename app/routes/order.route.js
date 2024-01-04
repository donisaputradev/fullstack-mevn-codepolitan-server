module.exports = (app) => {
    const orders = require('../controllers/order.controller')
    const router = require('express').Router()

    router.get('/user/:id', orders.findOrder)
    router.post('/user/:id', orders.addToCart)
    router.delete('/user/:id/:product', orders.removeFromCart)

    app.use('/api/orders', router)
}