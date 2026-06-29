import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="zen-site">
      {/* Navigation */}
      <nav className="zen-nav">
        <div className="nav-logo">
          <span className="om">ॐ</span>
          <span>Sri Sri Sri Excellency</span>
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
      <section id="home" className="hero zen-hero">
        <div className="hero-content">
          <h1 className="zen-hero-title">Peace Within</h1>
          <p className="zen-hero-sub">A serene spiritual retreat in the heart of Khammam</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('rooms')}>
              Book a Stay
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('amenities')}>
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section zen-rooms">
        <div className="container">
          <h2 className="section-title">Tranquil Rooms</h2>
          <p className="section-subtitle">Simple spaces for deep reflection</p>
          <div className="rooms-grid">
            {[
              { name: 'Maha Suite', price: '₹3,299', size: '48 m²', features: ['King Bed', 'Meditation Corner', 'Garden Access'], icon: '🪷' },
              { name: 'Deluxe', price: '₹2,199', size: '34 m²', features: ['Queen Bed', 'Writing Desk', 'Morning Sun'], icon: '🕉️' },
              { name: 'Meditation Room', price: '₹1,699', size: '26 m²', features: ['Floor Cushions', 'Incense Space', 'Minimalist'], icon: '🧘' },
            ].map((room) => (
              <div key={room.name} className="room-card zen-card">
                <div className="room-image zen-room-image">
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
      <section id="amenities" className="section zen-amenities">
        <div className="container">
          <h2 className="section-title">Soulful Amenities</h2>
          <p className="section-subtitle">Nourish your body and spirit</p>
          <div className="amenities-grid">
            {[
              { icon: '🧘', name: 'Meditation Hall', desc: 'Silent meditation in a dedicated sacred space' },
              { icon: '🧘‍♂️', name: 'Yoga Center', desc: 'Daily yoga sessions with experienced instructors' },
              { icon: '🥗', name: 'Organic Kitchen', desc: 'Sattvic meals prepared with fresh, local ingredients' },
              { icon: '🏛️', name: 'Temple View', desc: 'Room overlooks an ancient temple complex' },
              { icon: '📚', name: 'Library', desc: 'Collection of spiritual and philosophical texts' },
              { icon: '🌿', name: 'Herbal Garden', desc: 'Grow your own herbs for tea and healing' },
            ].map((a) => (
              <div key={a.name} className="amenity-card zen-amenity">
                <span className="amenity-icon">{a.icon}</span>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section zen-contact">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Temple Street, Khammam, Telangana 507001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8722 888 999</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>stay@sriguesthouse.in</p>
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
      <footer className="zen-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo-text">ॐ Sri Sri Sri Excellency</span>
              <p>A serene spiritual retreat in Khammam, Telangana</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a onClick={() => scrollTo('rooms')}>Rooms</a>
              <a onClick={() => scrollTo('amenities')}>Amenities</a>
              <a onClick={() => scrollTo('contact')}>Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>+91 8722 888 999</p>
              <p>stay@sriguesthouse.in</p>
              <p>Temple Street, Khammam</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Sri Sri Sri Excellency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
