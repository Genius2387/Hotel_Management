function Contact() {
  const handleSend = () => {
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Grand Avenue, City Center, Pune</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 8805324590</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>genius@grandhotel.com</p>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button onClick={handleSend}>Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;