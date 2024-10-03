import dynamic from 'next/dynamic';

const PlanetSimulation = dynamic(() => import('../../components/PlanetSimulation'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  return (
    <div>
      <PlanetSimulation />
    </div>
  );
}