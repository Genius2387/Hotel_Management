import { NavLink } from 'react-router-dom';

function Home() {
  const features = [
    { icon: '🏨', title: '5-Star Luxury', desc: 'Premium hospitality experience' },
    { icon: '🍽️', title: 'Fine Dining', desc: 'World-class cuisine' },
    { icon: '🏊', title: 'Spa & Pool', desc: 'Relaxation facilities' },
    { icon: '🚗', title: 'Free Parking', desc: 'Valet service available' }
  ];

  return (
    <section id="home" className="home">
      <div className="home-overlay"></div>
      <div className="home-container">
        <div className="home-content">
          <span className="welcome-tag">✨ Welcome to Paradise</span>
          <h1 className="main-heading">
            Grand Hotel
            <span className="highlight"> Luxury Redefined</span>
          </h1>
          <p className="tagline">Experience the perfect blend of elegance, comfort, and world-class hospitality in the heart of the city</p>
          
          <div className="cta-buttons">
            <NavLink className="explore-btn primary" to="/rooms">Explore Rooms</NavLink>
            <NavLink className="explore-btn secondary" to="/booking">Book Now</NavLink>
          </div>

          <div className="quick-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="home-stats">
          <div className="stat-item">
            <h3>250+</h3>
            <p>Luxury Rooms</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years Excellence</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Happy Guests</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;