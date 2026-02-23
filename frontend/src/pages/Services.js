import { motion } from 'framer-motion';
import { Smile, Activity, Baby, Scissors, HeartPulse, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: 'Dental Implants',
      description:
        'Advanced tooth replacement solutions using state-of-the-art implant technology. Restore your smile with permanent, natural-looking teeth that function just like your own.',
      icon: Activity,
    },
    {
      title: 'Cosmetic Dentistry',
      description:
        'Transform your smile with our comprehensive cosmetic treatments including teeth whitening, veneers, smile design, and aesthetic bonding for a confident, radiant smile.',
      icon: Smile,
    },
    {
      title: 'Kids Dentistry',
      description:
        'Specialized pediatric dental care in a friendly, comfortable environment. We make dental visits fun and stress-free for children, establishing healthy habits early.',
      icon: Baby,
    },
    {
      title: 'Orthodontics',
      description:
        'Straighten your teeth and correct bite issues with braces, aligners, and other orthodontic treatments. Achieve the perfect alignment for a beautiful, functional smile.',
      icon: Scissors,
    },
    {
      title: 'Painless Root Canal Treatment',
      description:
        'Save infected teeth with our advanced, painless root canal procedures. Using modern techniques and anesthesia, we ensure a comfortable experience with excellent results.',
      icon: HeartPulse,
    },
  ];

  const faqs = [
    {
      question: 'How long does a dental implant procedure take?',
      answer:
        'The complete implant process typically takes 3-6 months, including healing time. The initial surgery takes 1-2 hours per implant. We can provide temporary teeth during the healing period.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer:
        'Yes, professional teeth whitening is completely safe when performed by our trained dentists. We use FDA-approved materials and customize the treatment to your tooth sensitivity level.',
    },
    {
      question: 'At what age should my child first visit the dentist?',
      answer:
        'We recommend bringing your child for their first dental visit by age 1, or within 6 months after their first tooth appears. Early visits help establish good habits and prevent future problems.',
    },
    {
      question: 'Do you offer emergency dental services?',
      answer:
        'Yes! We provide same-day emergency dental care 7 days a week for urgent issues like severe pain, broken teeth, or dental trauma. Call us immediately if you have a dental emergency.',
    },
    {
      question: 'What payment options do you accept?',
      answer:
        'We accept all major insurance plans, credit/debit cards, and offer flexible payment plans. Our team can help you understand your coverage and payment options during your consultation.',
    },
    {
      question: 'How often should I get a dental checkup?',
      answer:
        'We recommend dental checkups and cleanings every 6 months for most patients. However, some patients may need more frequent visits based on their oral health condition.',
    },
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
            data-testid="services-title"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-text-light max-w-3xl mx-auto"
          >
            Comprehensive dental care tailored to your needs. From preventive care to
            advanced procedures, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Animation Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="services-animation"
            className="relative h-[300px] flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 bg-gradient-to-br from-white to-accent rounded-2xl shadow-2xl flex items-center justify-center text-6xl relative z-10"
              >
                🦷
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-primary rounded-full blur-lg"
              />
              {/* Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${Math.sin((i / 6) * Math.PI * 2) * 60 + 50}%`,
                    left: `${Math.cos((i / 6) * Math.PI * 2) * 60 + 50}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-green-50 hover:border-green-100 group hover-lift"
                  data-testid={`service-card-${index}`}
                >
                  <div className="bg-accent rounded-xl p-4 w-fit mb-6 group-hover:bg-primary transition-colors duration-300">
                    <IconComponent
                      className="text-primary group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-accent">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-heading font-semibold text-lg text-secondary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-text-light leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6"
          >
            Ready to Experience Quality Dental Care?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto"
          >
            Book your appointment today and let our expert team take care of your smile.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/contact"
              data-testid="services-cta-button"
              className="inline-block bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
