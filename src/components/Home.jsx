import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to Grand Hotel</h1>
        <p>Experience luxury and comfort in the heart of the city</p>
        <NavLink className="explore-btn" to="/rooms">Explore Rooms</NavLink>
      </div>
    </section>
  );
}

export default Home;