import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import PrivateGallery from './components/PrivateGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <Testimonials />
        <Booking />
        <PrivateGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}