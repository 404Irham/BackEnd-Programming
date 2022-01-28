// TODO 2: SETUP ROUTING (ROUTER)
const express=require("express")
const router=express.Router()
const PatientController=require("../controllers/TODO-4")
router.get("/patients",PatientController.index) // ini buat get All Resource
router.post("/patients",PatientController.store) // Ini buat Create Resource
router.get("/patients/:id",PatientController.show) // ini buat Get Detail Resource
router.put("/patients/:id",PatientController.update) // ini buat Edit Resource
router.delete("/patients/:id",PatientController.destroy) // ini buat Delete Resource
router.get("/patients/search/:name",PatientController.search) // ini buat Search Resource
router.get("/patients/status/positive",PatientController.positive) //ini buat Get Positive Resource 
router.get("/patients/status/recovered",PatientController.recovered) //ini buat Get Recovered Resource
router.get("/patients/status/dead",PatientController.dead) //ini buat Get Dead Resource
module.exports=router 