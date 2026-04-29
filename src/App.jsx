import React, { useState } from 'react';
import Intro from './components/Intro';
import Dashboard from './components/Dashboard';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f0f0f]">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      {introComplete && <Dashboard />}
    </div>
  );
}
