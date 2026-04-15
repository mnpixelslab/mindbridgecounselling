import { Calendar } from 'lucide-react';

interface AboutProps {
  profileImage: string;
}

export default function About({ profileImage }: AboutProps) {
  const handleBooking = () => {
    window.open('https://calendly.com/mindbridgecounselling', '_blank');
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            {profileImage && (
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Manreet Kaur"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1
              id="about-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight"
            >
              A counsellor who truly{' '}
              <span className="italic text-primary">listens.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-slate-800">Manreet</span>, a counsellor dedicated to helping individuals overcome personal and emotional challenges. My approach is empathetic, practical, and focused on helping you move forward with clarity and confidence.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're dealing with stress, navigating relationships, or seeking personal growth, I'm here to provide a supportive space where you can explore your thoughts and feelings without judgment.
            </p>

            {/* Book Session Button */}
            <button
              onClick={handleBooking}
              className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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