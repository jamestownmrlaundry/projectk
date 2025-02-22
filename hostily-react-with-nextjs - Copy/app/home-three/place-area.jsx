"use client";
import React, { useState, useEffect } from "react";
import { FaTshirt, FaSprayCan, FaCogs, FaSteam, FaClipboardCheck, FaBox, FaTruck } from "react-icons/fa";

const steps = [
  {
    title: "Sorting & Inspection",
    description: "Segregation based on care label, fabric type, and color.",
    details: "Each item is carefully inspected for fabric type, color, and care label instructions to ensure the correct cleaning method is applied.",
    icon: <FaTshirt />,
  },
  {
    title: "Stain Treatment",
    description: "Italian spotting machines | German stain removal solutions.",
    details: "Specialized stain removal treatments are applied using Italian spotting machines and high-quality German stain-removing solutions.",
    icon: <FaSprayCan />,
  },
  {
    title: "Processing",
    description: "World-Renowned Italian dry cleaning machines | Eco-friendly solutions.",
    details: "Our Italian dry cleaning machines use an eco-friendly cleaning process that ensures freshness without damaging fabric quality.",
    icon: <FaCogs />,
  },
  {
    title: "Finishing",
    description: "Unique steam ironing equipment for each garment type.",
    details: "Each garment undergoes finishing using advanced steam ironing techniques to maintain its original shape and feel.",
    icon: <FaSteam />,
  },
  {
    title: "Quality Check",
    description: "Meticulous inspection of each item by experts.",
    details: "Before packaging, every item is inspected to ensure high-quality cleaning, proper stain removal, and a flawless finish.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Packing",
    description: "Folded, hanger, or vacuum packing as per preference.",
    details: "Garments are carefully packed based on customer preferences: folded, placed on hangers, or vacuum-packed for extra protection.",
    icon: <FaBox />,
  },
  {
    title: "Delivery",
    description: "Fast & secure delivery at your doorstep.",
    details: "Your cleaned and packed garments are safely delivered to your home, ensuring convenience and timely service.",
    icon: <FaTruck />,
  },
];

const LaundryProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="process-container">
      <h2 className="process-title">Laundry Process</h2>

      {/* Dynamic Step Heading */}
      <h3 className="step-heading">
        Step {activeStep + 1}: {steps[activeStep].title}
      </h3>

      <div className="process-line">
        {steps.map((step, index) => (
          <div
            key={index}
            className="process-step-container"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className={`process-step ${activeStep === index ? "active" : ""}`}>
              <div className={`step-icon ${activeStep === index ? "highlight" : ""}`}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index < steps.length - 1 && <div className="connector"></div>}

            {/* Popup with Step Number & Details */}
            {hoveredStep === index && (
              <div className="step-details">
                <h4>Step {index + 1}: {step.title}</h4>
                <p>{step.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .process-container {
          text-align: center;
          padding: 50px 20px;
          background: white;
          max-width: 100%;
          overflow-x: hidden;
        }

        .process-title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .step-heading {
          font-size: 22px;
          font-weight: bold;
          color: #007bff;
          margin-bottom: 20px;
        }

        .process-line {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          max-width: 90%;
          margin: auto;
          position: relative;
          flex-wrap: wrap;
        }

        .process-step-container {
          display: flex;
          align-items: center;
          position: relative;
          flex-wrap: wrap;
        }

        .process-step {
          text-align: center;
          cursor: pointer;
          width: 140px;
          opacity: 1;
          transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
        }

        .process-step.active {
          opacity: 1;
        }

        .step-icon {
          font-size: 40px;
          color: #007bff;
          background: white;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          margin: auto;
          transition: background-color 0.5s ease-in-out;
        }

        .step-icon.highlight {
          background: yellow;
        }

        h3 {
          font-size: 16px;
          margin-top: 10px;
          color: #333;
        }

        p {
          font-size: 14px;
          color: #555;
        }

        .connector {
          width: 50px;
          height: 5px;
          background: #007bff;
          margin: 0 10px;
          flex-shrink: 0;
        }

        /* Popup Styling */
        .step-details {
          position: absolute;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          padding: 12px;
          width: 220px;
          border-radius: 10px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
          font-size: 14px;
          text-align: left;
          z-index: 10;
        }

        .step-details h4 {
          font-size: 16px;
          font-weight: bold;
          color: #007bff;
          margin-bottom: 5px;
        }

        /* Responsive Design */
        @media screen and (max-width: 1024px) {
          .process-line {
            max-width: 95%;
            flex-wrap: wrap;
          }

          .process-step {
            width: 120px;
          }

          .connector {
            width: 40px;
          }
        }

        @media screen and (max-width: 768px) {
          .process-line {
            flex-direction: column;
            gap: 30px;
          }

          .process-step-container {
            flex-direction: column;
            align-items: center;
          }

          .process-step {
            width: 100%;
            max-width: 300px;
          }

          .connector {
            width: 5px;
            height: 30px;
          }

          .step-details {
            top: 110%;
            left: 50%;
            transform: translateX(-50%);
            width: 260px;
          }
        }
      `}</style>
    </div>
  );
};

export default LaundryProcess;
