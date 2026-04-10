import { Calendar, ArrowRight } from 'lucide-react';

export default function Booking() {
  const handleBooking = () => {
    window.open('https://calendly.com/manreetqsi', '_blank');
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Take the First Step?
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Book your session today and start your journey toward clarity, confidence, and positive change.
        </p>

        <button
          onClick={handleBooking}
          className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
        >
          <Calendar size={28} />
          Book Your Session
          <ArrowRight size={24} />
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">45 min</div>
            <div className="text-blue-100">Session Duration</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Online</div>
            <div className="text-blue-100">Video Sessions</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Flexible</div>
            <div className="text-blue-100">Scheduling</div>
          </div>
        </div>
      </div>
    </section>
  );
}
