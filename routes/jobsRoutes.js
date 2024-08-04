import express from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from '../controllers/jobsController.js'

const router = express.Router()

router.route('/stats').get(showStats)

router.get('/', getAllJobs)
router.post('/', createJob)

router.patch('/:id', updateJob)
router.delete('/:id', deleteJob)

export default router
