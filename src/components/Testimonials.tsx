import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'AK Grewal',
      text: 'Manreet helped me navigate a really difficult time in my life. Her guidance was both practical and compassionate. I finally feel like I have the tools to handle stress and anxiety.',
      role: 'Homemaker/Mother',
    },
    {
      name: 'Holly Tallman',
      text: 'I was struggling with career decisions and felt completely lost. After just a few sessions, I had clarity and confidence to move forward. Highly recommend!',
      role: 'Teacher',
    },
    {
      name: 'Elia R.',
      text: 'The sessions were transformative. Manreet creates such a safe and supportive space. I learned so much about myself and feel more empowered in my relationships.',
      role: 'Civil Engineer',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real experiences from people who've found clarity and confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Quote size={40} className="text-blue-600 mb-4 opacity-50" />
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
