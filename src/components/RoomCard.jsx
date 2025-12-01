function RoomCard({ image, title, price, description, amenities }) {
  return (
    <div className="room-card">
      <div
        className="room-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="room-info">
        <h3>{title}</h3>
        <p className="price">${price}/night</p>
        <p className="description">{description}</p>

        <div className="amenities">
          {amenities.map((a, i) => (
            <span key={i} className="amenity">{a}</span>
          ))}
        </div>

        <button className="book-room-btn">Book Now</button>
      </div>
    </div>
  );
}

export default RoomCard;
  