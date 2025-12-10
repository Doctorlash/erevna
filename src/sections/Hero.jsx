// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <img src="public/logo.jpg" alt="Manual Cover" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/90"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative z-10 px-6 max-w-6xl"
      >
        <motion.img
          src="public/crest.png"
          alt="Erevna Crest"
          className="w-48 mx-auto mb-5 animate-float"
        />

        <motion.h1 className="text-6xl md:text-8xl font-serif text-gold font-bold leading-tight animate-glow">
          EREVNA
        </motion.h1>
        <motion.p className="text-2xl md:text-4xl text-cream font-serif mt-4">
          LEADERSHIP ACADEMY
        </motion.p>

        <motion.div className="mt-12 text-cream/90 text-xl md:text-2xl font-light">
          <p>PERSONAL DEVELOPMENT</p>
          <p className="text-4xl md:text-6xl font-serif text-gold my-4">TRAINING MANUAL</p>
          <p>FOR YOUNG LEADERS</p>
        </motion.div>

        <motion.p className="mt-12 text-cream text-lg max-w-3xl mx-auto font-light leading-relaxed">
          Empowering Teenagers with Character, Confidence and Communication Skills
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-16 px-12 py-6 bg-gold text-navy text-xl font-bold rounded-full hover:bg-gold-light shadow-2xl"
        >
          Begin Your Transformation
        </motion.a>
      </motion.div>
    </section>
  );
}