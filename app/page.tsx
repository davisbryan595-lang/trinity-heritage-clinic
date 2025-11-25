'use client'

import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamCard from '@/components/TeamCard'
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon to learn more about how we can help your business.')
    setFormData({ name: '', phone: '', email: '', message: '', service: '' })
  }

  const teamMembers = [
    {
      icon: '👨‍⚕️',
      title: 'Board Certified Physician',
      description:
        'Occupational Medicine & Internal Medicine specialist experienced in comprehensive workforce health management.',
    },
    {
      icon: '👩‍⚕️',
      title: 'Certified Nurse Practitioner',
      description: 'Advanced practice nurse providing expert patient care and health assessment services.',
    },
    {
      icon: '💉',
      title: 'Licensed Nurse',
      description: 'Registered nurse providing clinical support and patient education.',
    },
    {
      icon: '🧠',
      title: 'Certified Psychologist',
      description: 'Mental health professional supporting employee wellness and occupational health.',
    },
    {
      icon: '🏥',
      title: 'Certified Medical Assistants',
      description: 'Skilled assistants supporting clinical operations and patient care.',
    },
    {
      icon: '🔧',
      title: 'Trained Technicians',
      description: 'Technical specialists operating diagnostic equipment and supporting health services.',
    },
  ]

  const services = [
    {
      icon: '🔍',
      title: 'Occupational Medicine',
      items: [
        'Pre-Employment/Placement Exams',
        'Annual Physical/Surveillance Exams',
        'Return to Work Exams',
        'Fitness for Duty Exams',
        'DOT & Respirator Exams',
        'Executive Physical Exams',
      ],
    },
    {
      icon: '🩺',
      title: 'Diagnostic Testing',
      items: [
        'Spirometry',
        'Audiometry',
        'Vision Screening',
        'EKG',
        'Blood Labs',
        'Urinalysis & Drug Screening',
      ],
    },
    {
      icon: '💼',
      title: 'Business Solutions',
      items: [
        'Work Site Visits',
        'Health & Safety Consultation',
        'On-Site Health Fairs',
        'Wellness Programs',
        'Travel Medicine',
        'MRO Services',
      ],
    },
  ]

  return (
    <>
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 text-center min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#f0f4f8' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="diamond-glow"
            >
              <path d="M20 40L40 20L60 40L40 60Z" fill="#006d5b" opacity="0.9" />
              <path d="M40 40L50 30L60 40L50 50Z" fill="#00a680" opacity="0.7" />
              <path d="M20 40L30 30L40 40L30 50Z" fill="#00a680" opacity="0.7" />
              <path d="M40 40L45 35L50 40L45 45Z" fill="#6b4c9a" opacity="0.95" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#006d5b' }}>
            Occupational Medicine Services
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#6b4c9a' }}>
            Working to Keep Your Workforce Well
          </h2>
          <p className="text-lg md:text-xl mb-2 text-gray-600">
            Always friendly. Always knowledgeable.
          </p>
          <p className="text-lg mb-8 text-gray-600">
            Conveniently located in Mansfield, Texas – Serving businesses with certified care
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#services"
              className="btn-primary px-8 py-3 text-lg"
              style={{ backgroundColor: '#006d5b' }}
            >
              Learn How We Can Help Your Business
            </a>
            <a
              href="tel:8174537522"
              className="btn-secondary px-8 py-3 text-lg"
              style={{ backgroundColor: '#6b4c9a' }}
            >
              Call (817) 453-7522
            </a>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">TRUSTED BY BUSINESSES ACROSS THE DFW METROPLEX</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#006d5b' }}>
                  100+
                </div>
                <p className="text-sm text-gray-600">Businesses Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#006d5b' }}>
                  1000+
                </div>
                <p className="text-sm text-gray-600">Employees Cared For</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#006d5b' }}>
                  20+
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006d5b' }}>
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our staff is comprised of experienced, well-trained health and safety professionals who are certified in their specialties and licensed to practice without restrictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <TeamCard
                key={idx}
                icon={member.icon}
                title={member.title}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-20 px-4"
        style={{ backgroundColor: '#f0f4f8' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006d5b' }}>
              Conveniently Located
            </h2>
            <p className="text-lg text-gray-600">
              Easy access from Heritage Parkway and S. Wisteria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-8 h-96 flex items-center justify-center border-4" style={{ borderColor: '#006d5b' }}>
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <p className="font-bold text-lg" style={{ color: '#006d5b' }}>
                  1475 Heritage Pkwy Ste 225
                </p>
                <p className="text-sm text-gray-600 mt-2">Mansfield, TX 76063</p>
                <p className="text-xs text-gray-500 mt-4">
                  Located at intersection of Heritage Parkway and S. Wisteria
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#006d5b' }}>
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Address</p>
                    <p className="text-lg font-semibold" style={{ color: '#006d5b' }}>
                      1475 Heritage Pkwy Ste 225<br />
                      Mansfield, TX 76063
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Phone</p>
                    <a
                      href="tel:8174537522"
                      className="text-lg font-semibold hover:opacity-70"
                      style={{ color: '#006d5b' }}
                    >
                      (817) 453-7522
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Fax</p>
                    <a
                      href="tel:1-866-665-6659"
                      className="text-lg font-semibold hover:opacity-70"
                      style={{ color: '#006d5b' }}
                    >
                      1-(866) 665-6659
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#006d5b' }}>
                  Hours of Operation
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 8:30am - 5:30pm</p>
                  <p className="text-sm text-gray-500">(Closed 12pm - 1pm for lunch)</p>
                  <p><strong>Saturday & Sunday:</strong> Closed</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 rounded-lg p-6" style={{ borderColor: '#6b4c9a' }}>
                <h4 className="font-bold mb-2" style={{ color: '#6b4c9a' }}>
                  After Hours & Weekend
                </h4>
                <p className="text-sm text-gray-700">
                  Call <strong>(817) 966-3989</strong> for urgent medical matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006d5b' }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive occupational health services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-lg p-8 text-center text-white" style={{ backgroundColor: '#006d5b' }}>
            <h3 className="text-2xl font-bold mb-4">Ready to Help Your Business?</h3>
            <p className="text-lg mb-6">
              To learn more about how we can help your business, call us today:
            </p>
            <a
              href="tel:8174537522"
              className="inline-block btn-secondary text-xl px-8 py-3"
              style={{ backgroundColor: '#6b4c9a' }}
            >
              (817) 453-7522
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4"
        style={{ backgroundColor: '#f0f4f8' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006d5b' }}>
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Send us a message and we'll respond promptly
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#006d5b' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#d4dcd7', '--tw-ring-color': '#006d5b' } as any}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#006d5b' }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#d4dcd7' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#006d5b' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#d4dcd7' }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#006d5b' }}>
                Service of Interest
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#d4dcd7' }}
              >
                <option value="">Select a service</option>
                <option value="occupational">Occupational Medicine</option>
                <option value="diagnostic">Diagnostic Testing</option>
                <option value="business">Business Solutions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#006d5b' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#d4dcd7' }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg font-semibold"
              style={{ backgroundColor: '#006d5b' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
