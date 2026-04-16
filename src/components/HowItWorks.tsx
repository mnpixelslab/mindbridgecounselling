import { Calendar, Clock, Video, Target } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: (
        <>
          <a
            href="https://calendly.com/mindbridgecounselling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Book a session
          </a>{' '}
          using the calendar
        </>
      ),
      description:
        'Select a time that works best for your schedule using the simple booking system.',
    },
    {
      icon: Clock,
      title: 'Choose a time that suits you',
      description:
        'Pick from available slots that fit your lifestyle and commitments.',
    },
    {
      icon: Video,
      title: 'Join the session online',
      description:
        'Connect from the comfort of your own space via a secure video platform.',
    },
    {
      icon: Target,
      title: 'Get personalized guidance and actionable steps',
      description:
        'Walk away with clear strategies and practical tools to move forward.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple steps to start your journey toward better mental wellbeing.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}