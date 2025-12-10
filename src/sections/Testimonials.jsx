// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah O., 17",
    role: "Student Leader",
    text: "This program changed how I see myself. I now speak in public with confidence and lead my school prefect team without fear."
  },
  {
    name: "David Chukwu",
    role: "Parent",
    text: "My son came home a different person — calmer, more articulate, and actually listens now. Worth every kobo."
  },
  {
    name: "Mrs. Adebayo",
    role: "School Principal",
    text: "We brought Erevna to our school. The transformation in our students' discipline and communication is visible to everyone."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-navy text-center mb-20"
        >
          Voices of Transformation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border border-gold/10 hover:border-gold/50 transition"
            >
              <div className="text-6xl text-gold/30 font-serif mb-6">“</div>
              <p className="text-navy/80 text-lg leading-relaxed mb-8">{t.text}</p>
              <div className="text-right">
                <div className="font-serif text-xl text-navy font-bold">{t.name}</div>
                <div className="text-gold text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}