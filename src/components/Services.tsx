import { Heart, Users, Briefcase, Sparkles, TrendingUp, Compass } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Stress & Anxiety',
      description: 'Learn practical tools to manage overwhelming feelings and find peace of mind.',
    },
    {
      icon: Users,
      title: 'Relationship Challenges',
      description: 'Navigate conflicts and build healthier connections with those around you.',
    },
    {
      icon: Briefcase,
      title: 'Career Guidance',
      description: 'Gain clarity on your professional path and make confident career decisions.',
    },
    {
      icon: Sparkles,
      title: 'Confidence & Self-Esteem',
      description: 'Develop a stronger sense of self-worth and embrace your authentic self.',
    },
    {
      icon: TrendingUp,
      title: 'Personal Growth & Clarity',
      description: 'Discover your strengths and create a roadmap for meaningful change.',
    },
    {
      icon: Compass,
      title: 'Life Direction & Purpose',
      description: 'Find clarity on your values and set meaningful goals for your future.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What I Help With</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I offer compassionate support across a range of personal and emotional challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
