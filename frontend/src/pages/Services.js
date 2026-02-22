import { motion } from 'framer-motion';
import {
  Smile,
  Activity,
  Baby,
  Scissors,
  HeartPulse,
} from 'lucide-react';

const Services = () => {
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

      {/* 3D Animation Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="services-3d-animation"
          >
            <Scene3D>
              <ImplantProcedure />
            </Scene3D>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-accent">
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
