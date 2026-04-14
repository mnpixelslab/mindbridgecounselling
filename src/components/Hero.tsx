import { Calendar } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export default function Hero({ profileImage }: HeroProps) {
  const handleBooking = () => {
    window.open('https://calendly.com/mindbridgecounselling', '_blank');
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/ChatGPT_Image_Apr_8,_2026,_03_38_30_PM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
                backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-600 leading-tight mb-4">
              Clarity, Confidence, <br />and Direction<br />  <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-500">— Personal Counselling<br /> That Works</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              I help individuals navigate stress, relationships, <p>and life decisions with practical and supportive guidance.</p>
            </p>
            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar size={24} />
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
