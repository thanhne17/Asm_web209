import express from "express"
import mongoose from "mongoose"


import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/web209")
.then(() => console.log("connect db thanh cong"))
.catch((error) => console.log(error))

const PORT = 8000

app.listen(PORT, () => {
    console.log(`server running port ${PORT}`)
})