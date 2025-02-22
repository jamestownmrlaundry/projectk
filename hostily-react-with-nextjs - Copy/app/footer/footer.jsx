// Import necessary components and icons
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";
import footerOne from "@/components/data/footerOne";
import laundryLogo from "../header/mrlaundry.png"; // Updated logo import

const Footer = () => {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="row flex justify-between">
          {/* Company Logo & Description */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  <Link href="/">
                    <Image
                      layout="responsive"
                      src={laundryLogo} // Set new logo
                      alt="Company Logo"
                      width={200}
                      height={50}
                    />
                  </Link>
                </div>
                <p>{footerOne.description}</p>
                <div className="footer__area-widget-about-social">
                  <Social />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              <h5>Contact Details</h5>
              <div className="footer__area-widget-contact">
                {footerOne.officeInfos.map((item, index) => (
                  <div className="footer__area-widget-contact-item" key={index}>
                    <div className="footer__area-widget-contact-item-icon">
                      {item.icon}
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span>
                        <Link href={item.link}>{item.info}</Link>
                      </span>
                    </div>
                  </div>
                ))}

                {/* Static Address (No Map) */}
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                       
                      <br />
                      <Link
                        href="https://www.google.com/maps?q=8.1486944,77.5571944"
                        target="_blank"
                      > Nagarcovil,
                        View on Google Maps
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              <h5>{footerOne.title_3}</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  {footerOne.widgetMenus.map((item, index) => (
                    <li key={index}>
                      <Link aria-disabled href={item.link}>
                        <i className="fal fa-angle-double-right"></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
            <div className="footer__area-widget">
              <h5>{footerOne.title_4}</h5>
              <div className="footer__area-widget-subscribe">
                <form action="#">
                  <input type="text" name="email" placeholder="Email Address" />
                  <button type="submit">
                    <i className="fal fa-hand-pointer"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                <p>
                  Copyright © 2023
                  <a href="https://themeforest.net/user/themeori/portfolio">
                   
                  </a>
             
                  
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="copyright__area-right t-right md-t-center">
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
