import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="font-heading text-5xl md:text-6xl font-bold text-secondary tracking-tight mb-6"
                data-testid="hero-title"
              >
                Welcome to{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-[#66BB6A] bg-clip-text text-transparent">
                  Dentis3 Care
                </span>
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <Star className="text-primary fill-primary" size={24} />
                <p className="text-2xl md:text-3xl font-heading font-semibold text-primary">
                  Your Smile, Our Goal!
                </p>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-text-light mb-8">
                A healthy smile begins with healthy teeth. At Dentis3Care, you get all
                advanced dental services: Smile Design, Root Canal Treatment, Implants,
                Whitening.
              </p>
              <Link
                to="/contact"
                data-testid="book-appointment-button"
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Right Animation - CSS Based */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="hero-animation"
              className="relative h-[400px] flex items-center justify-center"
            >
              <div className="relative w-64 h-64 animate-float">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-white to-accent rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  <div className="text-8xl animate-bounce-slow">🦷</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl animate-spin-slow shadow-lg">
                  ✨
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Why Choose Dentis3 Care?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Doctors',
                description:
                  'Certified implantologists and specialists with international training.',
                icon: '👨‍⚕️',
              },
              {
                title: 'Advanced Technology',
                description:
                  'State-of-the-art equipment for painless and precise treatments.',
                icon: '⚡',
              },
              {
                title: 'Comprehensive Care',
                description:
                  'From kids to adults, we offer complete dental solutions under one roof.',
                icon: '💚',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-green-50 hover:border-green-100 group hover-lift"
                data-testid={`feature-card-${index}`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
            Ready for Your Perfect Smile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto"
          >
            Schedule your consultation today and experience world-class dental care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              data-testid="cta-button"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
