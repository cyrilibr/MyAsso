import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('SCRUM-13: Edit Association Profile', () => {
  const associationId = '12345'

  it('devrait mettre à jour avec succès la description, le recrutement et l\'URL externe', async () => {
    const payload = {
      description: 'Voici la nouvelle description de notre association.',
      recruitmentInfo: 'Les entretiens auront lieu la semaine prochaine.',
      externalFormUrl: 'https://forms.gle/exemple-formulaire'
    }

    const res = await request(app)
      .put(`/associations/${associationId}`)
      .send(payload)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.association.description).toBe(payload.description)
    expect(res.body.association.recruitmentInfo).toBe(payload.recruitmentInfo)
    expect(res.body.association.externalFormUrl).toBe(payload.externalFormUrl)
  })

  it('devrait rejeter la requête si le format de l\'URL du formulaire externe est invalide', async () => {
    const payload = {
      externalFormUrl: 'ce-n-est-pas-une-url'
    }

    const res = await request(app)
      .put(`/associations/${associationId}`)
      .send(payload)

    expect(res.statusCode).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})