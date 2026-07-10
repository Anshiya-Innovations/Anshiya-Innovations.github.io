import React from 'react';
import logoForte from '../../assets/client-logo-forte.png';
import './Clients.css';

const Clients = () => {
  const clientsList = [
    { 
      name: "Forte Innovations", 
      isImage: true, 
      icon: logoForte 
    },
    { 
      name: "Novus IT Solutions", 
      isImage: false, 
      letters: "NI" 
    },
    { 
      name: "RVIT Solutions", 
      isImage: false, 
      letters: "RV" 
    },
    { 
      name: "NASR IT Technologies", 
      isImage: false, 
      letters: "NT" 
    },
    { 
      name: "Fiscalsync Private Limited", 
      isImage: false, 
      letters: "FS" 
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-track-wrapper">
        <div className="clients-track">
          {/* First loop of client items */}
          <div className="clients-list-track">
            {clientsList.map((client, index) => (
              <div key={`first-${index}`} className="client-item">
                <span className="client-logo-wrapper-classic">
                  {client.isImage ? (
                    <div className='icon-container'>
                    <img src={client.icon} alt={`${client.name} Logo`} className="client-logo-img-classic" /></div>
                  ) : (
                    <span className="client-logo-text-classic">{client.letters}</span>
                  )}
                </span>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
          {/* Second loop of client items (for infinite loop backdrop) */}
          <div className="clients-list-track" aria-hidden="true">
            {clientsList.map((client, index) => (
              <div key={`second-${index}`} className="client-item">
                <span className="client-logo-wrapper-classic">
                  {client.isImage ? (
                    <img src={client.icon} alt={`${client.name} Logo`} className="client-logo-img-classic" />
                  ) : (
                    <span className="client-logo-text-classic">{client.letters}</span>
                  )}
                </span>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
