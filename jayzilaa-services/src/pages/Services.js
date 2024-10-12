import React from 'react';

const servicesList = [
  { id: 1, name: 'Lawn Mowing', description: 'Regular lawn mowing services to keep your lawn tidy.' },
  { id: 2, name: 'Landscaping Design', description: 'Custom landscaping designs tailored to your needs.' },
  { id: 3, name: 'Tree Trimming', description: 'Professional tree trimming and maintenance services.' },
  { id: 4, name: 'Mulching', description: 'Add mulch to your garden beds for aesthetic and health benefits.' },
];

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <ul>
        {servicesList.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
