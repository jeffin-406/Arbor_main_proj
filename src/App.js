import React from 'react';

// --- MAIN WEBSITE COMPONENT ---
const MainWebsite = () => (
  <div style={styles.container}>
    <div style={{...styles.card, borderColor: '#38bdf8'}}>
      <span style={styles.badge}>Live Production</span>
      <h1 style={styles.title}>Enterprise Portal</h1>
      <p style={styles.text}>Welcome to the official stable release. All systems are operational.</p>
      <button style={{...styles.button, background: '#38bdf8'}}>View Analytics</button>
    </div>
  </div>
);

// --- DEV WEBSITE COMPONENT ---
const DevWebsite = () => (
  <div style={styles.container}>
    <div style={{...styles.card, borderColor: '#fbbf24'}}>
      <span style={{...styles.badge, background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24'}}>Developer Sandbox</span>
      <h1 style={styles.title}>Dev Preview</h1>
      <p style={styles.text}>Experimental features active. Database is linked to the staging environment.</p>
      <div style={styles.devTools}>
        <code>Debug Mode: ON</code><br/>
        <code>Logs: Streaming...</code>
      </div>
      <button style={{...styles.button, background: '#fbbf24'}}>Push Changes</button>
    </div>
  </div>
);

// --- MAIN APP LOGIC ---
function App() {
  const branch = process.env.REACT_APP_BRANCH_NAME;

  // Conditional Rendering Logic
  if (branch === 'main') {
    return <MainWebsite />;
  } else if (branch === 'dev') {
    return <DevWebsite />;
  } else {
    // Fallback for unknown branch
    return (
      <div style={styles.container}>
        <h1 style={{color: 'white'}}>Branch "{branch}" not configured.</h1>
      </div>
    );
  }
}

// --- SHARED STYLES ---
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(15px)',
    border: '2px solid',
    borderRadius: '28px',
    padding: '40px',
    maxWidth: '450px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
  },
  badge: {
    padding: '6px 12px',
    borderRadius: '20px',
    background: 'rgba(56, 189, 248, 0.1)',
    color: '#38bdf8',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '2.5rem',
    margin: '20px 0 10px',
    color: '#fff'
  },
  text: {
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '25px'
  },
  button: {
    border: 'none',
    padding: '12px 30px',
    borderRadius: '12px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: '0.3s'
  },
  devTools: {
    background: '#000',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '20px',
    fontSize: '0.9rem',
    color: '#4ade80',
    fontFamily: 'monospace'
  }
};

export default App;
