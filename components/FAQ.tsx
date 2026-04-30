"use client";

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    question: "What kind of projects do you work on?",
    answer: "I specialize in web development, cross-platform applications, and UI/UX solutions — from prototypes to production-ready products."
  },
  {
    question: "Do you take on freelance or full-time work?",
    answer: "I am open to both freelance opportunities and full-time positions depending on the project scope and alignment with my skills."
  },
  {
    question: "How do you approach new projects?",
    answer: "I start by understanding the core requirements and user needs, followed by architecture planning, UI/UX design, and iterative development."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary depending on complexity, but a typical full-stack web application takes between 4 to 8 weeks from concept to deployment."
  },
  {
    question: "How can we get started?",
    answer: "You can reach out via the contact form below or connect with me on LinkedIn to discuss your project requirements and goals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-sub">Answers to common questions about my work and process.</p>
      
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-header" 
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                {openIndex === index ? <X size={16} /> : <Plus size={16} />}
              </div>
            </div>
            <div className="faq-content">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
