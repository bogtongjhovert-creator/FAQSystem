import { useEffect, useState } from 'react'
import axios from 'axios'
import InquiryForm from './components/InquiryForm'

export default function App() {
  const [faqs, setFaqs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchFaqs()
  }, [])

  const fetchFaqs = async () => {
    const res = await axios.get('http://localhost:5000/api/faqs')
    setFaqs(res.data)
  }

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Educational FAQ System
        </h1>

        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-4 border rounded-xl mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq._id} className="bg-white p-5 rounded-xl shadow">
              <h2 className="font-bold">{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <InquiryForm />
      </div>
    </div>
  )
}
