import { ArrowLeft } from 'lucide-react';

interface BlogLayoutProps {
  title: string;
  date: string;
  author: string;
  image: string;
  children: React.ReactNode;
}

export default function BlogLayout({ title, date, author, image, children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>

          <div className="flex items-center gap-6 mb-8 text-slate-600">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>By {author}</span>
          </div>

          <div className="mb-12 h-96 overflow-hidden rounded-lg">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-strong:text-slate-900">
            {children}
          </div>
        </article>
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">&copy; 2026 Mind Bridge Counselling. All rights reserved.</p>
          <p className="text-slate-400">Dedicated to your mental health and wellbeing</p>
        </div>
      </footer>
    </div>
  );
}
