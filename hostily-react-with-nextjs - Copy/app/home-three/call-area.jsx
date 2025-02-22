import contactbanner from './images/contactbanner.png';

const Callarea = () => {
  return (
    <div className="call__area">
      <div className="container">
        <div
          className="row align-items-center call__area-bg"
          style={{ backgroundImage: `url(${contactbanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="col-xl-8">
            <div className="call__area-bg-left">
              <h2>Need any Contact with Us</h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="call__area-bg-right">
              <div className="call__area-bg-right-icon">
                <i className="fal fa-phone-alt"></i>
              </div>
              <div className="call__area-bg-right-content">
                <span>
                  <a href="tel:+123(458)585568">6385856384</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callarea;
