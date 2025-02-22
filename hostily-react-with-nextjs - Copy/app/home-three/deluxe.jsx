import Image from "next/image";
import Link from "next/link";
import shirtironimg from "./images/shirtiron.jpg"; // Importing local image
import phantironimg from './images/phantiron.jpg'

const allServices = [
  {
    img: shirtironimg,
    title: "Shirt Ironing",
    des: "Perfectly pressed shirts to keep you looking sharp.",
    time: "12",
    rating: "4.8",
  },
  {
    img: phantironimg,
    title: "Shirt Wash & Iron",
    des: "Freshly washed and ironed shirts for a crisp look.",
    time: "24",
    rating: "4.9",
  },
  {
    img: phantironimg,
    title: "Pant Ironing",
    des: "Expert ironing for wrinkle-free trousers.",
    time: "12",
    rating: "4.7",
  },
  {
    img: shirtironimg,
    title: "Pant Wash & Iron",
    des: "Complete cleaning and ironing for your trousers.",
    time: "24",
    rating: "4.8",
  },
];

const LaundryServices = () => {
  const featuredServices = allServices.slice(0, 4); // Show only first 4 services

  return (
    <div className="deluxe__two section-padding" id="services">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-xl-6 col-md-8">
            <div className="deluxe__two-title md-mb-40">
              <span className="subtitle__one">Premium Care</span>
              <h2>Our Laundry Services</h2>
            </div>
          </div>
          <div className="col-xl-6 col-md-4">
            <div className="deluxe__two-btn t-right md-t-left">
              <Link className="theme-border-btn" href="/services">
                View All Services <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {featuredServices.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-30">
              <div className="deluxe__two-item">
                <div className="deluxe__two-item-image">
                  <Link href="/service-details">
                    <div className="image-wrapper">
                      <Image
                        src={service.img}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="deluxe__two-item-content">
                  <h4>
                    <Link href="/service-details">{service.title}</Link>
                  </h4>
                  <p>{service.des}</p>
                  <div className="deluxe__two-item-content-meta">
                    <ul>
                      <li>
                        <i className="fal fa-clock"></i> {service.time} hrs
                      </li>
                      <li>
                        <i className="fas fa-star"></i> {service.rating} Rating
                      </li>
                    </ul>
                  </div>
                  <div className="deluxe__two-item-content-bottom">
                    <Link className="simple-btn" href="/service-details">
                      <i className="far fa-chevron-right"></i> Read More
                    </Link>
                    <p>
                      <i className="fas fa-users"></i> 1.5k+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .deluxe__two-item {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .deluxe__two-item:hover {
          transform: scale(1.05);
        }

        .image-wrapper {
          width: 100%;
          height: 200px; /* Fixed height for images */
          position: relative;
        }

        .deluxe__two-item-content {
          padding: 15px;
          text-align: center;
        }

        .deluxe__two-item-content h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .deluxe__two-item-content p {
          font-size: 14px;
          color: #666;
        }

        .deluxe__two-item-content-meta ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 15px;
          font-size: 14px;
        }

        .deluxe__two-item-content-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          border-top: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
};

export default LaundryServices;
