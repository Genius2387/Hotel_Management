function Booking() {
  const handleSubmit = () => {
    alert('Booking submitted! Thank you for choosing Grand Hotel.');
  };

  return (
    <section id="booking" className="booking">
      <h2>Book Your Stay</h2>
      <div className="booking-form">
        <div className="form-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <input type="date" placeholder="Check-in Date" />
          <input type="date" placeholder="Check-out Date" />
        </div>
        <div className="form-row">
          <select>
            <option value="">Select Room Type</option>
            <option value="luxury">Luxury Suite</option>
            <option value="family">Family Room</option>
            <option value="single">Single Room</option>
            <option value="couple">Couple Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="executive">Executive Suite</option>
          </select>
          <input type="number" placeholder="Number of Guests" min="1" />
        </div>
        <textarea placeholder="Special Requests" rows="4"></textarea>
        <button onClick={handleSubmit} className="submit-btn">Confirm Booking</button>
      </div>
    </section>
  );
}

export default Booking;