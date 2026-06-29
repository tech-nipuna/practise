function App() {
  return (
    <div className="art-deco-hotel">
      {/* ===== HERO SECTION ===== */}
      <header className="hero">
        <div className="hero-pattern-left" aria-hidden="true">
          <div className="deco-line"></div>
          <div className="deco-diamond"></div>
          <div className="deco-line"></div>
          <div className="deco-diamond"></div>
          <div className="deco-line"></div>
        </div>

        <div className="hero-content">
          <div className="hero-top-bar">
            <span className="hero-star">�</span>
            <span className="hero-est">EST. 2024</span>
            <span className="hero-star">✦</span>
          </div>

          <div className="hero-fan-border" aria-hidden="true">
            <div className="fan-ray fan-ray-1"></div>
            <div className="fan-ray fan-ray-2"></div>
            <div className="fan-ray fan-ray-3"></div>
            <div className="fan-ray fan-ray-4"></div>
            <div className="fan-ray fan-ray-5"></div>
          </div>

          <h1 className="hotel-name">
            <span className="hotel-name-line1">Hotel JBS</span>
            <span className="hotel-name-line2">Minerva Grand</span>
          </h1>

          <div className="hero-divider" aria-hidden="true">
            <span className="divider-angle left"></span>
            <span className="divider-diamond"></span>
            <span className="divider-angle right"></span>
          </div>

          <p className="hero-tagline">Where Elegance Meets Timeless Luxury</p>
          <p className="hero-location">Khammam, Telangana</p>
        </div>

        <div className="hero-pattern-right" aria-hidden="true">
          <div className="deco-line"></div>
          <div className="deco-diamond"></div>
          <div className="deco-line"></div>
          <div className="deco-diamond"></div>
          <div className="deco-line"></div>
        </div>

        <div className="hero-bottom-chevron" aria-hidden="true">
          <div className="chevron chevron-1"></div>
          <div className="chevron chevron-2"></div>
          <div className="chevron chevron-3"></div>
        </div>
      </header>

      {/* ===== NAVIGATION ===== */}
      <nav className="main-nav">
        <div className="nav-inner">
          <span className="nav-brand">JBS</span>
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ===== ROOMS SECTION ===== */}
      <section id="rooms" className="section rooms-section">
        <div className="section-header">
          <h2 className="section-title">Accommodations</h2>
          <div className="section-divider" aria-hidden="true">
            <span className="divider-line"></span>
            <span className="divider-icon">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">Indulge in our meticulously designed rooms & suites</p>
        </div>

        <div className="rooms-grid">
          {/* Grand Suite */}
          <div className="room-card room-card-featured">
            <div className="room-card-corner top-left"></div>
            <div className="room-card-corner top-right"></div>
            <div className="room-card-corner bottom-left"></div>
            <div className="room-card-corner bottom-right"></div>
            <div className="room-badge">SIGNATURE</div>
            <div className="room-icon" aria-hidden="true">
              <div className="room-icon-frame">
                <span>�</span>
              </div>
            </div>
            <h3 className="room-name">Grand Suite</h3>
            <div className="room-features">
              <span>King Bed</span>
              <span>City View</span>
              <span>Butler Service</span>
              <span>Living Area</span>
            </div>
            <div className="room-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">4,999</span>
              <span className="price-night">/night</span>
            </div>
            <button className="book-btn">Reserve</button>
          </div>

          {/* Deluxe */}
          <div className="room-card">
            <div className="room-card-corner top-left"></div>
            <div className="room-card-corner top-right"></div>
            <div className="room-card-corner bottom-left"></div>
            <div className="room-card-corner bottom-right"></div>
            <div className="room-icon" aria-hidden="true">
              <div className="room-icon-frame">
                <span>◆</span>
              </div>
            </div>
            <h3 className="room-name">Deluxe Room</h3>
            <div className="room-features">
              <span>Queen Bed</span>
              <span>Garden View</span>
              <span>Balcony</span>
              <span>Mini Bar</span>
            </div>
            <div className="room-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">2,999</span>
              <span className="price-night">/night</span>
            </div>
            <button className="book-btn">Reserve</button>
          </div>

          {/* Classic */}
          <div className="room-card">
            <div className="room-card-corner top-left"></div>
            <div className="room-card-corner top-right"></div>
            <div className="room-card-corner bottom-left"></div>
            <div className="room-card-corner bottom-right"></div>
            <div className="room-icon" aria-hidden="true">
              <div className="room-icon-frame">
                <span>✦</span>
              </div>
            </div>
            <h3 className="room-name">Classic Room</h3>
            <div className="room-features">
              <span>Twin Beds</span>
              <span>Cozy Interiors</span>
              <span>Workspace</span>
              <span>Stream TV</span>
            </div>
            <div className="room-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">2,199</span>
              <span className="price-night">/night</span>
            </div>
            <button className="book-btn">Reserve</button>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES SECTION ===== */}
      <section id="amenities" className="section amenities-section">
        <div className="section-header">
          <h2 className="section-title">Amenities</h2>
          <div className="section-divider" aria-hidden="true">
            <span className="divider-line"></span>
            <span className="divider-icon">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className="section-subtitle">Experience the grandeur of our World-class facilities</p>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-border" aria-hidden="true"></div>
            <div className="amenity-icon">
              <div className="amenity-icon-deco">
                <span>�</span>
              </div>
            </div>
            <h3 className="amenity-name">Grand Ballroom</h3>
            <p className="amenity-desc">
              An opulent 5,000 sq ft venue with soaring ceilings, crystal chandeliers, and intricate Art Deco detailing — perfect for galas and celebrations.
            </p>
            <div className="amenity-line" aria-hidden="true"></div>
          </div>

          <div className="amenity-card">
            <div className="amenity-border" aria-hidden="true"></div>
            <div className="amenity-icon">
              <div className="amenity-icon-deco">
                <span>�</span>
              </div>
            </div>
            <h3 className="amenity-name">Art Deco Bar</h3>
            <p className="amenity-desc">
              Sip handcrafted cocktails amid geometric murals, velvet seating, and the warm glow of 1920s-inspired brass lighting.
            </p>
            <div className="amenity-line" aria-hidden="true"></div>
          </div>

          <div className="amenity-card">
            <div className="amenity-border" aria-hidden="true"></div>
            <div className="amenity-icon">
              <div className="amenity-icon-deco">
                <span>◈</span>
              </div>
            </div>
            <h3 className="amenity-name">Concierge</h3>
            <p className="amenity-desc">
              Our dedicated concierge team curates bespoke experiences — from heritage walks in Khammam to private dining arrangements.
            </p>
            <div className="amenity-line" aria-hidden="true"></div>
          </div>

          <div className="amenity-card">
            <div className="amenity-border" aria-hidden="true"></div>
            <div className="amenity-icon">
              <div className="amenity-icon-deco">
                <span>◈</span>
              </div>
            </div>
            <h3 className="amenity-name">Valet Service</h3>
            <p className="amenity-desc">
              Complimentary valet parking with white-glove service ensures a seamless arrival and departure for every distinguished guest.
            </p>
            <div className="amenity-line" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider" aria-hidden="true">
            <span className="divider-line"></span>
            <span className="divider-icon">◆</span>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-block">
              <h3 className="contact-label">Address</h3>
              <p>Hotel JBS Minerva Grand</p>
              <p>Near Bus Stand Road, Khammam</p>
              <p>Telangana 507001, India</p>
            </div>
            <div className="contact-block">
              <h3 className="contact-label">Phone</h3>
              <p>+91 8742 222 555</p>
              <p>Toll Free: 1800-MINERVA</p>
            </div>
            <div className="contact-block">
              <h3 className="contact-label">Email</h3>
              <p>reservations@jbsminervagrand.com</p>
            </div>
          </div>

          <div className="contact-deco">
            <div className="contact-deco-frame">
              <span className="deco-symbol">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-pattern" aria-hidden="true"></div>
        <div className="footer-content">
          <p className="footer-brand">Hotel JBS Minerva Grand</p>
          <p className="footer-text">Khammam, Telangana — A Legacy of Luxury</p>
          <div className="footer-divider" aria-hidden="true">
            <span>◆</span>
          </div>
          <p className="footer-copy">© 2024 Hotel JBS Minerva Grand. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
