const PirateController  = require("../controllers/pirates");

module.exports = (app) => {
    app.get("/api/pirates/index", PirateController.index);
    app.post("/api/pirates/create", PirateController.createPirate);
    app.get("/api/pirates", PirateController.allPirates);
    app.delete("/api/pirates/:id",PirateController.deletePirate);
    app.put("/api/pirates/:id",PirateController.editById)
    app.get("/api/pirates/:id",PirateController.findById)
    
}