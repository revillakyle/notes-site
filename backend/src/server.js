import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()
const app = express()


app.use(express.json())
app.use(rateLimiter)
// app.use((req,res,next)=>{
//     console.log(`Request method: ${req.method}, Request URL: ${req.url}`)
//     next()
// })

app.use("/api/notes",notesRoutes)

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started on PORT",process.env.PORT)
    })
})
