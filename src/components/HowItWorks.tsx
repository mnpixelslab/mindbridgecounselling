import { Calendar, Clock, Video, Target } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book a session using the calendar',
      description: 'Select a time that works best for your schedule using the simple booking system.',
    },
    {
      icon: Clock,
      title: 'Choose a time that suits you',
      description: 'Pick from available slots that fit your lifestyle and commitments.',
    },
    {
      icon: Video,
      title: 'Join the session online',
      description: 'Connect from the comfort of your own space via a secure video platform.',
    },
    {
      icon: Target,
      title: 'Get personalized guidance and actionable steps',
      description: 'Walk away with clear strategies and practical tools to move forward.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Getting started is simple and straightforward — a focused 45-minute session
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-200">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={24} className="text-blue-600" />
                    <h3 className="text-xl font-semibold text-slate-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
