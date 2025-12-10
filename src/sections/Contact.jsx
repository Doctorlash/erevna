import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  // Send to YOU
  emailjs.sendForm('service_cxftn9o', 'template_m1ik2qk', form.current, 'Gp_dGb_juKQGFzcHm')
    .then(() => {
      // Auto-reply to visitor
      emailjs.send('service_cxftn9o', 'template_4xevpm3', {
        name: form.current.name.value,
        email: form.current.email.value,
      }, 'Gp_dGb_juKQGFzcHm')
        .then(() => {
          alert('Thank you! We have received your message and sent you a welcome email.');
          form.current.reset();
        });
    })
    .catch(() => alert('Error. Please use WhatsApp button below.'));
};

  return (
    <section id="contact" className="py-32 bg-navy text-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-serif text-gold mb-12"
        >
          Begin Your Journey Today
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <input type="text" name="name" placeholder="Full Name" required
            className="w-full px-8 py-5 rounded-full text-navy text-lg" />
          <input type="email" name="email" placeholder="Email Address" required
            className="w-full px-8 py-5 rounded-full text-navy text-lg" />
          <input type="tel" name="phone" placeholder="Phone Number (WhatsApp)" required
            className="w-full px-8 py-5 rounded-full text-navy text-lg" />
          <textarea name="message" rows="5" placeholder="Tell us about your leadership goals..."
            className="w-full px-8 py-6 rounded-3xl text-navy text-lg"></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-navy px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:bg-gold-light"
          >
            Enroll Now — Start Leading
          </motion.button>
        </motion.form>

        <p className="mt-12 text-xl">
          Or reach us directly on WhatsApp: <a href="https://wa.me/2349057844184" className="text-gold underline">Click Here</a>
        </p>
      </div>
    </section>
  );
}