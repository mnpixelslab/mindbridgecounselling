interface AboutProps {
  profileImage: string;
}

export default function About({ profileImage }: AboutProps) {
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
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-slate-800">Manreet Kaur</span>, a counsellor dedicated to helping individuals overcome personal and emotional challenges. My approach is empathetic, practical, and focused on helping you move forward with clarity and confidence.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're dealing with stress, navigating relationships, or seeking personal growth, I'm here to provide a supportive space where you can explore your thoughts and feelings without judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
