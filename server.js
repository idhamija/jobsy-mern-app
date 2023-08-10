import dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import cookieParser from 'cookie-parser'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from 'helmet'
import xss from 'xss-clean'

// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import authenticateUser from './middleware/auth.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'

const app = express()
let listener = null
dotenv.config()
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(xss())
app.use(helmet())
app.use(mongoSanitize())

app.use(express.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  app.use(express.static(path.resolve(__dirname, './client/build')))

  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/jobs', authenticateUser, jobsRouter)

  app.get('/health', (_, res) => {
    if (listener === null) {
      res.status(500).json({ success: false })
    } else {
      res.status(200).json({ success: true })
    }
  })

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  })
} else {
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/jobs', authenticateUser, jobsRouter)
}

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  const port = process.env.PORT || 5000

  try {
    await connectDB(process.env.MONGO_URL)
    return app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
    return null
  }
}
listener = start()
