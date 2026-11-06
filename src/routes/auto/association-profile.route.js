import express from 'express'

const router = express.Router()

// Middleware pour parser le JSON si nécessaire
router.use(express.json())

// PUT /associations/:id (SCRUM-13: Edit association profile)
router.put('/associations/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description, recruitmentInfo, externalFormUrl } = req.body || {}

    // Validation optionnelle de l'URL du formulaire externe si elle est fournie
    if (externalFormUrl && externalFormUrl.trim() !== '') {
      // Exige un schéma (http/https) et un nom de domaine valide avec extension
      const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i
      
      if (!urlPattern.test(externalFormUrl.trim())) {
        return res.status(400).json({
          error: 'Format du lien de formulaire externe invalide.'
        })
      }
    }

    // Simulation de la mise à jour
    const updatedAssociation = {
      id,
      description: description !== undefined ? description : '',
      recruitmentInfo: recruitmentInfo !== undefined ? recruitmentInfo : '',
      externalFormUrl: externalFormUrl !== undefined ? externalFormUrl : null,
      updatedAt: new Date()
    }

    return res.status(200).json({
      message: 'Profil de l\'association mis à jour avec succès.',
      association: updatedAssociation
    })
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message })
  }
})

export default router