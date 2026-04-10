import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const profileImage = '/Gemini_Generated_Image_p0sjynp0sjynp0sj.png';
const heroIllustration = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <Navigation />
      <Hero profileImage={heroIllustration} />
      <About profileImage={profileImage} />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
