const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
const cardController = require('../controller/cardController')
const middle = require('../middleware/validation')




router.get("/getCostumers", customerController.getCustomers)

router.delete("/deleteCustomer",customerController.deleteCustomer )

router.post('/createCustomer', customerController.createCustomer)


router.get('/getCards',  cardController.getCards)

router.post("/createCard",middle.createAutocardNumber, cardController.createCard)

module.exports = router