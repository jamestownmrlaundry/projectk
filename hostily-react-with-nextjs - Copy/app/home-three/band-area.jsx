"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Mr. Laundry offer?",
    answer: "We provide dry cleaning, stain removal, steam ironing, and premium laundry services using eco-friendly solutions.",
  },
  {
    question: "How long does it take for laundry service?",
    answer: "Standard laundry takes 24-48 hours. Express service is available for same-day delivery at an extra charge.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes! We offer free pickup and delivery services for your convenience. Just schedule a time that suits you.",
  },
  {
    question: "What fabrics do you handle?",
    answer: "We handle all types of fabrics including silk, wool, cotton, linen, and delicate designer garments.",
  },
  {
    question: "Are your cleaning solutions eco-friendly?",
    answer: "Yes! We use non-toxic, biodegradable cleaning agents that are safe for your clothes and the environment.",
  },
  {
    question: "Can I track my laundry order?",
    answer: "Absolutely! We provide a tracking system so you can check the status of your order in real time.",
  },
  {
    question: "Do you offer stain removal services?",
    answer: "Yes! Our expert team specializes in removing tough stains from clothes using advanced cleaning techniques.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via phone, email, or WhatsApp. Our team is available 24/7 to assist you.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: auto;
          padding: 50px 20px;
          text-align: center;
          background: white;
        }

        .faq-title {
          font-size: 30px;
          font-weight: bold;
          color: #0056b3;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .faq-list {
          text-align: left;
        }

        .faq-item {
          background: #f1f8ff;
          border-radius: 10px;
          margin-bottom: 12px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 15px 20px;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
          color: #003366;
        }

        .faq-question:hover {
          background: #0056b3;
          color: white;
        }

        .faq-icon {
          font-size: 18px;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 20px;
          transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
          background: white;
        }

        .faq-answer.open {
          max-height: 200px;
          padding: 10px 20px;
        }

        .faq-answer p {
          font-size: 16px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
