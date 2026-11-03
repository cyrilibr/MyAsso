import express from 'express'

const router = express.Router()

// Middleware pour parser le JSON si ce n'est pas fait globalement dans app.js
router.use(express.json())

// POST /submit_application (SCRUM-10)
router.post('/submit_application', async (req, res) => {
  try {
    const body = req.body || {}
    const { applicantId, associationId, preferenceRank } = body

    if (!applicantId || !associationId) {
      return res.status(400).json({
        error: 'Missing required fields: applicantId and associationId'
      })
    }

    const newApplication = {
      applicantId,
      associationId,
      status: 'SUBMITTED',
      submittedAt: new Date(),
      preferenceRank: preferenceRank || 1,
      statusHistory: [{ status: 'SUBMITTED', changedAt: new Date() }]
    }

    return res.status(201).json(newApplication)
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message })
  }
})

export default router
