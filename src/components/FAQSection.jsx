import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "I'm not married or I live alone — is this only for couples?",
      a: "If there's anyone in your life you've ever had even one conflict with — this is for you. Of the 1,200+ people who've been through this program, 38% were single — dealing with arguments with parents, tension with siblings, or just that restless voice inside. Relationships aren't limited to the bedroom."
    },
    {
      q: "I can never find time for live sessions — what if I can't finish the program?",
      a: "That's the same thought that's kept you stuck until now — and exactly why nothing has changed. All 8 modules are pre-recorded with lifetime access. Watch at 11 PM, on a train, during lunch break — whenever works for you. Live sessions are optional, not mandatory. Don't fear leaving it incomplete — just find the courage to start."
    },
    {
      q: "I don't understand complex psychology or difficult jargon — is this right for me?",
      a: "Let's be direct: if you can chat on WhatsApp, this program is for you. Simple language, zero jargon. No 'attachment theory' lectures. Just the exact words you can actually use in tonight's conversation. You'll feel the first difference within 3 days — or your money back."
    },
    {
      q: "If my family members refuse to participate, won't my learning be wasted?",
      a: "This is the program's biggest secret — and the very thing people miss when they hesitate. One person changing transforms the entire dynamic. When you say the same thing with a different tone, different timing, different words — the other person has no choice but to drop the anger. This isn't manipulation, it's physics. Those who never learn this are still repeating the same arguments 5 years from now."
    },
    {
      q: "Do I have to share my personal issues in front of the entire group?",
      a: "Not at all — and interestingly, people who ask this question usually experience the deepest transformation. The group is purely for learning, not for confessing. Even sharing your name is optional. You apply what you learn privately — in your own home, on your own terms. This isn't a clinic, it's a workshop."
    },
    {
      q: "I've read books and watched videos before — forgot everything. How is this different?",
      a: "Because you don't need more knowledge — you need habits. Books give information. This program gives you exact scripts — word-for-word what to say during last night's argument. Plus weekly 1:1 check-ins — someone is watching whether you're actually applying what you learn or not. Accountability is the one thing books can never give you."
    },
    {
      q: "Will this program actually work for my family's unique situation?",
      a: "Yes. The patterns behind relationship conflicts are remarkably repetitive. When you change how you react — your tone, your timing, your word choices — the other person's behavior shifts automatically. This identical system has already worked across 1,500+ different families in the program."
    },
    {
      q: "How do I apply for the program, and what is the selection criteria?",
      a: "Because we prioritize high-quality interaction and personalized attention, the program is application-only. We select participants via a brief 1:1 strategy call with Jagat or his core team to ensure this methodology is the absolute best fit for your family dynamic. If selected, you will be invited to join the upcoming batch."
    },
    {
      q: "I've already tried multiple courses and YouTube videos. How is this different?",
      a: "YouTube videos and books only give you theoretical knowledge. We don't teach concepts — we give you exact conversation scripts and weekly 1:1 check-ins. When you know precisely what to say and someone is holding you accountable for progress, real change becomes inevitable."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface) 0%, var(--surface) calc(100% - 60px), var(--surface-deep) 100%)' }}>
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          Your Honest Questions, Answered with Clarity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: 'center',
            margin: '0 auto 48px',
            maxWidth: '560px',
            color: 'var(--slate)',
            fontSize: '15px',
            lineHeight: '1.6'
          }}
        >
          It's completely natural to have doubts about your home environment and relationships. Here we've addressed the questions professionals most frequently ask us:
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              style={{
                backgroundColor: openIndex === index ? 'rgba(16,185,129,0.03)' : 'var(--surface-raised)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: openIndex === index ? '1px solid rgba(16,185,129,0.15)' : '1px solid var(--border)',
                transition: 'background-color 0.12s, border-color 0.12s'
              }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(148,163,184,0.04)', transition: { duration: 0.1, ease: "easeOut" } }}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: openIndex === index ? 'var(--emerald)' : 'var(--silver)',
                  transition: 'color 0.12s'
                }}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ 
                    color: openIndex === index ? 'var(--emerald)' : 'var(--slate)',
                    flexShrink: 0,
                    marginLeft: '16px'
                  }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{ padding: '0 24px 20px 24px', color: 'var(--slate)', borderTop: '1px solid var(--border)' }}>
                      <p style={{ margin: 0, paddingTop: '16px', lineHeight: '1.8' }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
