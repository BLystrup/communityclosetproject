const Garment = require('../models/garment.model');

// function to get all of the garments in the database
module.exports.findAllGarments = (req, res) => {
    Garment.find()
        .then(allGarments => res.json({ garments: allGarments }))
        .catch(err => res.json({ message: "Something went wrong.", error: err}))
}

// function to create & add a new garment to the database
module.exports.createOneGarment = (req, res) => {
    Garment.create(req.body)
        .then(newGarment => res.json({ garment: newGarment }))
        .catch(err => res.json({ message: "Something went wrong.", error: err}))
}

// function to get all information for a specific garment by id#
module.exports.showOneGarment = (req, res) => {
    Garment.findById( req.params.id )
        .then(oneGarment => res.json({ garment: oneGarment }))
        .catch(err => res.json({ message: "Something went wrong.", error: err}))
}

// function to update information for a specific garment in the database using its id#
module.exports.updateOneGarment = (req, res) => {
    Garment.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedGarment => res.json({ garment: updatedGarment }))
        .catch(err => res.json({ message: "Something went wrong.", error: err}))
}

// function to delete a specific garment from the database using its id#
module.exports.deleteOneGarment = (req, res) => {
    Garment.findByIdAndDelete( req.params.id )
        .then(deletedGarment => res.json({ garment: deletedGarment }))
        .catch(err => res.json({ message: "Something went wrong.", error: err}))
}