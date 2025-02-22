"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import shirtironimg from "../home-three/images/shirtiron.jpg";
import { FaClock, FaStar, FaTshirt, FaShoePrints, FaFemale } from "react-icons/fa";

const allServices = [
  {
    sno: 1,
    img: shirtironimg,
    title: "Shirt Ironing",
    des: "Perfectly pressed shirts to keep you looking sharp.",
    time: "12",
    rating: "4.8",
    price: 15,
  },
  {
    sno: 2,
    img: shirtironimg,
    title: "Shirt Wash & Iron",
    des: "Freshly washed and ironed shirts for a crisp look.",
    time: "24",
    rating: "4.9",
    price: 40,
  },
  {
    sno: 3,
    img: shirtironimg,
    title: "Pant Ironing",
    des: "Expert ironing for wrinkle-free trousers.",
    time: "12",
    rating: "4.7",
    price: 10,
  },
  {
    sno: 4,
    img: shirtironimg,
    title: "Pant Wash & Iron",
    des: "Complete cleaning and ironing for your trousers.",
    time: "24",
    rating: "4.8",
    price: 30,
  },
  {
    sno: 5,
    img: shirtironimg,
    title: "T-shirt, Track Pant, Shorts Wash",
    des: "Thorough wash for your casual wear.",
    time: "24",
    rating: "4.7",
    price: 10,
  },
  {
    sno: 6,
    img: shirtironimg,
    title: "T-shirt, Track Pant, Shorts Wash & Iron",
    des: "Complete cleaning and ironing for your casual wear.",
    time: "24",
    rating: "4.8",
    price: 20,
  },
  {
    sno: 7,
    img: shirtironimg,
    title: "Saree Ironing",
    des: "Professional saree ironing for a flawless drape.",
    time: "24",
    rating: "4.9",
    price: 100,
  },
  {
    sno: 8,
    img: shirtironimg,
    title: "Saree Wash & Ironing",
    des: "Expert washing and ironing for your sarees.",
    time: "24",
    rating: "5.0",
    price: 140,
  },
  {
    sno: 9,
    img: shirtironimg,
    title: "Pattu Saree Ironing",
    des: "Gentle ironing to maintain the elegance of silk sarees.",
    time: "24",
    rating: "5.0",
    price: 200,
  },
  {
    sno: 10,
    img: shirtironimg,
    title: "Pattu Saree Polishing",
    des: "Premium polishing to enhance the shine of silk sarees.",
    time: "24",
    rating: "5.0",
    price: 250,
  },
  {
    sno: 11,
    img: shirtironimg,
    title: "Pattu Saree Wash & Ironing",
    des: "Complete care including wash and ironing for silk sarees.",
    time: "24",
    rating: "5.0",
    price: 300,
  },
  {
    sno: 12,
    img: shirtironimg,
    title: "Pattu Saree Wash, Ironing & Polishing",
    des: "Complete premium care for silk sarees including wash, ironing, and polishing.",
    time: "24",
    rating: "5.0",
    price: 350,
  },
  {
    sno: 13,
    img: shirtironimg,
    title: "Shoe Cleaning",
    des: "Deep cleaning for all types of shoes to keep them fresh.",
    time: "24",
    rating: "4.7",
    price: 100,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav style={{ maxHeight: "100px" }} className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Image src="/logo-1.png" alt="Logo" width={90} height={80} />
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="back-button-container">
        <Link href="/home-three" className="back-button">
          ⬅ Back to Home
        </Link>
      </div>

      {/* Services Section */}
      <div className="container">
        <h2 className="page-title">Our Laundry Services</h2>
        <div className="service-grid">
          {allServices.length > 0 ? (
            allServices.map((service, index) => (
              <div key={index} className="service-card" onClick={() => openModal(service)}>
                <div className="image-wrapper">
                  <Image
                    src={service.img}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.des}</p>
                  <div className="service-meta">
                    <span>
                      <FaClock /> {service.time} hrs
                    </span>
                    <span>
                      <FaStar /> {service.rating} Rating
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-services">No services available.</p>
          )}
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-image">
              <Image
                src={selectedService.img}
                alt={selectedService.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="modal-details">
              <h3>{selectedService.title}</h3>
              <p>{selectedService.des}</p>
              <div className="modal-meta">
                <span>
                  <FaClock /> {selectedService.time} hrs
                </span>
                <span>
                  <FaStar /> {selectedService.rating} Rating
                </span>
                <span>
                  <FaTshirt /> {selectedService.price} USD
                </span>
              </div>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        /* Full-Page Styling */
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        /* Navbar Styling */
        .navbar {
          background-color: #007bff;
          padding: 15px;
          display: flex;
          justify-content: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          max-height: 100px;
        }

        /* Back Button */
        .back-button-container {
          display: flex;
          justify-content: center;
          margin: 15px 0;
        }
        .back-button {
          color: white;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: #0056b3;
          transition: background 0.3s;
        }
        .back-button:hover {
          background-color: #003f80;
        }

        /* Page Title */
        .page-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }

        /* Services Grid */
        .container {
          width: 100%;
          max-width: 1400px;
          margin: auto;
          padding: 20px;
          flex-grow: 1;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        /* Service Card Styling */
        .service-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }
        .service-card:hover {
          transform: scale(1.05);
        }

        /* Image Wrapper */
        .image-wrapper {
          width: 100%;
          height: 200px;
          position: relative;
        }

        /* Service Content */
        .service-content {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-content h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        .service-content p {
          font-size: 14px;
          color: #666;
        }

        /* Meta Info */
        .service-meta {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #555;
        }

        /* No Services Message */
        .no-services {
          text-align: center;
          font-size: 18px;
          color: #999;
          margin-top: 20px;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        /* Modal Content */
        .modal-content {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          width: 90%;
          max-width: 600px;
          position: relative;
          padding: 20px;
        }

        /* Close Modal Button */
        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        /* Modal Image */
        .modal-image {
          width: 100%;
          height: 300px;
          position: relative;
          margin-bottom: 20px;
        }

        /* Modal Details */
        .modal-details {
          text-align: center;
        }
        .modal-details h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .modal-details p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        /* Modal Meta */
        .modal-meta {
          display: flex;
          justify-content: space-around;
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        /* Book Now Button */
        .book-now {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .book-now:hover {
          background-color: #0056b3;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .modal-content {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;