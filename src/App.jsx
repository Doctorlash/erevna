import { useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Founder from './sections/Founder';
import Programs from './sections/Programs';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Founder', 'Programs', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <>
      {/* Elegant Fixed Navbar */}
      <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-xl z-50 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center lg:flex">
          <div className="flex items-center space-x-4">
            <img src="src/assets/logo.jpg" alt="Erevna" className="w-20 h-20" />
            <div className="text-gold">
              <div className="font-serif text-3xl font-bold">EREVNA</div>
              <div className="text-xs tracking-widest">LEADERSHIP ACADEMY</div>
            </div>
          </div>

          <nav className="flex space-x-10 text-white text-lg font-medium">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gold transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-between items-center px-6 py-5">
          <img src="src/assets/logo.jpg" alt="Erevna" className="w-16" />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gold text-3xl">
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy border-t border-gold/20">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-4 px-8 text-white hover:bg-gold hover:text-navy text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Founder />
        <Programs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;