import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

describe('POST /submit_application (SCRUM-10)', () => {
  it('should create a new application with status SUBMITTED', async () => {
    const res = await request(app)
      .post('/submit_application')
      .send({
        applicantId: 'user123',
        associationId: 'asso456',
        preferenceRank: 1
      })

    expect(res.status).toBe(201)
    expect(res.body.status).toBe('SUBMITTED')
    expect(res.body.applicantId).toBe('user123')
  })

  it('should return 400 when missing required fields', async () => {
    const res = await request(app)
      .post('/submit_application')
      .send({})

    expect(res.status).toBe(400)
  })
})
