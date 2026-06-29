import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="eco-site">
      {/* Navigation */}
      <nav className="eco-nav">
        <div className="nav-logo">
          <span className="leaf-icon">🌿</span>
          <span>Hotel Greenland</span>
        </div>
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
      <section id="home" className="hero eco-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="eco-hero-title">Where Nature Embraces You</h1>
          <p className="eco-hero-sub">An eco-conscious retreat nestled in the heart of Khammam</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('rooms')}>
              Explore Rooms
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('amenities')}>
              Discover More
            </button>
          </div>
          <div className="eco-stats">
            <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Solar Powered</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Tree Species</span>
          </div>
          <div className="stat">
            <span className="stat-number">★ 4.8</span>
            <span className="stat-label">Guest Rating</span>
          </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section eco-rooms">
        <div className="container">
          <h2 className="section-title">Our Rooms</h2>
          <p className="section-subtitle">Sustainable comfort surrounded by greenery</p>
          <div className="rooms-grid">
            {[
              { name: 'Garden View', price: '₹1,999', size: '32 m²', features: ['King Bed', 'Garden View', 'Rain Shower'], icon: '🌳' },
              { name: 'Eco Cabin', price: '₹2,499', size: '38 m²', features: ['Queen Bed', 'Private Deck', 'Composting Toilet'], icon: '🏡' },
              { name: 'Forest Suite', price: '₹3,499', size: '52 m²', features: ['King Bed', 'Living Area', 'Forest Panorama'], icon: '🌲' },
            ].map((room) => (
              <div key={room.name} className="room-card eco-card">
                <div className="room-image eco-room-image">
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
      <section id="amenities" className="section eco-amenities">
        <div className="container">
          <h2 className="section-title">Eco Amenities</h2>
          <p className="section-subtitle">Experience sustainable luxury</p>
          <div className="amenities-grid">
            {[
              { icon: '🍽️', name: 'Organic Restaurant', desc: 'Farm-to-table dining with ingredients from our garden' },
              { icon: '🥾', name: 'Nature Trail', desc: 'Guided walks through 5 acres of preserved forest' },
              { icon: '💧', name: 'Rainwater Harvesting', desc: '100% of water needs met through sustainable collection' },
              { icon: '☀️', name: 'Solar Power', desc: 'Fully solar-powered with zero carbon footprint' },
              { icon: '🌺', name: 'Medicinal Garden', desc: '50+ species of medicinal plants and herbs' },
              { icon: '🧘', name: 'Open-Air Yoga', desc: 'Daily yoga sessions in the garden pavilion' },
            ].map((a) => (
              <div key={a.name} className="amenity-card eco-amenity">
                <span className="amenity-icon">{a.icon}</span>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section eco-contact">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Road No. 1, Khammam, Telangana 507001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8722 222 333</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>stay@hotelgreenland.in</p>
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
      <footer className="eco-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="leaf-icon">🌿</span>
              <span className="footer-logo-text">Hotel Greenland</span>
              <p>An eco-conscious retreat in Khammam, Telangana</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a onClick={() => scrollTo('rooms')}>Rooms</a>
              <a onClick={() => scrollTo('amenities')}>Amenities</a>
              <a onClick={() => scrollTo('contact')}>Contact</a>
            </div>
            <div className="footer-eco">
              <h4>Eco Certifications</h4>
              <span>🌱 Green Key Certified</span>
              <span>☀️ 100% Solar</span>
              <span>💧 Zero Water Waste</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Hotel Greenland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
