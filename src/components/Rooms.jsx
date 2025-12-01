import RoomCard from "./RoomCard";
import roomsData from "./data/roomsdata.jsx";

function Rooms() {
  return (
    <section id="rooms" className="rooms">
      <h2>Our Rooms</h2>
      <p className="section-subtitle">Choose from our selection of premium rooms</p>

      <div className="rooms-grid">
        {roomsData.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            title={room.title}
            price={room.price}
            description={room.description}
            amenities={room.amenities}
          />
        ))}
      </div>
    </section>
  );
}

export default Rooms;