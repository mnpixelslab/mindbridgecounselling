import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import BlogLayout from './BlogLayout';

const Blog2 = () => {
  return (
    <BlogLayout
      title="Building Healthy Relationships"
      date="May 2026"
      author="Mind Bridge Counselling Team"
      image="https://images.pexels.com/photos/3807508/pexels-photo-3807508.jpeg?w=1200&h=600&fit=crop"
    >
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
    </BlogLayout>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Blog2 />
  </React.StrictMode>
);
