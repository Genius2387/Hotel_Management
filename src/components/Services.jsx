function Services() {
  const servicesData = [
    { id: 1, title: 'Room Service', description: '24/7 in-room dining' },
    { id: 2, title: 'Spa & Wellness', description: 'Relaxation and rejuvenation' },
    { id: 3, title: 'Fitness Center', description: 'State-of-the-art equipment' },
    { id: 4, title: 'Swimming Pool', description: 'Indoor and outdoor pools' },
    { id: 5, title: 'Restaurant', description: 'Fine dining experience' },
    { id: 6, title: 'Conference Rooms', description: 'Business meeting facilities' }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;