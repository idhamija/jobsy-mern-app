import express from 'express'
import {
  getCurrentUser,
  login,
  logout,
  register,
  updateUser,
} from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
import { apiLimiter } from '../middleware/rate-limiter.js'
import testUser from '../middleware/testUser.js'

const router = express.Router()

// auth routes
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.get('/logout', logout)

// user routes
router.patch('/updateUser', authenticateUser, testUser, updateUser)
router.get('/getCurrentUser', authenticateUser, getCurrentUser)

export default router
