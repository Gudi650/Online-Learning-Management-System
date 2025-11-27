import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="col-span-1">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Mail className="text-blue-600 mb-4" size={24} />
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-slate-600">contact@yourname.com</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Phone className="text-blue-600 mb-4" size={24} />
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-slate-600">+1 (123) 456-7890</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <MapPin className="text-blue-600 mb-4" size={24} />
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-slate-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
              {submitMessage && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  {submitMessage}
                </div>}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">
                  Your Message
                </label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none" required></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70">
                {isSubmitting ? <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span> : <Send size={18} className="mr-2" />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}