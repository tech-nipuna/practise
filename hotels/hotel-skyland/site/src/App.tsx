import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sky-site">
      {/* Navigation */}
      <nav className="sky-nav">
        <div className="nav-logo">
          <span>☁️</span>
          <span>Hotel Skyland</span>
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
      <section id="home" className="hero sky-hero">
        <div className="cloud-shape cloud-1"></div>
        <div className="cloud-shape cloud-2"></div>
        <div className="cloud-shape cloud-3"></div>
        <div className="hero-content">
          <h1 className="sky-hero-title">Reach for the Sky</h1>
          <p className="sky-hero-sub">Elevated experiences in the heart of Khammam</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('rooms')}>
              View Rooms
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('amenities')}>
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section sky-rooms">
        <div className="container">
          <h2 className="section-title">Sky-High Comfort</h2>
          <p className="section-subtitle">Every room comes with a view</p>
          <div className="rooms-grid">
            {[
              { name: 'Cloud Suite', price: '₹2,799', size: '45 m²', features: ['King Bed', 'Panoramic View', 'Jacuzzi'], icon: '⛅' },
              { name: 'Sky View', price: '₹2,199', size: '36 m²', features: ['Queen Bed', 'Balcony', 'Skyline View'], icon: '🌤️' },
              { name: 'Standard', price: '₹1,799', size: '28 m²', features: ['Double Bed', 'Work Desk', 'WiFi'], icon: '☀️' },
            ].map((room) => (
              <div key={room.name} className="room-card sky-card">
                <div className="room-image sky-room-image">
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
      <section id="amenities" className="section sky-amenities">
        <div className="container">
          <h2 className="section-title">Above & Beyond</h2>
          <p className="section-subtitle">Premium amenities for an elevated stay</p>
          <div className="amenities-grid">
            {[
              { icon: '🍸', name: 'Rooftop Lounge', desc: 'Sip cocktails under the stars on our rooftop terrace' },
              { icon: '🍹', name: 'Sky Bar', desc: 'Craft cocktails with panoramic city views' },
              { icon: '🏊', name: 'Infinity Pool', desc: 'Rooftop infinity pool overlooking Khammam' },
              { icon: '🚗', name: 'Airport Shuttle', desc: 'Complimentary pickup and drop service' },
              { icon: '💼', name: 'Conference Room', desc: 'State-of-the-art meeting spaces for business' },
              { icon: '🌅', name: 'Sunrise Yoga', desc: 'Morning yoga sessions on the rooftop deck' },
            ].map((a) => (
              <div key={a.name} className="amenity-card sky-amenity">
                <span className="amenity-icon">{a.icon}</span>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section sky-contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Aerodrome Road, Khammam, Telangana 507001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8722 444 555</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@hotelskyland.in</p>
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
      <footer className="sky-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo-text">☁️ Hotel Skyland</span>
              <p>Elevated experiences in Khammam, Telangana</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a onClick={() => scrollTo('rooms')}>Rooms</a>
              <a onClick={() => scrollTo('amenities')}>Amenities</a>
              <a onClick={() => scrollTo('contact')}>Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>+91 8722 444 555</p>
              <p>hello@hotelskyland.in</p>
              <p>Aerodrome Road, Khammam</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Hotel Skyland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
