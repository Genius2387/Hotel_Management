function Gallery() {
  const images = [
    "/assets/g2.jpg",
    "/assets/g8.jpg",
    "/assets/g4.avif",
    "/assets/g5.avif",
    "/assets/g6.webp",
    "/assets/g7.avif",
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
        <div key={index} className="gallery-item">
        <img src={img} alt="" />
      </div>
))}

      </div>
    </section>
  );
}

export default Gallery;
