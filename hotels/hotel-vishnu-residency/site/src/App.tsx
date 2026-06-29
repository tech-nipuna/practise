import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="coastal-site">
      {/* Navigation */}
      <nav className="coastal-nav">
        <div className="nav-logo">Vishnu Residency</div>
        <div className="nav-links">
          {['home', 'rooms', 'amenities', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero coastal-hero">
        <div className="hero-content">
          <h1 className="coastal-hero-title">Coastal Vibes</h1>
          <p className="coastal-hero-sub">Relax by the sea in Khammam's most serene stay</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('rooms')}>
              Book a Room
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('amenities')}>
              Explore
            </button>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section coastal-rooms">
        <div className="container">
          <h2 className="section-title">Sea-Side Stays</h2>
          <p className="section-subtitle">Wake up to the sound of waves</p>
          <div className="rooms-grid">
            {[
              { name: 'Sea View', price: '₹2,299', size: '34 m²', features: ['King Bed', 'Ocean View Balcony', 'Rain Shower'], icon: '🌊' },
              { name: 'Deluxe', price: '₹1,799', size: '30 m²', features: ['Queen Bed', 'Garden View', 'Mini Fridge'], icon: '🏖️' },
              { name: 'Standard', price: '₹1,399', size: '24 m²', features: ['Double Bed', 'AC', 'WiFi'], icon: '⛱️' },
            ].map((room) => (
              <div key={room.name} className="room-card coastal-card">
                <div className="room-image coastal-room-image">
                  <span className="room-icon">{room.icon}</span>
                  <span className="room-size">{room.size}</span>
                </div>
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <ul className="room-features">
                    {room.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                  <div className="room-book">
                    <span className="room-price">{room.price}<small>/night</small></span>
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section coastal-amenities">
        <div className="container">
          <h2 className="section-title">Beachside Amenities</h2>
          <p className="section-subtitle">Everything you need for a perfect coastal getaway</p>
          <div className="amenities-grid">
            {[
              { icon: '🍹', name: 'Beach Cafe', desc: 'Fresh seafood and chilled drinks by the shore' },
              { icon: '🏊', name: 'Swimming Pool', desc: 'Infinity pool overlooking the horizon' },
              { icon: '🏄', name: 'Surf Shack', desc: 'Equipment rental and lessons for all levels' },
              { icon: '🔥', name: 'Bonfire Nights', desc: 'Evening bonfire with music and stories' },
              { icon: '🧖', name: 'Spa & Massage', desc: 'Relaxing treatments with ocean sounds' },
              { icon: '🎣', name: 'Fishing Trips', desc: 'Early morning fishing excursions' },
            ].map((a) => (
              <div key={a.name} className="amenity-card coastal-amenity">
                <span className="amenity-icon">{a.icon}</span>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section coastal-contact">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Beach Road, Khammam, Telangana 507001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8722 666 777</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>stay@vishnuresidency.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Check-in / Check-out</h4>
                  <p>Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send an Enquiry</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Your Message" rows={4}></textarea>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="coastal-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo-text">Vishnu Residency</span>
              <p>Coastal vibes in Khammam, Telangana</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a onClick={() => scrollTo('rooms')}>Rooms</a>
              <a onClick={() => scrollTo('amenities')}>Amenities</a>
              <a onClick={() => scrollTo('contact')}>Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>+91 8722 666 777</p>
              <p>stay@vishnuresidency.in</p>
              <p>Beach Road, Khammam</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Hotel Vishnu Residency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
