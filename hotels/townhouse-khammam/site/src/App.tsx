import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="th-site">
      {/* Navigation */}
      <nav className="th-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">◼</span>
            <span className="logo-text">TOWNHOUSE</span>
          </div>
          <div className="nav-links">
            {['home', 'rooms', 'amenities', 'contact'].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`nav-link ${activeSection === s ? 'active' : ''}`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero th-hero">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="scroll-line"></span>
            <span className="section-tag">KHAMMAM &mdash; TELANGANA</span>
          </div>
          <h1 className="th-hero-title">
            <span className="title-line1">Urban</span>
            <span className="title-line2">Loft <span className="gold">Hotel</span></span>
          </h1>
          <p className="th-hero-sub">Raw concrete meets modern design in the heart of the city</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('rooms')}>
              BOOK NOW
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('amenities')}>
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section rooms th-rooms">
        <div className="rooms-container">
          <div className="section-header">
            <span className="section-tag">ACCOMMODATIONS</span>
            <h2 className="section-title">Industrial Comfort</h2>
            <div className="divider-line"></div>
          </div>
          <div className="rooms-grid">
            {[
              { name: 'Loft Suite', price: '₹2,799', size: '42 m²', badge: 'POPULAR', features: ['King Bed', 'Exposed Brick Wall', 'City View', 'Mini Bar'], type: 'loft-suite' },
              { name: 'Studio', price: '₹1,799', size: '30 m²', features: ['Queen Bed', 'Workstation', 'Concrete Floor', 'Smart TV'], type: '' },
              { name: 'Pod Room', price: '₹1,299', size: '18 m²', badge: 'BUDGET', features: ['Single Bed', 'Compact', 'WiFi', 'LED Lighting'], type: 'pod-room' },
            ].map((room) => (
              <div key={room.name} className="room-card">
                <div className={`room-image ${room.type}`}>
                  <div className="room-image-overlay"></div>
                  <span className="room-size-badge">{room.size}</span>
                  {room.badge && <span className="room-badge">{room.badge}</span>}
                </div>
                <div className="room-info">
                  <h3 className="room-name">{room.name}</h3>
                  <ul className="room-features">
                    {room.features.map((f) => (
                      <li key={f}>◆ {f}</li>
                    ))}
                  </ul>
                  <div className="room-price-row">
                    <div className="room-price">
                      <span className="price-currency">₹</span>
                      <span className="price-amount">{room.price.replace('₹', '')}</span>
                      <span className="price-night">/night</span>
                    </div>
                    <button className="btn btn-small">BOOK</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section amenities th-amenities">
        <div className="amenities-container">
          <div className="section-header">
            <span className="section-tag">AMENITIES</span>
            <h2 className="section-title">Everything You Need</h2>
            <div className="divider-diamond">◆</div>
          </div>
          <div className="amenities-grid">
            {[
              { icon: '🍺', name: 'Rooftop Bar', desc: 'Craft beer and cocktails under the open sky', hours: '6 PM – 12 AM' },
              { icon: '💼', name: 'Co-working Space', desc: 'High-speed WiFi, desks, and private booths', hours: '24/7' },
              { icon: '🍻', name: 'Craft Beer', desc: 'Local microbrews on tap, rotating selection', hours: '2 PM – 12 AM' },
              { icon: '🎵', name: 'Live Music', desc: 'Indie bands and DJ nights every weekend', hours: 'Fri – Sat' },
              { icon: '🏋️', name: 'Gym', desc: 'Full-weight setup for serious workouts', hours: '5 AM – 10 PM' },
              { icon: '☕', name: 'Cafe 24', desc: 'All-day coffee, brunch, and workspace', hours: '24/7' },
            ].map((a) => (
              <div key={a.name} className="amenity-card">
                <div className="amenity-icon-wrap">
                  <span className="amenity-icon">{a.icon}</span>
                </div>
                <h3 className="amenity-name">{a.name}</h3>
                <p className="amenity-desc">{a.desc}</p>
                <span className="amenity-hours">{a.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact th-contact">
        <div className="contact-container">
          <div className="section-header">
            <span className="section-tag">CONTACT</span>
            <h2 className="section-title">Find Us</h2>
            <div className="divider-line"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Bypass Road, Khammam, Telangana 507001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8722 111 222</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@townhousekhammam.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Check-in / Check-out</h4>
                  <p>Check-in: 1:00 PM | Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap">
              <div className="contact-form">
                <h3>Send an Enquiry</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="tel" placeholder="Phone Number" />
                  <textarea placeholder="Your Message" rows={4}></textarea>
                  <button type="submit" className="btn btn-primary btn-full">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer th-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo-text">TOWNHOUSE</div>
              <p className="footer-tagline">Urban living in Khammam, Telangana</p>
              <div className="footer-social">
                <span>Instagram</span>
                <span>Twitter</span>
                <span>Facebook</span>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a onClick={() => scrollTo('rooms')}>Rooms</a>
              <a onClick={() => scrollTo('amenities')}>Amenities</a>
              <a onClick={() => scrollTo('contact')}>Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>+91 8722 111 222</p>
              <p>hello@townhousekhammam.in</p>
              <p>Bypass Road, Khammam</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Townhouse Khammam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
