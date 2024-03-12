const express = require('express')

const app = express()

app.get("/", (req ,res) => {
    console.log("Hello world")
    return;
})

app.get("/profile" , (req,res) => {
    const id = req.id;
    //find the details regarding of the particular id
    return

})

app.get("/meetings",  (req,res) => {
    const id = req.id;
    //fetch data for the same id
    return
})

app.post("/register" , (req,res) => {
    const username  = req.username
    const password = req.password
    //check with the jwt cache and then validate the data
    return
})


app.post("/login" , (req,res) => {
    const username  = req.username
    const password = req.password
    //check with the jwt cache and then validate the data
    return
})

app.get("/jobs" , (req,res) => {
    const id = req.id
    //fetch all the jobs according to his prefernce
    return
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})