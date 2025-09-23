import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/inquiry-now-section.css";

export default function InquiryAndBooking() {
  return (
    <section className="container py-5 inquiry-booking-section">
      <div className="row g-4">
        {/* Left Column - Inquiry Form */}
        <div className="col-md-6 h-100 d-flex">
          <div className="p-4 inquiry-box h-100 d-flex flex-column">
            <h3 className="text-primary-custom mb-3">Inquiry Now</h3>
            <p className="text-white mb-4">
              Share your details and let us know exactly what you need.
            </p>
            <form className="mt-auto">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@email.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Service Needed</label>
                <select className="form-select">
                  <option value="">Select a service</option>
                  <option>Vehicle Wrapping</option>
                  <option>Acrylic Works</option>
                  <option>Printing</option>
                  <option>Signage</option>
                  <option>Wallpapers</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Tell us more</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Describe your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary-custom w-100 mt-auto"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Book Now */}
        <div className="col-md-6 h-100 d-flex">
          <div className="p-4 booking-box text-center h-100 d-flex flex-column">
            <h3 className="mb-3 text-primary-custom">Too Busy?</h3>
            <p className="mb-4">
              No worries! 🚀 You can{" "}
              <strong>book your service instantly</strong> in just a few clicks.
              Or if you prefer, give us a quick call and we’ll do the rest for
              you.
            </p>

            <form className="mt-auto">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>

              {/*<div className="mb-3">*/}
              {/*  <input*/}
              {/*    type="email"*/}
              {/*    className="form-control"*/}
              {/*    placeholder="E-mail"*/}
              {/*  />*/}
              {/*</div>*/}

              {/* Category */}
              <div className="mb-3">
                <select className="form-select">
                  <option value="">Select a Category</option>
                  <option value="vehicle">Vehicle Wrapping</option>
                  <option value="acrylic">Acrylic Works</option>
                  <option value="printing">Printing</option>
                  <option value="signage">Signage</option>
                  <option value="wallpapers">Wallpapers</option>
                  <option value="advertising">Advertising & Marketing</option>
                </select>
              </div>

              {/* Subcategory */}
              <div className="mb-3">
                <select className="form-select">
                  <option value="">Select a Subcategory</option>
                  <option value="fullwrap">Full Vehicle Wrap</option>
                  <option value="partialwrap">Partial Vehicle Wrap</option>
                  <option value="3dletters">3D Acrylic Letters</option>
                  <option value="lightbox">Lightbox Sign</option>
                  <option value="posters">Posters / Banners</option>
                  <option value="businesscards">Business Cards</option>
                  <option value="seo">SEO Marketing</option>
                  <option value="social">Social Media Ads</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Preferred date & time"
                />
              </div>

              <button type="submit" className="btn-primary-custom w-100 mb-3">
                Book Now
              </button>
            </form>

            <div className="call-us mt-auto">
              <p className="mb-2">Prefer talking directly?</p>
              <a href="tel:0502303130" className="btn btn-outline-light w-100">
                <FaPhoneAlt className="me-2" /> Call Us: 050 230 31 30
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
