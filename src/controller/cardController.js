const cardModel = require('../model/cardModel')




const getCards = async (req,res)=>{
  try{ const  cards = await cardModel.find()

 return   res.status(200).send({status : true , cardList : cards})

}catch(err){res.status(500).send({status:false , error : err.message})}
}

const createCard = async (req,res)=>{
    try{const {cardNumber, cardType,customerName, vision,customerID} = req.body
    if(!cardNumber || !cardType || !customerName || !vision || !customerID ) return res.status(400).send({status:false, message : "missing mandatory fields"})
    const card = await cardModel.create(req.body)
  return   res.status(201).send({status : true, message : card}) 
}catch(err){res.status(500).send({status:false , error : err.message})}
}



module.exports = {getCards , createCard}