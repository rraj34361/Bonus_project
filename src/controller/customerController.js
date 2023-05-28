const customerModel = require("../model/customerModel");

const getCustomers = async (req, res) => {
   try {const customers = await customerModel.find({ status: "ACTIVE" });

    res.status(200).send({ status: true, message: customers });
}catch(err){console.log(err), res.status(500).send({status : false , error : "Internal Server Error"})}
};

const deleteCustomer = async (req, res) => {
    try{const id = req.params.id;
    const deleted = customerModel.findByIdAndDelete(id);

    res.status(200).send({ status: true, message: "Customer deleted successfully" });
}catch(err){res.status(500).send({error : err.message})}
}
;

const createCustomer = async (req, res) => {
   try{ const created = await customerModel.create(req.body);

    res.status(201).send({ status: true, message: created });
}catch(err){res.status(500).send({error : err.message})}
}
;

module.exports = { getCustomers, deleteCustomer, createCustomer};
