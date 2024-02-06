import express from 'express'
import dotenv from 'dotenv'

dotenv.config() // .env 로드

const PORT = process.env.PORT || 4000

const app = express()

app.get('/test', (req, res) => {
    res.send([1, 2, 3])
})

app.listen(PORT, () => {
    console.info(`Backend server is listening on port ${PORT}`)
})
