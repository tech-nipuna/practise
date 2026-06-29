import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="brand-mark">HG</span>
            <span className="brand-name">Hotel Grand Gayathri</span>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</a></li>
            <li><a href="#amenities" onClick={() => setMenuOpen(false)}>Amenities</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to</p>
          <h1 className="hero-title">Hotel Grand Gayathri</h1>
          <div className="hero-divider">
            <span className="divider-line"></span>
            <span className="diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="hero-tagline">An Oasis of Refined Luxury</p>
          <p className="hero-location">Khammam, Telangana</p>
          <a href="#rooms" className="hero-cta">Discover Our Rooms</a>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms-section">
        <div className="section-header">
          <p className="section-subtitle">Accommodations</p>
          <h2 className="section-title">Our Rooms & Suites</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            Eachroom is a sanctuary of comfort, designed with meticulous attention to detail
            for the most discerning guests.
          </p>
        </div>

        <div className="rooms-grid">
          {/* Presidential Suite */}
          <div className="room-card">
            <div className="room-image presidential">
              <div className="room-overlay">
                <span className="room-label">Presidential</span>
              </div>
            </div>
            <div className="room-info">
              <h3 className="room-name">Presidential Suite</h3>
              <p className="room-desc">
                The crown jewel of our accommodations. Expansive living quarters with
                panoramic views, a private terrace, and bespoke furnishings.
              </p>
              <div className="room-features">
                <span>King Bed</span>
                <span>65 m²</span>
                <span>City View</span>
              </div>
              <div className="room-pricing">
                <span className="price">₹6,499</span>
                <span className="price-note">per night</span>
              </div>
              <a href="#contact" className="book-btn">Reserve</a>
            </div>
          </div>

          {/* Deluxe Room */}
          <div className="room-card">
            <div className="room-image deluxe">
              <div className="room-overlay">
                <span className="room-label">Deluxe</span>
              </div>
            </div>
            <div className="room-info">
              <h3 className="room-name">Deluxe Room</h3>
              <p className="room-desc">
                A harmonious blend of modern comfort and timeless elegance.
                Perfect for those seeking understated luxury.
              </p>
              <div className="room-features">
                <span>Queen Bed</span>
                <span>42 m²</span>
                <span>Garden View</span>
              </div>
              <div className="room-pricing">
                <span className="price">₹3,299</span>
                <span className="price-note">per night</span>
              </div>
              <a href="#contact" className="book-btn">Reserve</a>
            </div>
          </div>

          {/* Superior Room */}
          <div className="room-card">
            <div className="room-image superior">
              <div className="room-overlay">
                <span className="room-label">Superior</span>
              </div>
            </div>
            <div className="room-info">
              <h3 className="room-name">Superior Room</h3>
              <p className="room-desc">
                Thoughtfully appointed with premium linens and curated artworks.
                Comfort elevated to an art form.
              </p>
              <div className="room-features">
                <span>Twin/Queen Bed</span>
                <span>32 m²</span>
                <span>Courtyard View</span>
              </div>
              <div className="room-pricing">
                <span className="price">₹2,499</span>
                <span className="price-note">per night</span>
              </div>
              <a href="#contact" className="book-btn">Reserve</a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="amenities-section">
        <div className="section-header">
          <p className="section-subtitle">Experiences</p>
          <h2 className="section-title">Our Amenities</h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="section-description">
            Every detail has been considered to ensure your stay transcends expectation.
          </p>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="amenity-name">Fine Dining</h3>
            <p className="amenity-desc">
              Indulge in culinary masterpieces crafted by our award-winning chefs,
              featuring locally sourced ingredients and global inspirations.
            </p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 2H16L12 8L8 2Z" />
                <path d="M12 8V22" />
                <path d="M8 14H16" />
                <ellipse cx="12" cy="22" rx="4" ry="1" />
              </svg>
            </div>
            <h3 className="amenity-name">Wine Cellar</h3>
            <p className="amenity-desc">
              Explore our curated collection of over 500 vintage and contemporary wines,
              housed in our temperature-controlled cellar.
            </p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 22C4 17.5817 7.58172 15 12 15C16.4183 15 20 17.5817 20 22" />
                <path d="M18 8L22 4M22 8L18 4" />
              </svg>
            </div>
            <h3 className="amenity-name">Butler Service</h3>
            <p className="amenity-desc">
              Your personal butler is available around the clock to anticipate
              every need, from unpacking to dining reservations.
            </p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12" />
                <path d="M2 16C2 16 5 12 12 12C19 12 22 16 22 16" />
                <path d="M2 20C2 20 5 16 12 16C19 16 22 20 22 20" />
                <circle cx="12" cy="6" r="2" />
              </svg>
            </div>
            <h3 className="amenity-name">Private Pool</h3>
            <p className="amenity-desc">
              Immerse yourself in our pristine infinity pool, surrounded by
              lush landscaping and dedicated poolside service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="section-subtitle">Get in Touch</p>
            <h2 className="section-title">Contact Us</h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="diamond">◆</span>
              <span className="divider-line"></span>
            </div>
            <p className="contact-text">
              We would be delighted to assist you with your reservation or any enquiry.
              Our concierge team is at your service.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <span className="contact-value">Road No. 5, Wyra Road,<br />Khammam, Telangana 507001</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 8742 222 001</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">reservations@grandgayathri.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Reception</span>
                <span className="contact-value">24 Hours</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How may we assist you?"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark">HG</span>
            <span className="brand-fullname">Hotel Grand Gayathri</span>
          </div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            © 2026 Hotel Grand Gayathri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
