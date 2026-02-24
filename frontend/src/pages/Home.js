import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import ToothScene from '../components/3d/ToothScene';
import ExplodedTooth from '../components/3d/ExplodedTooth';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      instagramLink: 'https://www.instagram.com/reel/',
    },
    {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      instagramLink: 'https://www.instagram.com/reel/',
    },
    {
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      instagramLink: 'https://www.instagram.com/reel/',
    },
  ];

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

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-text-light">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-semibold">ADA Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-semibold">15,000+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-semibold">Same-Day Emergency Care</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-testid="book-appointment-button"
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#43A047] transition-all duration-300 rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  data-testid="services-button"
                  className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary hover:bg-accent transition-all duration-300 rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Our Services
                </Link>
              </div>
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

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 15000, suffix: '+', label: 'Happy Patients' },
              { number: 98, suffix: '%', label: 'Satisfaction Rate' },
              { number: 22, suffix: '+', label: 'Years Experience' },
              { number: 12, suffix: '', label: 'Expert Dentists' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-text-light font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-accent">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Why Choose Dentis3 Care?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Expert Doctors',
                description: 'Certified implantologists and specialists with international training.',
                icon: '👨‍⚕️',
                delay: 0,
              },
              {
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment for painless and precise treatments.',
                icon: '⚡',
                delay: 0.1,
              },
              {
                title: 'Comprehensive Care',
                description: 'From kids to adults, we offer complete dental solutions under one roof.',
                icon: '💚',
                delay: 0.2,
              },
              {
                title: 'Affordable Pricing',
                description: 'Quality dental care that fits your budget with flexible payment options.',
                icon: '💰',
                delay: 0.3,
              },
              {
                title: 'Same-Day Service',
                description: 'Emergency dental care available 7 days a week for urgent needs.',
                icon: '⏰',
                delay: 0.4,
              },
              {
                title: 'Comfort First',
                description: 'Modern, spa-like facilities designed for your relaxation and comfort.',
                icon: '✨',
                delay: 0.5,
              },
              {
                title: 'Family Friendly',
                description: 'Welcoming environment for patients of all ages with kid-friendly spaces.',
                icon: '👨‍👩‍👧‍👦',
                delay: 0.6,
              },
              {
                title: 'Digital Records',
                description: 'Secure digital health records accessible anytime, anywhere.',
                icon: '📱',
                delay: 0.7,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-green-50 hover:border-primary group"
                data-testid={`feature-card-${index}`}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-light mb-12 max-w-2xl mx-auto"
          >
            Real stories from our happy patients. Click to watch their testimonials on Instagram!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.a
                key={index}
                href={testimonial.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                data-testid={`testimonial-${index}`}
              >
                <div className="relative h-80">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-6xl">▶️</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading text-xl font-bold mb-2">{testimonial.name}</h3>
                    <p className="text-sm">Watch my experience on Instagram</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
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
