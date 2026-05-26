const router = require('express').Router()
const Faq = require('../models/Faq')

router.get('/', async (req, res) => {
  const faqs = await Faq.find()
  res.json(faqs)
})

router.post('/', async (req, res) => {
  const faq = new Faq(req.body)
  await faq.save()
  res.json(faq)
})

module.exports = router
