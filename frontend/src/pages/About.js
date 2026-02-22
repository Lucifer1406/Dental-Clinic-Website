import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const About = () => {
  const doctors = [
    {
      name: 'Dr. Jesal Soneta',
      qualifications: [
        'B.D.S. (M.U.H.S.)',
        'A.C.T Esthetics & Restorative Dentistry (U.C.L.A. USA)',
        'Certified Implantologist (Manipal University)',
      ],
    },
    {
      name: 'Dr. Niral Dedhia',
      qualifications: ['B.D.S. (M.U.H.S.)', 'P.G.D.C.R.'],
    },
  ];

  return (
    <div className="page-transition">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-secondary text-center mb-6"
            data-testid="about-title"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-text-light max-w-3xl mx-auto text-center"
          >
            A healthy smile begins with healthy teeth. At Dentis3Care, you get all
            advanced dental services: Smile Design, Root Canal Treatment, Implants,
            Whitening.
          </motion.p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Meet Our Experts
          </motion.h2>

          {/* Doctors Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_9afac99a-4669-4907-a27b-d6d8df89e2a2/artifacts/3ioiyxv5_Niral%20%26%20Jesal%20Combine%20Images%20Transparent.png"
              alt="Dr. Jesal Soneta and Dr. Niral Dedhia"
              className="max-w-full h-auto rounded-2xl shadow-lg"
              data-testid="doctors-photo"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-8"
                data-testid={`doctor-card-${index}`}
              >
                <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                  {doctor.name}
                </h3>
                <ul className="space-y-2">
                  {doctor.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-text-light">
                      <span className="text-primary mt-1">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-testid="about-3d-animation"
          >
            <Scene3D>
              <TeethTransformation />
            </Scene3D>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-accent">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Visit Us
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary mb-2">
                    Our Location
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
                    Contact Number
                  </h3>
                  <a
                    href="tel:+919004332292"
                    className="text-primary hover:text-secondary transition-colors text-lg font-semibold"
                    data-testid="phone-link"
                  >
                    +91 9004332292
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
          >
            Our Clinic
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                url: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Clinic Interior',
              },
              {
                url: 'https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Happy Patient',
              },
              {
                url: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Doctor Patient Interaction',
              },
              {
                url: 'https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Dental Tools',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover-lift"
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
