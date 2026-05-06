export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Anxiety: A Practical Guide",
      thumbnail: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=600&fit=crop",
      url: "https://example.com/blog/understanding-anxiety"
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      thumbnail: "https://images.pexels.com/photos/3807508/pexels-photo-3807508.jpeg?w=600&h=600&fit=crop",
      url: "https://example.com/blog/healthy-relationships"
    },
    {
      id: 3,
      title: "Stress Management Techniques",
      thumbnail: "https://images.pexels.com/photos/3807490/pexels-photo-3807490.jpeg?w=600&h=600&fit=crop",
      url: "https://example.com/blog/stress-management"
    },
    {
      id: 4,
      title: "Self-Care and Mental Wellness",
      thumbnail: "https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?w=600&h=600&fit=crop",
      url: "https://example.com/blog/self-care-wellness"
    }
  ];

  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
              onClick={() => handleBlogClick(blog.url)}
              className="group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden bg-slate-200">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
