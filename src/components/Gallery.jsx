function Gallery() {
  const images = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((gradient, index) => (
          <div key={index} className="gallery-item" style={{background: gradient}}></div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;