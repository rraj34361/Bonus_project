const cardModel = require("../model/cardModel")



const createAutocardNumber = async (req,res,next)=>{

    const cards = await cardModel.find().sort({CardNumber : -1})
   let lastCard = cards[0]
    let cardNumber = 'C001';
    
    if (lastCard) {
      const lastCardNumber = lastCard.cardNumber;
      const number = parseInt(lastCardNumber.slice(1));
      cardNumber = `C${(number + 1).toString().padStart(3, '0')}`;
      req.body = cardNumber
      next()
    }else{
        next()
    }
    
}

module.exports = {createAutocardNumber}