function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Smith', review: 'Absolutely wonderful experience! The staff was amazing and the room was perfect.', rating: 5 },
    { id: 2, name: 'Sarah Johnson', review: 'Best hotel stay ever. Will definitely come back again!', rating: 5 },
    { id: 3, name: 'Michael Brown', review: 'Great location, excellent service, and beautiful rooms. Highly recommend!', rating: 5 }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="stars">{'★'.repeat(testimonial.rating)}</div>
            <p className="review">"{testimonial.review}"</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;