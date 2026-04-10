import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long is a session?',
      answer: 'Each session is 45 minutes. This focused timeframe allows us to explore your concerns and develop actionable strategies together efficiently.',
    },
    {
      question: 'Is this confidential?',
      answer: 'Absolutely. Everything discussed in our sessions is completely confidential. Your privacy and trust are paramount. Information is only shared in exceptional circumstances required by law.',
    },
    {
      question: 'Who is this for?',
      answer: 'My counselling services are for anyone seeking personal growth, struggling with stress or anxiety, navigating relationship challenges, making life decisions, or working on self-confidence. If you\'re ready to invest in yourself, this is for you.',
    },
    {
      question: 'How do online sessions work?',
      answer: 'Online sessions are conducted via secure video conferencing. After booking, you\'ll receive a link to join the session. All you need is a private space, a stable internet connection, and a device with a camera and microphone.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600">
            Everything you need to know about getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
