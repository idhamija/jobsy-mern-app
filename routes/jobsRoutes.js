import express from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from '../controllers/jobsController.js'
import testUser from '../middleware/testUser.js'

const router = express.Router()

router.route('/stats').get(showStats)

router.get('/', getAllJobs)
router.post('/', testUser, createJob)

router.patch('/:id', testUser, updateJob)
router.delete('/:id', testUser, deleteJob)

export default router
