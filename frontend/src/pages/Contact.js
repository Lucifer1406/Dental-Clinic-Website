import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Implants',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, contactForm);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/appointments`, appointmentForm);
      toast.success('Appointment booked successfully! We\'ll confirm shortly.');
      setAppointmentForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'Implants',
        message: '',
      });
    } catch (error) {
      console.error('Appointment form error:', error);
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    'Implants',
    'Cosmetic dentistry',
    'Kids dentistry',
    'Orthodontics',
    'Painless Root canal Treatment',
  ];

  return (
    <div className="page-transition">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6"
            data-testid="contact-title"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-text-light max-w-3xl mx-auto"
          >
            Get in touch with us for appointments, inquiries, or any questions about our
            services.
          </motion.p>
        </div>
      </section>

      {/* Animation Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="contact-animation"
            className="relative h-[300px] flex items-center justify-center"
          >
            <div className="flex gap-2">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ backgroundColor: ['#8B4513', '#FFFFFF', '#8B4513'] }}
                  transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                  className="w-8 h-16 rounded-lg shadow-lg"
                  style={{ transformOrigin: 'bottom' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Forms */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-secondary mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-secondary mb-2">
                      Visit Us
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      Shop No. 2, Monarch Nagar, S.N.B. Marg, J.B. Nagar, Andheri (E),
                      400069
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-secondary mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919004332292"
                      className="text-primary hover:text-secondary transition-colors text-lg font-semibold"
                      data-testid="contact-phone-link"
                    >
                      +91 9004332292
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-secondary mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/919004332292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 rounded-full px-6 py-3 font-semibold shadow-md hover:shadow-lg"
                      data-testid="whatsapp-button"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8276519857747!2d72.8584!3d19.1098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzM1LjMiTiA3MsKwNTEnMzAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dentis3 Care Location"
                  data-testid="google-maps"
                ></iframe>
              </div>
            </motion.div>

            {/* Forms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      data-testid="contact-name-input"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      data-testid="contact-email-input"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      data-testid="contact-message-input"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit-button"
                    className="w-full bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-3 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Appointment Booking Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                  Book an Appointment
                </h2>
                <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="appointment-name"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="appointment-name"
                        data-testid="appointment-name-input"
                        value={appointmentForm.name}
                        onChange={(e) =>
                          setAppointmentForm({ ...appointmentForm, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="appointment-email"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="appointment-email"
                        data-testid="appointment-email-input"
                        value={appointmentForm.email}
                        onChange={(e) =>
                          setAppointmentForm({
                            ...appointmentForm,
                            email: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-phone"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="appointment-phone"
                      data-testid="appointment-phone-input"
                      value={appointmentForm.phone}
                      onChange={(e) =>
                        setAppointmentForm({ ...appointmentForm, phone: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="appointment-date"
                        data-testid="appointment-date-input"
                        value={appointmentForm.date}
                        onChange={(e) =>
                          setAppointmentForm({ ...appointmentForm, date: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="appointment-time"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="appointment-time"
                        data-testid="appointment-time-input"
                        value={appointmentForm.time}
                        onChange={(e) =>
                          setAppointmentForm({ ...appointmentForm, time: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-service"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="appointment-service"
                      data-testid="appointment-service-select"
                      value={appointmentForm.service}
                      onChange={(e) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          service: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-message"
                      className="block text-sm font-semibold text-secondary mb-2"
                    >
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="appointment-message"
                      data-testid="appointment-message-input"
                      value={appointmentForm.message}
                      onChange={(e) =>
                        setAppointmentForm({
                          ...appointmentForm,
                          message: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Any specific concerns or questions?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="appointment-submit-button"
                    className="w-full bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-3 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Booking...' : 'Book Appointment'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
