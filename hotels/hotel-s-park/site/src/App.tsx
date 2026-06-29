import { useState } from 'react';

/* ───── Mid-century SVG motifs ───── */
function StarBurst({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <polygon points="50,0 58,40 100,50 58,60 50,100 42,60 0,50 42,40" />
    </svg>
  );
}

function Atomic({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3">
      <ellipse cx="100" cy="100" rx="90" ry="30" />
      <ellipse cx="100" cy="100" rx="90" ry="30" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="90" ry="30" transform="rotate(120 100 100)" />
      <circle cx="100" cy="100" r="12" fill="currentColor" />
    </svg>
  );
}

function Boomerang({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="currentColor">
      <path d="M10 70 Q60 10 110 70 L95 65 Q60 25 25 65 Z" />
    </svg>
  );
}

function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`retro-divider ${className}`}>
      <span /><span /><span /><span /><span />
    </div>
  );
}

/* ───── Page sections ───── */
function Hero() {
  return (
    <section className="hero">
      <Atomic className="atomic-bg atomic-1" />
      <Atomic className="atomic-bg atomic-2" />
      <StarBurst className="star-burst star-1" />
      <StarBurst className="star-burst star-2" />
      <Boomerang className="boomerang bmg-1" />

      <div className="hero-sign">
        <div className="sign-curve" />
        <h1 className="hotel-name">
          <span className="letter">H</span>
          <span className="letter">o</span>
          <span className="letter">t</span>
          <span className="letter">e</span>
          <span className="letter">l</span>
          &nbsp;
          <span className="letter">S</span>
          <span className="letter dot">•</span>
          <span className="letter">P</span>
          <span className="letter">a</span>
          <span className="letter">r</span>
          <span className="letter">k</span>
        </h1>
        <p className="tagline">★ &nbsp; Stay Retro. Stay Happy. &nbsp; ★</p>
      </div>

      <p className="location">
        📍 Khammam, Telangana
      </p>
      <a href="#rooms" className="btn-retro">View Rooms&nbsp;→</a>
    </section>
  );
}

const rooms = [
  { name: 'Retro Suite', price: '₹2,499', perks: ['King Bed', 'Hill View', 'Mini Bar', 'Retro Tub'], accent: 'coral' },
  { name: 'Deluxe', price: '₹1,899', perks: ['Queen Bed', 'Balcony', 'AC', 'Coffee Maker'], accent: 'teal' },
  { name: 'Standard', price: '₹1,499', perks: ['Double Bed', 'WiFi', 'TV', 'Hot Shower'], accent: 'wheat' },
];

function Rooms() {
  return (
    <section id="rooms" className="rooms">
      <h2 className="section-title">Our Rooms</h2>
      <p className="section-sub">Pick your vibe — every room is a time machine.</p>
      <Divider />
      <div className="rooms-grid">
        {rooms.map((r) => (
          <div key={r.name} className={`room-card room-${r.accent}`}>
            <div className="room-badge">{r.name}</div>
            <div className="room-icon">
              {r.accent === 'coral' && '🏨'}
              {r.accent === 'teal' && '🛏️'}
              {r.accent === 'wheat' && '🪟'}
            </div>
            <div className="room-price">{r.price}<span>/night</span></div>
            <ul className="room-perks">
              {r.perks.map((p) => (
                <li key={p}>✔ {p}</li>
              ))}
            </ul>
            <button className="btn-small">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const amenities = [
  { icon: '☕', title: 'Vintage Cafe', desc: 'Pour-over coffee, cold brews & retro pastries in a 60s-style diner.' },
  { icon: '🎵', title: 'Record Player Lounge', desc: 'Spin vinyl on our turntable — cherry-picked LPs from every era.' },
  { icon: '🕹️', title: 'Retro Games', desc: 'Arcade cabinets, pinball & board games to unplug and unwind.' },
  { icon: '🌿', title: 'Garden Patio', desc: 'Lush greenery, fairy lights & monochrome tiles for sundowners.' },
];

function Amenities() {
  return (
    <section id="amenities" className="amenities">
      <h2 className="section-title">Amenities</h2>
      <p className="section-sub">Everything you need for a groovy getaway.</p>
      <Divider />
      <div className="amenities-grid">
        {amenities.map((a) => (
          <div key={a.title} className="amenity-card">
            <div className="amenity-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-sub">We'd love to hear from you — send a postcard or drop a note.</p>
      <Divider />

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-block">
            <span className="info-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>MG Road, Khammam<br />Telangana 507001</p>
            </div>
          </div>
          <div className="info-block">
            <span className="info-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 8712 224 567</p>
            </div>
          </div>
          <div className="info-block">
            <span className="info-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>hello@hotels-park.in</p>
            </div>
          </div>
          <div className="info-block">
            <span className="info-icon">🕐</span>
            <div>
              <strong>Check-in / Check-out</strong>
              <p>2:00 PM / 11:00 AM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-success">
              <StarBurst className="success-star" />
              <h3>Thanks, {form.name || 'friend'}!</h3>
              <p>We'll get back to you faster than a jukebox plays your favourite song.</p>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="btn-retro">Send Message →</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-decor">
        <Boomerang className="footer-boomerang" />
      </div>
      <h3>Hotel S Park</h3>
      <p>★ &nbsp; A retro escape in the heart of Khammam &nbsp; ★</p>
      <p className="copyright">© 2026 Hotel S Park. All rights reserved.</p>
    </footer>
  );
}

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">S • Park</div>
      <ul>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

/* ───── App ───── */
export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <Hero />
      <Rooms />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
}
