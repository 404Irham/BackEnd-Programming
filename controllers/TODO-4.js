// TODO 4: SETUP CONTROLLER
const Patients=require("../models/TODO-5")
class PatientController{
    // ini Get all Resource
    async index(req,res){
        const patient=await Patients.all()
        if(patient.length){
            const data={
                message:"Get All Resource",
                data:patient
            }
            return res.status(200).json(data)
    // ini jika tidak ada pasiennya/kosong
        }else {
            const data={
                message:"Data is empty"
            }
            return res.status(200).json(data)
        }
    }
    // ini Create Resource
    async store(req,res){
        const patient=await Patients.create(req.body)
        const data={
            message:"Resource is added successfully",
            data:patient
        }
        return res.status(201).json(data)
    }
    // ini Get Detail Resource
    async show(req,res){
        const{id}=req.params
        const patient=await Patients.find(id)
        if(patient.length){
            const data={
                message:"Get Detail Resource",
                data:patient
            }
            return res.status(200).json(data)
    // ini jika tidak ada id pasiennya
        }else {
            const data={
                message:"Resource not found"
            }
            return res.status(404).json(data)
        }
    }
    // ini Edit Resource
    async update(req,res){
        const{id}=req.params
        const patient = await Patients.find(id);
        if(patient.length){
            const newpatient=await Patients.update(id,req.body)
            const data={
                message:"Resource is update successfully",
                data:newpatient
            }
            return res.status(200).json(data)
    // ini update body tidak berhasil jika id pasiennya tidak ada/kosong 
        }else {
            const data={
                message:"Resource not found"
            }
            return res.status(404).json(data)
        }
 
    }
    // ini Delete Resource
    async destroy(req,res){
        const{id}=req.params
        const patient = await Patients.find(id);
       if(patient.length){
        const patient=await Patients.delete(id)
        const data={
            message:"Resource is delete successfully"
        }
        return res.status(200).json(data)
    // ini destroy jika tidak berhasil/id nya kosong
       }else {
        const data={
            message:"Resource not found"
        }
        return res.status(404).json(data)
       }
    }
    // ini Search Resource
    async search(req,res){
        const{name}=req.params
        const patient=await Patients.search(name)
        if(patient.length){
            const data={
                message:"Get searched resource",
                data:patient
            }
            return res.status(200).json(data)
    // jika nama tidak ada yang mirip ato tidak ada, maka tidak berhasil
        }else {
            const data={
                message:"Resource not found"
            }
            return res.status(404).json(data)
        }
    }
    // ini Get Positive Resource menanmpilkan resource yang positip
    async positive(req,res){
        const patient=await Patients.findByStatus("positive")
        const data={
            message:"Get Positive resource",
            data:patient
        }
        return res.status(200).json(data)
    }
    // ini Get Recovered Resource menampilkan resource yang sembuh
    async recovered(req,res){
        const patient=await Patients.findByStatus("recovered")
        const data={
            message:"Get Recovered resource",
            data:patient
        }
        return res.status(200).json(data)
    }
    // ini Get Dead Resource menampilkan resource yang mati
    async dead(req,res){
        const patient=await Patients.findByStatus("dead")
        const data={
            message:"Get Dead resource",
            data:patient
        }
        return res.status(200).json(data)
    }
   
}
const object=new PatientController
module.exports=object