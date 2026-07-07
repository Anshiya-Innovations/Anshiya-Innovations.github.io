import React from 'react';
import './Clients.css';

// Import local client icon assets
import iconTechnova from '../../assets/client-icon-technova.png';
import iconCloudware from '../../assets/client-icon-cloudware.png';
import iconDatabridge from '../../assets/client-icon-databridge.png';
import iconNextgen from '../../assets/client-icon-nextgen.png';

const Clients = () => {
  const clientsList = [
    { name: "TechNova", icon: iconTechnova },
    { name: "CloudWare", icon: iconCloudware },
    { name: "DataBridge", icon: iconDatabridge },
    { name: "NextGen", icon: iconNextgen }
  ];

  return (
    <section className="clients-section">
      <div className="container clients-container">
        {clientsList.map((client, index) => (
          <div key={index} className="client-item">
            <span className="client-icon-img-wrapper">
              <img src={client.icon} alt={`${client.name} Icon`} className="client-icon-img" />
            </span>
            <span className="client-name">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
