"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickupDate: "",
    pickupHour: "12",
    pickupMinutes: "00",
    amPm: "AM",
    service: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.mobile)) {
      setStatus("invalid_mobile");
      return;
    }

    const formattedTime = `${formData.pickupHour}:${formData.pickupMinutes} ${formData.amPm}`;

    const response = await fetch("https://formspree.io/f/manqpzgv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, pickupTime: formattedTime }),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", mobile: "", pickupDate: "", pickupHour: "12", pickupMinutes: "00", amPm: "AM", service: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="contact__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact__form">
              <h3>Book a Service</h3>
              <p>Fill in the details below, and we’ll schedule your laundry pickup.</p>
              {status === "success" && <p className="success-msg">✅ Booking request sent successfully!</p>}
              {status === "error" && <p className="error-msg">❌ Failed to submit request. Try again!</p>}
              {status === "invalid_mobile" && <p className="error-msg">⚠️ Enter a valid 10-digit mobile number!</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <input type="text" name="mobile" placeholder="Your Mobile Number" required value={formData.mobile} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label>Select Pickup Time</label>
                  <div className="time-picker">
                    <select name="pickupHour" value={formData.pickupHour} onChange={handleChange}>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <select name="pickupMinutes" value={formData.pickupMinutes} onChange={handleChange}>
                      {["00", "15", "30", "45"].map((min) => (
                        <option key={min} value={min}>{min}</option>
                      ))}
                    </select>
                    <select name="amPm" value={formData.amPm} onChange={handleChange}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <select name="service" required value={formData.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    <option value="Wash & Fold">Wash & Fold</option>
                    <option value="Wash & Iron">Wash & Iron</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                  </select>
                </div>

                <button className="submit-btn" type="submit">Book Now</button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="map__area">

              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.535347474748!2d77.55463027500879!3d8.148692091881614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDgnNTUuMyJOIDc3wrAzMycyNS45IkU!5e0!3m2!1sen!2sin!4v1739801890915!5m2!1sen!2sin"  width="100%" height="400px" style={{ border: "none", borderRadius: "10px" }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact__area { padding: 60px 20px; border-radius: 10px; background: rgba(255, 255, 255, 0.9); }
        .contact__form { background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); }
        h3 { font-size: 24px; font-weight: bold; color: #333; margin-bottom: 15px; }
        p { font-size: 16px; color: #555; margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        input, select { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; }
        .submit-btn { background: #007bff; color: white; padding: 12px 20px; border: none; font-size: 16px; border-radius: 5px; cursor: pointer; transition: background 0.3s ease-in-out; }
        .submit-btn:hover { background: #0056b3; }
        .success-msg { color: green; font-weight: bold; }
        .error-msg { color: red; font-weight: bold; }
        .time-picker { display: flex; gap: 10px; }
        .time-picker select { width: 80px; }
      `}</style>
    </div>
  );
};

export default ContactSection;
