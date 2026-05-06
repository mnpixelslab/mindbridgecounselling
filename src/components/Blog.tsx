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
          <p>There’s a difference between someone hearing your words… and someone actually understanding you.</p>
          <br />
          <p>Most of us have experienced the opposite. You try to share something real, and the response comes too quickly—solutions, opinions, or a change of subject. Sometimes, it’s subtle. Other times, it feels like you shouldn’t have spoken at all.</p>
          <br />
          <p>So you learn to hold things in.</p>
          <ul>
            <li>To filter.</li>
            <li>To keep it surface-level.</li>
          </ul>
          <br />
          <p>But imagine a different kind of moment.</p>
          <br />
          <p>You begin to speak, unsure where your thoughts are even going. They come out unstructured, maybe even confusing. You pause, searching for the right words.</p>
          <br />
          <p>And the person across from you doesn’t interrupt.</p>
          <p>They don’t rush you.</p>
          <p>They don’t try to “fix” anything.</p>
          <br />
          <p>They simply stay with you.</p>
          <br />
          <p>In that space, something unexpected happens. Your thoughts start to settle. What felt overwhelming begins to make a little more sense. You hear yourself more clearly—because someone else is truly listening.</p>
          <br />
          <p>That kind of presence is rare. And powerful.</p>
          <br />
          <p>It’s not about having the perfect response. It’s about creating a moment where you feel safe enough to be honest—without editing yourself.</p>
          <br />
          <p>Sometimes, just a gentle question or a quiet acknowledgment is enough to shift everything. Not because it solves the problem instantly, but because it reminds you that you’re not carrying it alone.</p>
          <br />
          <p>When you feel understood, even a little, it changes how you relate to your own thoughts and emotions.</p>
          <br />
          <p>You deserve that kind of space.</p>
          <p>A place where you don’t have to explain yourself perfectly.</p>
          <p>Where you can pause, reflect, and just be.</p>
          <br />
          <p>If you’ve been holding things in, maybe this is your moment to let them out—at your own pace, in your own way.</p>
          <br />
          <p>Start where you are.</p>
          <br />
          <p>Give yourself the chance to be heard.</p>
          <br />
          <p>
            <b>
              Feeling seen starts here.{" "}
              <a
                href="https://calendly.com/mindbridgecounselling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Book a session today.
              </a>{" "}
            </b>
          </p>
          <br />
          <p>Let this be the moment you give yourself permission to be heard.</p>
        </>
      ),
    },
    {
      id: 2,
      title: "7 Signs It Might Be Time for Couples Therapy",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_08_43_29_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>Every relationship has its ups and downs. Even strong, loving couples go through phases of tension, distance, or misunderstanding. That’s normal.</p>
          <br />
          <p>What matters is how those challenges are handled.</p>
          <br />
          <p>Couples therapy isn’t a last resort—it’s a smart, proactive way to strengthen your relationship, improve communication, and reconnect before things feel unmanageable.</p>
          <br />
          <p>Here are <b>seven signs</b> it might be time to seek support:</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>1. You Keep Misunderstanding Each Other</b></p>
          <br />
          <p>It feels like no matter how much you talk, you’re not really being heard. Conversations turn into arguments, or your intentions get lost along the way.</p>
          <br />
          <p>Over time, this can lead to frustration and emotional distance. Therapy helps you learn how to truly listen, express yourself clearly, and understand each other better.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>2. You Feel Like Housemates, Not Partners</b></p>
          <br />
          <p>Your relationship has become routine—focused on responsibilities like bills, chores, or parenting.</p>
          <br />
          <p>The emotional and romantic connection that once came naturally now feels distant or missing. Therapy can help bring back that sense of closeness and shared purpose.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>3. You Avoid Important Conversations</b></p>
          <br />
          <p>Some topics feel too risky to bring up, so you stay silent to keep the peace.</p>
          <br />
          <p>But avoiding issues doesn’t resolve them—it just pushes them deeper. A therapist creates a safe space where both of you can speak openly without fear of escalation.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>4. You’re Stuck in the Same Arguments</b></p>
          <br />
          <p>The same issues keep coming up again and again, with no real resolution.</p>
          <br />
          <p>This usually points to deeper, unresolved concerns. Therapy helps uncover what’s really driving those conflicts and shows you healthier ways to work through them.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>5. Intimacy Has Faded</b></p>
          <br />
          <p>You feel emotionally or physically disconnected. Conversations are surface-level, affection is limited, and closeness feels forced or absent.</p>
          <br />
          <p>This can be one of the loneliest experiences in a relationship. Therapy can help rebuild trust, connection, and intimacy step by step.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>6. Trust Has Been Damaged</b></p>
          <br />
          <p>Whether it’s due to dishonesty, broken promises, or past hurt, trust is no longer what it used to be.</p>
          <br />
          <p>Rebuilding trust takes time, effort, and guidance. Therapy offers a structured and supportive environment to repair that foundation together.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>7. You’re Considering Giving Up</b></p>
          <br />
          <p>If thoughts of separation or “maybe this isn’t working anymore” are becoming frequent, it’s an important signal.</p>
          <br />
          <p>It doesn’t always mean the relationship is over—but it does mean something needs attention. Therapy can help you both gain clarity, whether that means rebuilding or making informed decisions about the future.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>Final Thoughts</b></p>
          <br />
          <p>Noticing these signs doesn’t mean your relationship is failing. It means your relationship needs care.</p>
          <br />
          <p>Seeking help is not weakness—it’s commitment. It shows that you’re willing to invest in understanding each other and building something stronger.</p>
          <br />
          <p>You don’t have to wait until things fall apart.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>Take the First Step Together</b></p>
          <br />
          <p>If any of these signs feel familiar, it might be time to talk to someone who can help guide you forward.</p>
          <br />
          <p>Healing, clarity, and reconnection are possible—with the right support.</p>
          <br />
          <p>
            <b>
              <a
                href="https://calendly.com/mindbridgecounselling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Book your session today.
              </a>
            </b>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 3,
      title: "Don’t Wait Until It Breaks — Start Healing Now",
      thumbnail: "/14cdd6b4-317c-4a6a-b356-e2c19240dc81.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>We often tell ourselves, “I’m okay… it’s not that serious.”</p>
          <br />
          <p>So we keep going. We smile, we manage, we delay dealing with what’s really going on inside.</p>
          <br />
          <p>But the truth is simple:</p>
          <p><b>You don’t have to reach your lowest point to deserve support.</b></p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p>💭 <b>Maybe This Is Your Wake-Up Call</b></p>
          <br />
          <p>Not everything shows up as a visible crisis. Sometimes it’s quieter, harder to explain.</p>
          <br />
          <p>Maybe you’ve noticed yourself:</p>
          <ul>
            <li>Getting irritated with people you care about</li>
            <li>Feeling emotionally distant or numb</li>
            <li>Struggling with motivation, even for simple things</li>
            <li>Acting like everything is fine while feeling overwhelmed inside</li>
          </ul>
          <br />
          <p>Individually, these moments might seem small. But together, they can leave you feeling drained and disconnected.</p>
          <br />
          <p>If this feels familiar, it’s not something to ignore — it’s something to listen to.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p>🧠 <b>Support Early, Heal Deeper</b></p>
          <br />
          <p>There’s a common misconception that therapy is only for when things fall apart. In reality, it’s one of the most powerful tools to prevent that from happening.</p>
          <br />
          <p>Reaching out early can help you:</p>
          <ul>
            <li>Understand your thoughts and emotions more clearly</li>
            <li>Develop healthier ways to cope with stress</li>
            <li>Strengthen your emotional resilience</li>
            <li>Feel more grounded, balanced, and in control</li>
          </ul>
          <br />
          <p>You don’t need a breaking point to begin rebuilding.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p>🌿 <b>You Don’t Have to Do This Alone</b></p>
          <br />
          <p>You deserve a space where you can be honest without fear of judgment.</p>
          <p>A space where you’re heard, understood, and supported.</p>
          <p>Whether you’re feeling overwhelmed, stuck, or simply tired of holding everything in — this is a good place to start.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p>✨ <b>Take the First Step Before It Gets Harder</b></p>
          <br />
          <p>Healing doesn’t have to wait for a crisis.</p>
          <p>You are allowed to seek help simply because you want to feel better.</p>
          <p>Start now — not later, not someday.</p>
          <p>Because taking care of yourself today can change everything about your tomorrow.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>Ready to begin?</b></p>
          <br />
          <p>Take that first step and reach out for support.</p>
          <br />
          <p>
            👉{" "}
            <a
              href="https://calendly.com/mindbridgecounselling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Book your session today
            </a>
          </p>
          <br />
          <p>Your future self will be glad you did.</p>
        </>
      ),
    },
    {
      id: 4,
      title: "How to Cope with Panic Attacks",
      thumbnail: "/ChatGPT_Image_May_5,_2026,_09_20_27_AM.png",
      date: "May 2026",
      author: "Mind Bridge Counselling Team",
      content: (
        <>
          <p>Panic attacks can feel sudden, intense, and very unsettling. Many people describe them as overwhelming moments of fear that seem to appear out of nowhere. Although they are frightening, they are not dangerous, and they do pass.</p>
          <br />
          <p><b>What a Panic Attack Is</b></p>
          <br />
          <p>A panic attack is a short period of intense anxiety that can include symptoms such as a fast heartbeat, difficulty breathing, sweating, shaking, dizziness, or a sense of losing control. Most episodes peak within a few minutes and then gradually ease, even if they feel longer while happening.</p>
          <br />
          <p><b>Ways to Manage Panic in the Moment</b></p>
          <br />
          <p><b>Focus on steady breathing</b></p>
          <p>Try to slow your breathing by making it more regular and controlled. A simple rhythm—inhale, pause briefly, exhale—can help reduce the body’s stress response.</p>
          <br />
          <p><b>Use grounding techniques</b></p>
          <p>Bring your attention back to your surroundings. Notice what you can see, touch, hear, or feel. Holding an object or feeling your feet firmly on the ground can help you reconnect with the present moment.</p>
          <br />
          <p><b>Question the fear response</b></p>
          <p>Remind yourself that what you’re feeling is temporary and will pass. Panic often creates thoughts that feel urgent or extreme, but they are not facts.</p>
          <br />
          <p><b>Stay with the moment</b></p>
          <p>Instead of resisting the sensations, allow them to rise and fade naturally. This can reduce the intensity over time.</p>
          <br />
          <p><b>Reduce avoidance gradually</b></p>
          <p>If certain situations trigger panic, facing them step by step—rather than avoiding them completely—can help reduce fear in the long term, especially with professional guidance.</p>
          <br />
          <hr className="my-6 border-slate-300" />
          <p><b>Getting Support</b></p>
          <br />
          <p>If panic attacks happen often or start affecting daily life, speaking with a mental health professional can make a significant difference. Therapy can help you understand triggers, develop coping tools, and build long-term confidence in managing anxiety.</p>
          <br />
          <p>Support is available, and recovery is possible with the right help and strategies.</p>
          <br />
          <p>
            👉{" "}
            <a
              href="https://calendly.com/mindbridgecounselling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Book your session today
            </a>
          </p>
        </>
      ),
    },
  ];

  if (selectedBlogId !== null) {
    const blog = blogs.find((b) => b.id === selectedBlogId);
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

            {/* UPDATED: Image container to prevent cropping */}
            <div className="mb-12 rounded-lg overflow-hidden bg-slate-50 flex justify-center border border-slate-100 shadow-sm">
              <img 
                src={blog.thumbnail} 
                alt={blog.title} 
                className="max-h-[500px] w-auto object-contain" 
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Insights & Articles</h2>
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
              <div className="relative h-96 overflow-hidden bg-slate-200 rounded-lg">
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