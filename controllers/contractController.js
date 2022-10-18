const Contract = require("../models/Contract");
const jwt = require('jsonwebtoken');

//Odosli Form//
module.exports.form_post = async (req, res) => {
    const { id, number, product, gtc } = req.body;

    try {
        const contract = await Contract.create({ id, number, product, gtc });
        res.render('sign_document');

    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports.form_get = (req, res) => {
    res.render('sign_document');
}