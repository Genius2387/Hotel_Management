import { NavLink } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    { id: 1, title: 'Top 10 Tourist Attractions Nearby', date: 'Dec 1, 2024', excerpt: 'Discover the best places to visit during your stay...' },
    { id: 2, title: 'How to Make Your Stay Comfortable', date: 'Nov 28, 2024', excerpt: 'Tips and tricks for a perfect hotel experience...' },
    { id: 3, title: 'Seasonal Offers and Packages', date: 'Nov 25, 2024', excerpt: 'Check out our special holiday season packages...' }
  ];

  return (
    <section id="blog" className="blog">
      <h2>Latest From Our Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <NavLink className="read-more" to="/rooms">Read More →</NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;