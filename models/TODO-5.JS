// TODO 5: SETUP MODEL
const res = require("express/lib/response")
const db=require("../config/TODO-3")
class Patients{
    // Get All Resource
    static all(){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients"
            db.query(sql,(err,results)=>{
                resolve(results)
            })
        })
    }
    // Create Resource
    static create(data){
        return new Promise((resolve,reject)=>{
            const sql="INSERT INTO patients SET ?"
            db.query(sql,data,(err,results)=>{
                resolve(data)
            })
        })
    }
    // get Detail Resource
    static find(data){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients WHERE id=?"
            db.query(sql,data,(err,results)=>{
                resolve(results)
            })
        })
    }
    // Edit Resource
    static update(id,data){
        new Promise((resolve,reject)=>{
            const sql="UPDATE patients SET ? WHERE id=?"
            db.query(sql,[data,id],(err,results)=>{
                resolve(results)
            })

        })
        return this.find(id)
    }
    // Delete resource
    static delete(id){
        return new Promise((resolve,reject)=>{
            const sql="DELETE FROM patients WHERE id=?"
            db.query(sql,id,(err,results)=>{
                resolve(results)
            })
        })
    }
    // Search Resource
    static search(name){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients WHERE name LIKE ?"
            db.query(sql,"%"+name+"%",(err,result)=>{
                resolve(result)
            })
        })
        
    }
    // Get Positive Resource
    static findByStatus(status){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients WHERE status=?"
            db.query(sql,status,(err,result)=>{
                resolve(result)
            })
        })
    }
    // Get Recovered Resource
    static findByStatus(status){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients WHERE status=?"
            db.query(sql,status,(err,result)=>{
                resolve(result)
            })
        })
    }
    // Get Dead Resource
    static findByStatus(status){
        return new Promise((resolve,reject)=>{
            const sql="SELECT * FROM patients WHERE status=?"
            db.query(sql,status,(err,result)=>{
                resolve(result)
            })
        })
    }


    
}
module.exports=Patients
