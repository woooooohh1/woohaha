// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeDashboard from '../components/HomeDashboard';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <HomeDashboard />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#121212', // Dark mode 배경
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
  },
  content: {
    flex: 1,
    padding: '2rem',
    overflowY: 'auto',
  },
};

export default Dashboard;
