function App() {
  return (
    <div className="site">
      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="nav-ornament">&#10022;</span>
            <span className="nav-logo">Gupta's Konark</span>
            <span className="nav-ornament">&#10022;</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-top-ornament">
            <span className="orn-line"></span>
            <span className="orn-diamond">&#9670;</span>
            <span className="orn-line"></span>
          </div>
          <p className="hero-tagline">Welcome to</p>
          <h1 className="hero-title">Gupta's Konark Hotel</h1>
          <p className="hero-subtitle">Khammam, Telangana</p>
          <div className="hero-divider">
            <span className="div-line"></span>
            <span className="div-icon">&#9733;</span>
            <span className="div-line"></span>
          </div>
          <p className="hero-desc">
            Experience the grandeur of timeless Indian hospitality, where
            regal traditions meet modern comfort in the heart of Telangana.
          </p>
          <a href="#rooms" className="hero-btn">
            Explore Our Rooms
          </a>
        </div>
      </section>

      {/* ========== ORNATE BAND ========== */}
      <div className="ornate-band">
        <span className="band-sep"></span>
        <span className="band-motive">&#10070; &#9733; &#10070;</span>
        <span className="band-sep"></span>
      </div>

      {/* ========== ROOMS ========== */}
      <section id="rooms" className="rooms-section">
        <div className="section-header">
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
          <h2 className="section-title">Accommodations</h2>
          <p className="section-subtitle">
            Live like royalty in our heritage-inspired chambers
          </p>
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
        </div>

        <div className="rooms-grid">
          {/* Deluxe */}
          <div className="room-card">
            <div className="room-img deluxe-img">
              <div className="room-img-label">Deluxe Room</div>
            </div>
            <div className="room-body">
              <h3 className="room-name">Deluxe Room</h3>
              <p className="room-desc">
                Elegant comfort with hand-carved wooden accents and heritage
                textiles. Perfect for the discerning traveller.
              </p>
              <ul className="room-features">
                <li>&#10003; King-size bed</li>
                <li>&#10003; Heritage decor</li>
                <li>&#10003; Garden view</li>
                <li>&#10003; Complimentary breakfast</li>
              </ul>
              <div className="room-footer">
                <div className="room-price">
                  <span className="price-cur">&#8377;</span>
                  <span className="price-val">2,299</span>
                  <span className="price-night"> /night</span>
                </div>
                <a href="#contact" className="room-book-btn">Book Now</a>
              </div>
            </div>
          </div>

          {/* Suite */}
          <div className="room-card featured">
            <div className="room-badge">Popular</div>
            <div className="room-img suite-img">
              <div className="room-img-label">Suite</div>
            </div>
            <div className="room-body">
              <h3 className="room-name">Suite</h3>
              <p className="room-desc">
                The crown jewel of our hotel — a sprawling suite with ornate
                jharokha windows, a private lounge, and royal amenities.
              </p>
              <ul className="room-features">
                <li>&#10003; Separate living area</li>
                <li>&#10003; Jharokha windows</li>
                <li>&#10003; Courtyard view</li>
                <li>&#10003; Butler service</li>
                <li>&#10003; Spa credits included</li>
              </ul>
              <div className="room-footer">
                <div className="room-price">
                  <span className="price-cur">&#8377;</span>
                  <span className="price-val">3,999</span>
                  <span className="price-night"> /night</span>
                </div>
                <a href="#contact" className="room-book-btn gold">Book Now</a>
              </div>
            </div>
          </div>

          {/* Heritage Room */}
          <div className="room-card">
            <div className="room-img heritage-img">
              <div className="room-img-label">Heritage Room</div>
            </div>
            <div className="room-body">
              <h3 className="room-name">Heritage Room</h3>
              <p className="room-desc">
                Immerse in Kalinga-era motifs, hand-block printed fabrics,
                and artisan-crafted furniture celebrating our legacy.
              </p>
              <ul className="room-features">
                <li>&#10003; Artisan furniture</li>
                <li>&#10003; Temple-view balcony</li>
                <li>&#10003; Traditional textiles</li>
                <li>&#10003; Welcome thali</li>
              </ul>
              <div className="room-footer">
                <div className="room-price">
                  <span className="price-cur">&#8377;</span>
                  <span className="price-val">2,799</span>
                  <span className="price-night"> /night</span>
                </div>
                <a href="#contact" className="room-book-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ORNATE BAND ========== */}
      <div className="ornate-band">
        <span className="band-sep"></span>
        <span className="band-motive">&#10070; &#9733; &#10070;</span>
        <span className="band-sep"></span>
      </div>

      {/* ========== AMENITIES ========== */}
      <section id="amenities" className="amenities-section">
        <div className="section-header">
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
          <h2 className="section-title">Amenities</h2>
          <p className="section-subtitle">
            Indulge in a world of regal experiences
          </p>
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon">&#9733;</div>
            <h3 className="amenity-name">Traditional Restaurant</h3>
            <p className="amenity-desc">
              Savor authentic Telangana and North-Indian cuisine prepared by
              master chefs in a regal thali dining experience.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">&#9733;</div>
            <h3 className="amenity-name">Courtyard</h3>
            <p className="amenity-desc">
              A serene central courtyard with Mughal-style gardens, a
              water fountain, and open-air seating under the stars.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">&#9733;</div>
            <h3 className="amenity-name">Temple View</h3>
            <p className="amenity-desc">
              Wake up to a breathtaking view of a nearby heritage temple — a
              truly spiritual sunrise every morning.
            </p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">&#9733;</div>
            <h3 className="amenity-name">Ayurvedic Spa</h3>
            <p className="amenity-desc">
              Rejuvenate body and soul with ancient Ayurvedic therapies,
              herbal oils, and holistic wellness rituals.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ORNATE BAND ========== */}
      <div className="ornate-band">
        <span className="band-sep"></span>
        <span className="band-motive">&#10070; &#9733; &#10070;</span>
        <span className="band-sep"></span>
      </div>

      {/* ========== CONTACT / MAP ========== */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
          We look forward to welcoming you
          </p>
          <div className="sec-orn-group">
            <span className="sec-line"></span>
            <span className="sec-diamond">&#9670;</span>
            <span className="sec-line"></span>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-entry">
              <span className="info-icon">&#9878;</span>
              <div className="info-text">
                <h4>Address</h4>
                <p>
                  Gupta's Konark Hotel,<br />
                  Near Bus Stand Road,<br />
                  Khammam, Telangana 507001
                </p>
              </div>
            </div>
            <div className="info-entry">
              <span className="info-icon">&#9742;</span>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 8742 222 555</p>
              </div>
            </div>
            <div className="info-entry">
              <span className="info-icon">&#9993;</span>
              <div className="info-text">
                <h4>Email</h4>
                <p>reservations@guptas-konark-hotel.com</p>
              </div>
            </div>
            <div className="info-entry">
              <span className="info-icon">&#9200;</span>
              <div className="info-text">
                <h4>Check-in / Check-out</h4>
                <p>2:00 PM &nbsp;|&nbsp; 11:00 AM</p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8!2d80.15!3d17.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zE7EwczE1JzAwLjAiTiA4MMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="site-footer">
        <div className="footer-top">
          <span className="foot-line"></span>
          <span className="foot-diamond">&#9670;</span>
          <span className="foot-line"></span>
        </div>
        <div className="footer-content">
          <div className="foot-name">Gupta's Konark Hotel</div>
          <p className="foot-tagline">
            Regal Heritage &middot; Timeless Hospitality
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="foot-copy">
            &copy; 2025 Gupta's Konark Hotel, Khammam, Telangana. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
