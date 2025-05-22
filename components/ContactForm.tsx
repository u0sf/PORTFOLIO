"use client"

import { useState } from "react"
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(null)
    setError(null)
    if (!form.name || !form.phone || !form.message) {
      setError("Please fill in all required fields.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess("Your message has been sent successfully! I will contact you soon.")
        setForm({ name: "", phone: "", email: "", message: "" })
      } else {
        setError("An error occurred while sending. Please try again.")
      }
    } catch {
      setError("An error occurred while sending. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="label">
            Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="input"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="message" className="label">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="input resize-none"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3 text-lg"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
          {loading ? "Sending..." : "Send Message"}
        </button>

        {error && (
          <div className="p-4 rounded-lg bg-error/10 border border-error/20 text-error text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-success text-sm">
            {success}
          </div>
        )}
      </div>
    </form>
  )
} 