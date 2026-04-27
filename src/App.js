import React from 'react';

function App() {
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  const buttonStyle = {
    background: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    marginTop: '20px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Welcome.</h1>
        <p style={{color: '#94a3b8', lineHeight: '1.6'}}>
          This is a professional React environment, containerized with Docker and served via Nginx.
        </p>
        <button style={buttonStyle}>Explore Dashboard</button>
      </div>
    </div>
  );
}

export default App;
