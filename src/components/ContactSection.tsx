import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] mb-4">Contact Us</h2>
          <p className="text-lg text-[#333333]/80">
            Reach out for inquiries, quotes, or details about our scaffolding and construction materials.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-[#1E3A4C] mb-6">Get in Touch</h3>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1E3A4C] text-white rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#333333]">Phone</h4>
                <a href="tel:9703207868" className="text-[#1E3A4C] hover:text-sky-500 font-semibold block">
                  9703207868
                </a>
                <a href="tel:9966932004" className="text-[#1E3A4C] hover:text-sky-500 font-semibold block">
                  9966932004
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1E3A4C] text-white rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#333333]">WhatsApp</h4>
                <a
                  href="https://wa.me/919703207868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A4C] hover:text-sky-500 font-semibold"
                >
                  Chat with Shaik Abdul Hameed
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1E3A4C] text-white rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#333333]">Address</h4>
                <p className="text-[#333333]/80">
                  SC Complex, Shop No.3, Bholakpur, Musheerabad<br />
                  Hyderabad, Telangana - 500020, India
                </p>
                <a
                  href="https://www.google.com/maps?q=17.417673,78.497447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A4C] hover:text-sky-500 font-semibold inline-flex items-center mt-2"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1E3A4C] text-white rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#333333]">Business Hours</h4>
                <p className="text-[#333333]/80">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>

            {/* GST Info */}
            <div className="pt-4 text-[#333333]/80 text-sm">
              <p><strong>Owner:</strong> Shaik Abdul Hameed</p>
              <p><strong>GST No:</strong> 36IMYPS8615B1ZA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-6">Send Us an Inquiry</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold">
                  ✅ Thank you! We'll contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name *', id: 'fullName', type: 'text', required: true },
                  { label: 'Company Name', id: 'companyName', type: 'text' },
                  { label: 'Email Address *', id: 'email', type: 'email', required: true },
                  { label: 'Phone Number *', id: 'phone', type: 'tel', required: true },
                  { label: 'Subject *', id: 'subject', type: 'text', required: true },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-semibold text-[#333333] mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A4C] outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A4C] outline-none resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-[#1E3A4C] hover:bg-[#142836] text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {submitStatus === 'submitting' ? 'Submitting...' : <>
                    Submit Inquiry <Send className="w-5 h-5" />
                  </>}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.8773420620305!2d78.49744797516561!3d17.41767308347466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzAzLjYiTiA3OMKwMzAnMDAuMSJF!5e0!3m2!1sen!2sin!4v1762075871662!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
