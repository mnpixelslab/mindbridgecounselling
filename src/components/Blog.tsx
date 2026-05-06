import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Blog() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      title: "What It Feels Like to Be Truly Heard",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_08_41_00_PM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (<>/* unchanged */</>)
    },
    {
      id: 2,
      title: "7 Signs It Might Be Time for Couples Therapy",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_08_43_29_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (<>/* unchanged */</>)
    },
    {
      id: 3,
      title: "Don’t Wait Until It Breaks — Start Healing Now",
      thumbnail: "/14cdd6b4-317c-4a6a-b356-e2c19240dc81.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (<>/* unchanged */</>)
    },
    {
      id: 4,
      title: "How to Cope with Panic Attacks",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_09_20_27_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (<>/* unchanged */</>)
    }
  ];

  if (selectedBlogId !== null) {
    const blog = blogs.find(b => b.id === selectedBlogId);
    if (!blog) return null;

    return (
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <button
            onClick={() => setSelectedBlogId(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </button>

          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 mb-8 text-slate-600">
              <time>{blog.date}</time>
              <span>•</span>
              <span>By {blog.author}</span>
            </div>

            {/* ✅ FIXED IMAGE (NO CROPPING) */}
            <div className="mb-12 rounded-lg overflow-hidden bg-slate-100 flex justify-center">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-strong:text-slate-900 prose-ul:text-slate-700">
              {blog.content}
            </div>

          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Insights & Articles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our collection of articles on mental health, wellness, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlogId(blog.id)}
              className="group cursor-pointer"
            >

              {/* ✅ GRID IMAGE FIX (no forced crop issues) */}
              <div className="relative h-96 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 group-hover:text-blue-600 transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-blue-600 font-medium mt-3 group-hover:translate-x-2 transition-transform duration-300">
                Read More →
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}