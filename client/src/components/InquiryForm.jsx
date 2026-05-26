import { useState } from 'react'
import axios from 'axios'

export default function InquiryForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    category: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/api/inquiries', form)
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 mt-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Submit Inquiry</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 mb-4 rounded"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 mb-4 rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        className="w-full border p-3 mb-4 rounded"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <textarea
        placeholder="Message"
        className="w-full border p-3 mb-4 rounded"
        rows="5"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="bg-blue-700 text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  )
}
