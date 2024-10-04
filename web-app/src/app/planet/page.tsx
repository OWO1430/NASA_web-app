// import dynamic from 'next/dynamic';

// const PlanetSimulation = dynamic(() => import('../../components/PlanetSimulation'), {
//   ssr: false, // Disable server-side rendering for this component
// });

// export default function Home() {
//   return (
//     <div>
//       <PlanetSimulation />
//     </div>
//   );
// }

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
    <div>
        <h1>Hello World</h1>
    </div>
    );
}