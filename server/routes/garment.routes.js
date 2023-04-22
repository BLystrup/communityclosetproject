const GarmentController = require('../controllers/garment.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/garments', authenticate, GarmentController.findAllGarments); //route to find all garments in the database
    app.post('/api/garments', authenticate, GarmentController.createOneGarment); //route to create/add a garment to the database
    app.get('/api/garments/:id', authenticate, GarmentController.showOneGarment); //route to get all information for a specific garment
    app.put('/api/garments/:id', authenticate, GarmentController.updateOneGarment); //route to update information for a specific garment
    app.delete('/api/garments/:id', authenticate, GarmentController.deleteOneGarment) //route to delete a specific garment from the database
}