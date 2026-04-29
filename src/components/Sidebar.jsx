// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>WooMenu</h2>
      <ul style={styles.menu}>
        <li>홈</li>
        <li>대시보드</li>
        <li>프로젝트</li>
        <li>설정</li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '240px',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
    borderRight: '1px solid #333',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#00ffd5',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2.2rem',
    fontSize: '1rem',
    color: '#ccc',
  },
};

export default Sidebar;
