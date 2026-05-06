import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import BlogLayout from './BlogLayout';

const Blog1 = () => {
  return (
    <BlogLayout
      title="Understanding Anxiety: A Practical Guide"
      date="May 2026"
      author="Mind Bridge Counselling Team"
      image="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=1200&h=600&fit=crop"
    >
      <p>
        Anxiety is one of the most common mental health concerns affecting millions of people worldwide. It's a natural response to stress, but when it becomes overwhelming, it can significantly impact your daily life, relationships, and overall wellbeing.
      </p>

      <h2>What is Anxiety?</h2>
      <p>
        Anxiety is your body's response to perceived threats or dangers. When you feel anxious, your nervous system activates the "fight or flight" response, releasing stress hormones like cortisol and adrenaline. While this response can be helpful in genuinely dangerous situations, chronic anxiety keeps your body in a constant state of alert.
      </p>

      <h2>Common Symptoms</h2>
      <p>
        Anxiety manifests differently for everyone, but common symptoms include:
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
    </BlogLayout>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Blog1 />
  </React.StrictMode>
);
