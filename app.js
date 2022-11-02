import express from 'express'
import connectdb from "./db/connectdb.js";
import web from './routes/web.js'
const app = express()
const port  = process.env.PORT || `5800`
const DATABASE_URL = process.env.DATABASE_URL || `mongodb://localhost:27017`;

//Connection with DB
connectdb(DATABASE_URL)

//JSON
app.use(express.json())

//Load Routes
app.use(`/student`, web)

app.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`)
})