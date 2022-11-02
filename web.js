import express from 'express'
const router = express.Router()
import studentController from "../controllers/studentControllers.js"


router.post(`/`, studentController.createDoc)
router.get(`/`, studentController.getAllDoc)
router.get(`/:id`, studentController.getSingleDocById)
router.put(`/:id`, studentController.updateDocById)
router.delete(`/:id`, studentController.deleteDocById)

export default router;