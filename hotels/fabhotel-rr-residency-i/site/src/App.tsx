import { useState } from 'react'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="hero-section">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">F</span>
            <span className="logo-text">FabHotel RR</span>
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#book" className="book-btn">Book Now</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-badge">Business Travel Redefined</div>
        <h1 className="hero-title">
          Stay Smart.<br />
          <span className="accent">Stay RR.</span>
        </h1>
        <p className="hero-subtitle">
          Experience premium comfort in the heart of the city. 
          Designed for the modern traveler who values efficiency and style.
        </p>
        <div className="hero-cta">
          <a href="#book" className="cta-primary">Book Your Stay</a>
          <a href="#rooms" className="cta-secondary">Explore Rooms</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">2.5K+</span>
            <span className="stat-label">Guests</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">150+</span>
            <span className="stat-label">Rooms</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <div className="image-overlay"></div>
            <div className="image-tag">Premium Suite</div>
          </div>
        </div>
        <div className="floating-card">
          <div className="card-rating">★★★★★</div>
          <div className="card-text">"Exceptional stay, impeccable service"</div>
        </div>
      </div>
    </div>
  )
}

const Rooms = () => {
  const rooms = [
    {
      name: 'Deluxe Room',
      price: '₹2,499',
      size: '28 sqm',
      features: ['King Bed', 'Work Desk', 'Smart TV'],
      tag: null
    },
    {
      name: 'Premium Suite',
      price: '₹4,299',
      size: '42 sqm',
      features: ['King Bed', 'Living Area', 'Minibar'],
      tag: 'Popular'
    },
    {
      name: 'Executive Room',
      price: '₹3,199',
      size: '34 sqm',
      features: ['Queen Bed', 'Lounge Access', 'City View'],
      tag: null
    }
  ]

  return (
    <section id="rooms" className="rooms-section">
      <div className="section-header">
        <span className="section-tag">Accommodations</span>
        <h2>Choose Your Space</h2>
        <p>Every room is designed for comfort, productivity, and a great night's sleep.</p>
      </div>
      <div className="rooms-grid">
        {rooms.map((room, i) => (
          <div key={i} className="room-card">
            {room.tag && <div className="room-tag">{room.tag}</div>}
            <div className="room-image">
              <div className="room-icon">{room.name[0]}</div>
            </div>
            <div className="room-details">
              <h3>{room.name}</h3>
              <div className="room-features">
                {room.features.map((f, j) => (
                  <span key={j} className="feature">{f}</span>
                ))}
              </div>
              <div className="room-footer">
                <div className="room-price">
                  <span className="price">{room.price}</span>
                  <span className="per">/ night</span>
                </div>
                <button className="select-btn">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Amenities = () => {
  const amenities = [
    { icon: 'wifi', name: 'High-Speed WiFi', desc: 'Seamless connectivity everywhere' },
    { icon: 'gym', name: 'Fitness Center', desc: '24/7 state-of-the-art gym' },
    { icon: 'food', name: 'Restaurant', desc: 'Multi-cuisine dining options' },
    { icon: 'parking', name: 'Free Parking', desc: 'Secure valet parking' },
    { icon: 'spa', name: 'Spa & Wellness', desc: 'Rejuvenate your senses' },
    { icon: 'conference', name: 'Conference Rooms', desc: 'Fully equipped meeting spaces' }
  ]

  return (
    <section id="amenities" className="amenities-section">
      <div className="section-header">
        <span className="section-tag">Facilities</span>
        <h2>Everything You Need</h2>
        <p>Thoughtful amenities to make your stay seamless and enjoyable.</p>
      </div>
      <div className="amenities-grid">
        {amenities.map((a, i) => (
          <div key={i} className="amenity-card">
            <div className="amenity-icon">{a.icon[0].toUpperCase()}</div>
            <h3>{a.name}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Location = () => (
  <section id="location" className="location-section">
    <div className="section-header">
      <span className="section-tag">Find Us</span>
      <h2>Prime Location</h2>
      <p>Centrally located with easy access to business districts and landmarks.</p>
    </div>
    <div className="location-content">
      <div className="location-info">
        <div className="info-item">
          <strong>Address</strong>
          <p>Road No 12, Banjara Hills, Hyderabad, Telangana 500034</p>
        </div>
        <div className="info-item">
          <strong>Phone</strong>
          <p>+91 40 1234 5678</p>
        </div>
        <div className="info-item">
          <strong>Email</strong>
          <p>reservations@rrresidency.com</p>
        </div>
      </div>
      <div className="location-map">
        <div className="map-placeholder">
          <span>📍</span>
          <p>Interactive Map</p>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="logo-icon">F</span>
        <span>FabHotel RR Residency</span>
      </div>
      <p>Premium business hotel designed for the modern traveler.</p>
    </div>
    <div className="footer-bottom">
      <span>© 2026 FabHotel RR Residency. All rights reserved.</span>
    </div>
  </footer>
)

function App() {
  return (
    <div className="app">
      <Hero />
      <Rooms />
      <Amenities />
      <Location />
      <Footer />
    </div>
  )
}

export default App
