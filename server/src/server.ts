import express from 'express'

const app = express()

app.get('/ads', (req , res) =>{
    return res.json([
        {id: 1, name: 'Tiago'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Pedro'},
    ])
})

console.log("stardet in localhost:3333")
app.listen(3333)