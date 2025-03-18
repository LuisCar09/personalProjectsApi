const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./src/config/db')
dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000
const repositoriesRoute = require('./src/routes/repositories')
app.use(express.json())
app.use(cors())



app.use('/repositories',repositoriesRoute)

app.use((req,res) => {
    res.status(404).json({message:'Page not found'})
})




app.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`);
    
})
dbConnection()