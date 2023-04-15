const GarmentController = require('../controllers/garment.controller');

module.exports = app => {
    app.get('/api/garments', GarmentController.findAllGarments); //route to find all garments in the database
    app.post('/api/garments', GarmentController.createOneGarment); //route to create/add a garment to the database
    app.get('/api/garments/:id', GarmentController.showOneGarment); //route to get all information for a specific garment
    app.put('/api/garments/:id', GarmentController.updateOneGarment); //route to update information for a specific garment
    app.delete('/api/garments/:id', GarmentController.deleteOneGarment) //route to delete a specific garment from the database
}