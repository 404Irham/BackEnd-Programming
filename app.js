/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

const express=require("express")
const app=express()
const router=require("./routes/TODO-2")
app.use(express.json())
app.use(router)
app.listen(3000)

