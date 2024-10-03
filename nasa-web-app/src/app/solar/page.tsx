'use client';

import dynamic from 'next/dynamic';

const SolarSystemCanvas = dynamic(() => import('./SolarSystemCanvas'), { ssr: false });

export default function SolarSystemPage() {
  return (
    <div style={{ height: '100vh' }}>
      <SolarSystemCanvas />
    </div>
  );
}
