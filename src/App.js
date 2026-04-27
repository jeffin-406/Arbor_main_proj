import React from 'react';

// --- MAIN WEBSITE COMPONENT ---
// We pass 'branch' as a prop to make the heading dynamic
const MainWebsite = ({ branch }) => (
  <div style={styles.container}>
    <div style={{...styles.card, borderColor: '#38bdf8'}}>
      {/* Dynamic Badge using the branch name */}
      <span style={styles.badge}>Live {branch.toUpperCase()}</span>
      
      <h1 style={styles.title}>Enterprise Portal</h1>
      <p style={styles.text}>
        You are currently viewing the <strong>{branch}</strong> version of the site. 
        All systems are operational and synced with the cloud.
      </p>
      
      <button style={{...styles.button, background: '#38bdf8'}}>
        View {branch} Analytics
      </button>
    </div>
  </div>
);

// --- DEV WEBSITE COMPONENT ---
const DevWebsite = ({ branch }) => (
  <div style={styles.container}>
    <div style={{...styles.card, borderColor: '#fbbf24'}}>
      <span style={{...styles.badge, background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24'}}>
        Live {branch.toUpperCase()}
      </span>
      <h1 style={styles.title}>Dev Preview</h1>
      <p style={styles.text}>Experimental features active. This is the sandbox environment for the {branch} branch.</p>
      <div style={styles.devTools}>
        <code>Branch: {branch}</code><br/>
        <code>Status: Debugging</code>
      </div>
      <button style={{...styles.button, background: '#fbbf24'}}>Push to {branch}</button>
    </div>
  </div>
);

// --- MAIN APP LOGIC ---
function App() {
  // Fetching the variable from your .env file
  const branch = process.env.REACT_APP_BRANCH_NAME || 'unknown';

  return (
    <div style={styles.wrapper}>
      {/* Logic to switch between components based on branch name */}
      {branch === 'main' ? (
        <MainWebsite branch={branch} />
      ) : (
        <DevWebsite branch={branch} />
      )}
    </div>
  );
}

// --- SHARED STYLES ---
const styles = {
  wrapper: {
    background: 'radial-gradient(circle at top right, #1e293b, #0f172a)',
    minHeight: '100vh',
    width: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(15px)',
    border: '2px solid',
    borderRadius: '28px',
    padding: '40px',
    maxWidth: '450px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    color: '#fff'
  },
  badge: {
    padding: '6px 16px',
    borderRadius: '20px',
    background: 'rgba(56, 189, 248, 0.1)',
    color: '#38bdf8',
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1.5px'
  },
  title: {
    fontSize: '2.5rem',
    margin: '20px 0 10px',
    fontFamily: 'Inter, sans-serif'
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
    color: '#0f172a',
    cursor: 'pointer',
    transition: '0.3s'
  },
  devTools: {
    background: '#000',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '20px',
    fontSize: '0.85rem',
    color: '#4ade80',
    fontFamily: 'monospace'
  }
};

export default App;
