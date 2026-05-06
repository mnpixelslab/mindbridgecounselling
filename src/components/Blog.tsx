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
      content: (
        <>
          <p>
            There’s a difference between someone hearing your words… and someone actually understanding you.
          </p>
<p></p>
                  <p>
        Most of us have experienced the opposite. You try to share something real, and the response comes too quickly—solutions, opinions, or a change of subject. Sometimes, it’s subtle. Other times, it feels like you shouldn’t have spoken at all.  </p>

          
          <p>
            So you learn to hold things in.
          </p>
          <ul>
            <li>Racing thoughts and difficulty concentrating</li>
            <li>Physical tension and muscle tightness</li>
            <li>Rapid heartbeat and breathing</li>
            <li>Sleep disturbances</li>
            <li>Irritability and mood swings</li>
            <li>Persistent worry about everyday situations</li>
          </ul>

          <h2>Practical Management Strategies</h2>
          <p>
            Managing anxiety involves both professional support and personal strategies. Here are some practical approaches:
          </p>

          <h3>Breathing Techniques</h3>
          <p>
            Deep breathing activates your parasympathetic nervous system, which calms your body. Try the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, and exhale for 8.
          </p>

          <h3>Mindfulness and Meditation</h3>
          <p>
            These practices help you observe anxious thoughts without judgment. Regular meditation can reduce anxiety levels significantly over time.
          </p>

          <h3>Physical Activity</h3>
          <p>
            Exercise releases endorphins and reduces stress hormones. Even a 20-minute walk can improve your mood and anxiety levels.
          </p>

          <h3>Limiting Caffeine and Alcohol</h3>
          <p>
            Both substances can trigger or worsen anxiety. Consider reducing your intake and monitoring how you feel.
          </p>

          <h2>When to Seek Professional Help</h2>
          <p>
            If anxiety is affecting your daily functioning, relationships, or quality of life, professional support can be incredibly beneficial. A qualified counselor or therapist can help you identify triggers, develop coping strategies, and work through underlying causes.
          </p>

          <p>
            Remember, anxiety is treatable, and seeking help is a sign of strength, not weakness. You don't have to manage this alone.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_08_43_29_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>
            Healthy relationships are fundamental to our wellbeing. Whether romantic, familial, or friendships, the quality of our relationships significantly impacts our mental health, happiness, and overall life satisfaction.
          </p>

          <h2>The Foundation of Healthy Relationships</h2>
          <p>
            Healthy relationships are built on several core principles that create a safe, supportive, and nurturing environment for both people involved.
          </p>

          <h2>Trust and Honesty</h2>
          <p>
            Trust is the cornerstone of any healthy relationship. It develops through consistent honesty, reliability, and transparency. When both parties feel they can be authentic and vulnerable, the relationship deepens.
          </p>

          <h2>Effective Communication</h2>
          <p>
            Clear, respectful communication prevents misunderstandings and builds connection. This means:
          </p>
          <ul>
            <li>Listening actively without judgment</li>
            <li>Expressing your feelings using "I" statements</li>
            <li>Asking clarifying questions</li>
            <li>Being willing to have difficult conversations</li>
            <li>Validating each other's emotions</li>
          </ul>

          <h2>Boundaries and Respect</h2>
          <p>
            Healthy boundaries protect your emotional wellbeing and show respect for others. Setting boundaries means:
          </p>
          <ul>
            <li>Clearly stating your needs and limits</li>
            <li>Respecting others' boundaries</li>
            <li>Saying "no" without guilt</li>
            <li>Maintaining your individual identity</li>
          </ul>

          <h2>Emotional Support</h2>
          <p>
            Being emotionally available and supportive during both good times and challenges strengthens the bond. This includes celebrating successes together and supporting each other through difficulties.
          </p>

          <h2>Conflict Resolution</h2>
          <p>
            All relationships experience conflict. What matters is how you handle it. Healthy conflict resolution involves:
          </p>
          <ul>
            <li>Addressing issues promptly and calmly</li>
            <li>Finding compromise and mutual solutions</li>
            <li>Focusing on behaviors, not character attacks</li>
            <li>Apologizing sincerely when you're wrong</li>
            <li>Forgiving and letting go of resentment</li>
          </ul>

          <h2>Red Flags to Watch For</h2>
          <p>
            Some warning signs of unhealthy relationships include controlling behavior, manipulation, lack of respect, inability to communicate, and any form of abuse. If you notice these patterns, seeking professional guidance is important.
          </p>

          <h2>Investing in Your Relationships</h2>
          <p>
            Healthy relationships require ongoing effort and investment. Schedule quality time together, show appreciation, and continuously work on improving your connection.
          </p>

          <p>
            Remember, healthy relationships are not about perfection—they're about genuine connection, mutual respect, and a commitment to growing together.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "Stress Management Techniques",
      thumbnail: "/14cdd6b4-317c-4a6a-b356-e2c19240dc81.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>
            Stress is an inevitable part of modern life, but chronic stress can take a significant toll on your physical health, mental wellbeing, and quality of life. Learning effective stress management techniques is essential for maintaining balance and resilience.
          </p>

          <h2>Understanding Stress</h2>
          <p>
            Stress is your body's response to demands and pressures. While some stress can be motivating, excessive or prolonged stress can lead to burnout, anxiety, depression, and physical health problems.
          </p>

          <h2>Immediate Stress Relief Techniques</h2>

          <h3>The 5-4-3-2-1 Grounding Method</h3>
          <p>
            When feeling overwhelmed, use your senses to ground yourself:
          </p>
          <ul>
            <li>Identify 5 things you can see</li>
            <li>Identify 4 things you can touch</li>
            <li>Identify 3 things you can hear</li>
            <li>Identify 2 things you can smell</li>
            <li>Identify 1 thing you can taste</li>
          </ul>

          <h3>Progressive Muscle Relaxation</h3>
          <p>
            Systematically tense and release muscle groups to reduce physical tension. Start with your toes and work your way up to your head, holding each muscle group tense for 5 seconds before releasing.
          </p>

          <h3>Cold Water Immersion</h3>
          <p>
            Splashing your face with cold water or holding ice can activate your parasympathetic nervous system and provide immediate relief.
          </p>

          <h2>Daily Stress Management Practices</h2>

          <h3>Regular Exercise</h3>
          <p>
            Physical activity is one of the most effective stress management tools. Exercise reduces cortisol levels, releases endorphins, and improves overall mental health. Aim for at least 30 minutes of moderate activity most days.
          </p>

          <h3>Mindfulness and Meditation</h3>
          <p>
            Even 10 minutes of daily meditation can significantly reduce stress levels. These practices help you develop awareness of your thoughts without judgment and cultivate inner calm.
          </p>

          <h3>Quality Sleep</h3>
          <p>
            Sleep is crucial for stress recovery. Aim for 7-9 hours of quality sleep by maintaining a consistent schedule, creating a dark sleeping environment, and avoiding screens before bed.
          </p>

          <h3>Social Connection</h3>
          <p>
            Spending time with supportive friends and family reduces stress and provides emotional support. Don't underestimate the healing power of connection.
          </p>

          <h2>Long-Term Stress Management</h2>

          <h3>Identify Your Stressors</h3>
          <p>
            Keep a stress journal to identify patterns. Understanding what triggers your stress helps you develop targeted strategies.
          </p>

          <h3>Set Boundaries</h3>
          <p>
            Learn to say no to commitments that overwhelm you. Setting healthy boundaries protects your energy and wellbeing.
          </p>

          <h3>Time Management</h3>
          <p>
            Prioritize tasks, break large projects into smaller steps, and avoid procrastination. Good organization reduces overwhelm.
          </p>

          <h3>Hobbies and Recreation</h3>
          <p>
            Engage in activities you enjoy. Whether it's reading, gardening, art, or sports, these activities provide stress relief and joy.
          </p>

          <h2>When to Seek Professional Help</h2>
          <p>
            If stress is affecting your sleep, appetite, relationships, or work, consider speaking with a counselor. Professional support can help you develop personalized coping strategies.
          </p>

          <p>
            Remember, managing stress is not about eliminating it entirely—it's about developing healthy coping skills and maintaining balance in your life.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: "Self-Care and Mental Wellness",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_09_20_27_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>
            Self-care is not selfish—it's essential. In our fast-paced world, prioritizing your mental wellness through intentional self-care practices can transform your life, improve your resilience, and help you show up as your best self.
          </p>

          <h2>What is Self-Care?</h2>
          <p>
            Self-care encompasses any intentional action you take to maintain or improve your physical, mental, and emotional wellbeing. It's about treating yourself with the same compassion and care you would offer a good friend.
          </p>

          <h2>Physical Self-Care</h2>

          <h3>Nutrition</h3>
          <p>
            Eat whole foods that nourish your body. A balanced diet rich in fruits, vegetables, and lean proteins supports both physical and mental health. Avoid using food as your only coping mechanism.
          </p>

          <h3>Exercise</h3>
          <p>
            Move your body in ways you enjoy. This could be yoga, dancing, swimming, or walking—whatever feels good to you. Regular movement improves mood, energy, and overall health.
          </p>

          <h3>Sleep Hygiene</h3>
          <p>
            Prioritize quality sleep by establishing a consistent bedtime routine, keeping your bedroom cool and dark, and avoiding caffeine before bed.
          </p>

          <h2>Emotional Self-Care</h2>

          <h3>Express Your Feelings</h3>
          <p>
            Write in a journal, talk to a trusted friend, or speak with a therapist. Expressing emotions helps you process them and prevents emotional buildup.
          </p>

          <h3>Set Healthy Boundaries</h3>
          <p>
            Say no to things that drain your energy. Boundaries protect your emotional wellbeing and show self-respect.
          </p>

          <h3>Practice Self-Compassion</h3>
          <p>
            Treat yourself kindly, especially during difficult times. Replace self-criticism with understanding and encouragement.
          </p>

          <h2>Mental Self-Care</h2>

          <h3>Mindfulness and Meditation</h3>
          <p>
            These practices calm your mind and reduce anxiety. Even 5-10 minutes daily can make a significant difference.
          </p>

          <h3>Learning and Growth</h3>
          <p>
            Engage your mind through reading, learning new skills, or pursuing hobbies. Mental stimulation improves mood and prevents stagnation.
          </p>

          <h3>Limit Negative Input</h3>
          <p>
            Reduce time on social media, negative news, or toxic relationships. Your mental health depends on what you expose yourself to.
          </p>

          <h2>Social Self-Care</h2>

          <h3>Nurture Relationships</h3>
          <p>
            Spend quality time with people who uplift and support you. Meaningful connections are vital for wellbeing.
          </p>

          <h3>Set Healthy Boundaries in Relationships</h3>
          <p>
            It's okay to be selective about who gets your time and energy. Protect yourself from emotionally draining relationships.
          </p>

          <h2>Spiritual Self-Care</h2>

          <h3>Connect with Purpose</h3>
          <p>
            Whether through religion, nature, art, or service, finding meaning and purpose enhances overall wellbeing.
          </p>

          <h3>Gratitude Practice</h3>
          <p>
            Regularly acknowledge what you're grateful for. This practice shifts your focus toward the positive aspects of your life.
          </p>

          <h2>Creating Your Self-Care Routine</h2>

          <h3>Start Small</h3>
          <p>
            You don't need an elaborate routine. Begin with 2-3 simple practices that resonate with you.
          </p>

          <h3>Make It a Priority</h3>
          <p>
            Schedule self-care like you would any other important appointment. Consistency is key.
          </p>

          <h3>Listen to Your Body and Mind</h3>
          <p>
            Your self-care needs may change based on circumstances. Stay flexible and adapt as needed.
          </p>

          <p>
            Remember, self-care is not a luxury—it's a necessity. By investing in your wellbeing today, you're building a foundation for a healthier, happier life.
          </p>
        </>
      )
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{blog.title}</h1>

            <div className="flex items-center gap-6 mb-8 text-slate-600">
              <time>{blog.date}</time>
              <span>•</span>
              <span>By {blog.author}</span>
            </div>

            <div className="mb-12 h-96 overflow-hidden rounded-lg">
              <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
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
