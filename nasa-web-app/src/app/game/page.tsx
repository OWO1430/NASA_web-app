'use client';

// Import dynamic from Next.js
import dynamic from 'next/dynamic';

// Dynamically import P5Sketch with SSR disabled
const P5Sketch = dynamic(() => import('../../components/P5Sketch2'), { ssr: false });

const Page = () => {
  return (
    <div>
      <P5Sketch />
    </div>
  );
};

export default Page;