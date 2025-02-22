import React from 'react';
import { FaTshirt, FaCheckCircle, FaUsers, FaTruck } from 'react-icons/fa';

// Reusable Heading Component
const Heading = ({ title, subtitle }) => (
  <div>
    <h2 style={headingStyle}>{title}</h2>
    <div style={brownLineStyle}></div>
    <span style={subtitleStyle}>{subtitle}</span>
  </div>
);

// Styles
const laundryAreaStyle = {
  padding: '80px 0',
  backgroundColor: 'white',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#2c3e50',
  marginBottom: '15px',
};

const subtitleStyle = {
  fontSize: '18px',
  color: '#25d366',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '30px',
};

const offerContainerStyle = {
  display: 'flex',
  gap: '15px',
  marginBottom: '30px',
  justifyContent: 'space-between', // To create space between cards
};

const offerCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  width: '23%', // To fit 4 cards in one row
  backgroundColor: '#fff',
  textAlign: 'center',
};

const offerItemTextStyle = {
  marginLeft: '10px',
  fontSize: '16px',
  color: '#333',
  marginTop: '10px',
};

const iconStyle = {
  fontSize: '40px',
  color: '#25d366',
};

const imageContainerStyle = {
  textAlign: 'center',
};

const imageStyle = {
  width: '75%',
  height: 'auto',
  borderRadius: '10px',
};

const brownLineStyle = {
  height: '5px',
  backgroundColor: '#8B4513',
  margin: '10px 0',
};

const bottomLineStyle = {
  height: '4px',
  backgroundColor: '#8B4513',
  margin: '30px 0',
};

// Additional bullet points
const additionalPoints = [
  "Eco-friendly washing methods",
  "Quick turnaround time",
  "State-of-the-art laundry equipment",
  "Affordable pricing with no hidden costs",
];

const LaundryServices = () => {
  const phoneNumber = '6385856384'; // Static phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`; // WhatsApp link

  return (
    <div style={laundryAreaStyle}>
      <div style={brownLineStyle}></div> {/* Top Line */}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <Heading
              title="Best Laundry Services in Nagarkovil"
              subtitle="Free Pickup and Delivery"
            />
            <ul style={descriptionStyle}>
              <li><strong>Get a Flat 10% Off</strong> on your first order.</li>
              <li><strong>Trusted by 10,000+ Customers</strong> for the best prices and services.</li>
              <li>We guarantee 100% care for your clothes.</li>
              {additionalPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div style={offerContainerStyle}>
              <div style={offerCardStyle}>
                <FaTshirt style={iconStyle} />
                <h5 style={offerItemTextStyle}>Best Prices, Best Services</h5>
              </div>
              <div style={offerCardStyle}>
                <FaCheckCircle style={iconStyle} />
                <h5 style={offerItemTextStyle}>100% Guarantee</h5>
              </div>
              <div style={offerCardStyle}>
                <FaUsers style={iconStyle} />
                <h5 style={offerItemTextStyle}>10,000+ Trusted Customers</h5>
              </div>
              <div style={offerCardStyle}>
                <FaTruck style={iconStyle} />
                <h5 style={offerItemTextStyle}>Free Pickup and Delivery</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div style={imageContainerStyle}>
              <img src="/img/offerflat.jpg" alt="Laundry Service" style={imageStyle} />
            </div>
          </div>
        </div>
      </div>
      <div style={bottomLineStyle}></div> {/* Bottom Line */}
    </div>
  );
};

export default LaundryServices;
