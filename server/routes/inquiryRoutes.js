const router = require('express').Router()
const Inquiry = require('../models/Inquiry')

router.get('/', async (req, res) => {
  const inquiries = await Inquiry.find()
  res.json(inquiries)
})

router.post('/', async (req, res) => {
  const inquiry = new Inquiry(req.body)
  await inquiry.save()
  res.json(inquiry)
})

module.exports = router
