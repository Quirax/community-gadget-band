import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { spawn } from 'child_process'
import crypto from 'crypto'

dotenv.config() // .env 로드

const PORT = process.env.PORT || 5000
const secret = process.env.SECRET || ''

console.info(secret)

const app = express()

app.use(bodyParser.json())

// ref: https://github.com/snacky101/webhook_autopull/blob/master/index.js
app.post('/push', (req, res) => {
    console.log('[LOG] request received')
    res.status(400).set('Content-Type', 'application/json')

    let jsonString = JSON.stringify(req.body)
    let hash = 'sha1=' + crypto.createHmac('sha1', secret).update(jsonString).digest('hex')

    if (hash != req.get('x-hub-signature')) {
        console.log('[ERROR] invalid key')
        let data = JSON.stringify({ error: 'invalid key', key: hash })
        return res.end(data)
    }

    console.log('[LOG] running hook.sh')

    let deploySh = spawn('sh', ['hook.sh'])
    deploySh.stdout.on('data', function (data) {
        let buff = Buffer.from(data)
        console.log(buff.toString('utf-8'))
    })
    deploySh.stderr.on('data', function (data) {
        let buff = Buffer.from(data)
        console.error(buff.toString('utf-8'))
    })

    let data = JSON.stringify({ success: true })
    console.log('[LOG] success!!')
    return res.status(200).end(data)
})

app.get('/test', (req, res) => {
    res.send([1, 2, 3])
})

app.listen(PORT, () => {
    console.info(`Backend server is listening on port ${PORT}`)
})
