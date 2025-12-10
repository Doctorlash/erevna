// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const programs = [
  "Authentic Leadership",
  "Self-Worth & Emotional Intelligence",
  "Effective Communication",
  "Speech Mastery",
  "Active Listening",
  "Emotional Intelligence",
  "Composure & Resilience",
  "Dress, Poise & Posture",
  "Presentation Skills"
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-serif text-gold text-center mb-20"
        >
          The 9 Transformative Modules
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-cream/5 backdrop-blur border border-gold/20 rounded-2xl p-10 text-center hover:bg-cream/10 transition"
            >
              <div className="text-6xl mb-6 text-gold">0{i + 1}</div>
              <h3 className="text-2xl font-serif text-gold mb-4">{title}</h3>
              <p className="text-cream/80">Master this pillar of exceptional leadership</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}