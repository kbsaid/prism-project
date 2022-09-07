import express from 'express';
import router from './routes/routes'
const PORT = 3000
const app = express()

router(app)

app.listen(PORT)
console.log(`LISTENING TOO ${PORT} 🚀`)