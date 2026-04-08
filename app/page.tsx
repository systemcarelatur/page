import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo-container">
            {/* The user provided a logo image which should be placed in public/logo.png */}
            <div className="tron-font" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--neon-red)', fontSize: '1.5rem', fontWeight: 'bold' }}>
              <img src="/logotr.png" alt="System Care Logo" style={{ height: '45px', objectFit: 'contain' }} />
              System Care
            </div>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link tron-font">Home</a>
            <a href="#services" className="nav-link tron-font">Services</a>
            <a href="#videos" className="nav-link tron-font">Videos</a>
            <a href="#contact" className="nav-link tron-font">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-video-bg">
          <iframe
            src="https://www.youtube.com/embed/VCeGBYweCac?autoplay=1&mute=1&loop=1&playlist=VCeGBYweCac&controls=0&showinfo=0&rel=0"
            title="Background Video"
            allow="autoplay; encrypted-media"
            frameBorder="0">
          </iframe>
        </div>
        <div className="hero-content-wrapper">
          <h1 className="hero-main-title tron-font">
            SYSTEM CARE <span className="highlight-red">LATUR</span>
          </h1>
          <div className="hero-subtext-container">
            <p className="hero-subtext">The Solutions You Need - Professional Laptop Repair</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <a href="#contact" className="tron-btn tron-font">Get Repair Quote</a>
            <a href="https://www.youtube.com/@systemcarelaturlaptoprepair" target="_blank" rel="noreferrer" className="tron-btn tron-font" style={{ marginLeft: '20px', borderColor: '#ff0000', color: '#fff' }}>
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container section">
        <h2 className="tron-title tron-font" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>Our Services</h2>
        <div className="cards-grid">

          <div className="tron-card service-card float-anim" style={{ animationDelay: '0s' }}>
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
            </div>
            <h3 className="card-title tron-font">Laptop Repair</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Complete diagnostic and hardware repairs for all major laptop brands. Screen replacement, keyboard fixes, and motherboard repairs.
            </p>
            <div className="card-scanner"></div>
          </div>

          <div className="tron-card service-card float-anim" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                <path d="M6.5 13a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>
            <h3 className="card-title tron-font">Desktop Solutions</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Custom PC builds, hardware upgrades, and troubleshooting for desktop systems to handle heavy lifting and gaming.
            </p>
            <div className="card-scanner"></div>
          </div>

          <div className="tron-card service-card float-anim" style={{ animationDelay: '0.4s' }}>
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </div>
            <h3 className="card-title tron-font">Software & OS</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Windows installation, virus removal, data recovery, and system optimization for smooth and fast performance.
            </p>
            <div className="card-scanner"></div>
          </div>

          <div className="tron-card service-card float-anim" style={{ animationDelay: '0.6s' }}>
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.667-.049z" />
                <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704a.518.518 0 0 0-.1.75.573.573 0 0 0 .613.057A5.5 5.5 0 0 1 8 10c.895 0 1.746.213 2.508.591.22.108.483.076.613-.057zM8 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </div>
            <h3 className="card-title tron-font">Networking</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Router configuration, network troubleshooting, and security setups for home and office environments.
            </p>
            <div className="card-scanner"></div>
          </div>

        </div>
      </section>

      {/* YouTube Videos Showcase */}
      <section id="videos" className="container section">
        <h2 className="tron-title tron-font" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Featured Videos</h2>
        <div className="cards-grid">

          <div className="tron-card" style={{ padding: '20px' }}>
            <h3 className="card-title tron-font" style={{ fontSize: '1rem' }}>Laptop Service Testimonial & Repair</h3>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/oFwURm65cjs"
                title="System Care Latur Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          <div className="tron-card" style={{ padding: '20px' }}>
            <h3 className="card-title tron-font" style={{ fontSize: '1rem' }}>Expert Laptop Solutions</h3>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/2nUGnAg-dgk"
                title="System Care Latur Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://www.youtube.com/@systemcarelaturlaptoprepair" target="_blank" rel="noreferrer" className="tron-btn tron-font">
            View All Videos on YouTube
          </a>
        </div>
      </section>

      {/* Footer & Google Map */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h2 className="tron-title tron-font" style={{ fontSize: '2rem', marginBottom: '20px' }}>System Care Latur</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
              We provide the highest quality tech solutions in Latur with a futuristic approach.
            </p>
            <p style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>
              <strong>WhatsApp:</strong> +91 9049206027
            </p>
            <p style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>
              <strong>Location:</strong> Latur, Maharashtra
            </p>
            <p style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>
              <strong>YouTube:</strong> @systemcarelaturlaptoprepair
            </p>

            <a href="https://wa.me/919049206027" target="_blank" rel="noreferrer" className="tron-btn tron-font" style={{ border: '2px solid #25d366', color: '#25d366' }}>
              Chat on WhatsApp
            </a>
          </div>

          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=System%20Care%20Latur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} System Care Latur. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919049206027"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </main>
  );
}
