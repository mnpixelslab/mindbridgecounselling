import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import BlogLayout from './BlogLayout';

const Blog4 = () => {
  return (
    <BlogLayout
      title="Self-Care and Mental Wellness"
      date="May 2026"
      author="Mind Bridge Counselling Team"
      image="https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?w=1200&h=600&fit=crop"
    >
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
    </BlogLayout>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Blog4 />
  </React.StrictMode>
);
