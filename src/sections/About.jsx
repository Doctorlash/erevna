// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif text-navy mb-12"
        >
          Welcome to Erevna
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-navy/80 leading-relaxed max-w-4xl mx-auto"
        >
          At <span className="text-gold font-serif text-2xl">EREVNA LEADERSHIP ACADEMY</span>, we cultivate authentic, resilient, and impactful leaders who inspire positive change. 
          Our 9 transformative modules — from Authentic Leadership to Presentation Mastery — are designed specifically for young leaders ready to rise.
        </motion.p>
      </div>
    </section>
  );
}