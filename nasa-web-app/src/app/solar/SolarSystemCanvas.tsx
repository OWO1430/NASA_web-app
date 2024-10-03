import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useRef, useEffect } from 'react';

function Background() {
  const texture = useLoader(TextureLoader, "/textures/8k_stars_milky_way.jpg");
  const { scene } = useThree();

  useEffect(() => {
    if (texture) {
      scene.background = texture;
    }
  }, [texture, scene]);

  return null;
}



function Planet({
    distance,
    size,
    textureUrl,
    speed,
}: {
    distance: number;
    size: number;
    textureUrl: string;
    speed: number;
}) {
    const planetRef = useRef<THREE.Mesh>(null!);
    const texture = useLoader(TextureLoader, textureUrl);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        if (planetRef.current) {
            planetRef.current.position.x = distance * Math.cos(t);
            planetRef.current.position.z = distance * Math.sin(t);
            planetRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={planetRef}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

function Orbit({ distance }: { distance: number }) {
    const points = [];
    for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(distance * Math.cos(angle), 0, distance * Math.sin(angle)));
    }

    return <Line points={points} color="white" lineWidth={1} />;
}

function SaturnRings({ distance }: { distance: number }) {
    return (
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[distance, 0, 0]}>
            <ringGeometry args={[1.2, 1.5, 32]} />
            <meshBasicMaterial color="#CD853F" side={THREE.DoubleSide} />
        </mesh>
    );
}

export default function SolarSystemCanvas() {
    return (
        <div style={{ height: '100vh' }}>
            <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} intensity={1} />
                <OrbitControls />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

                <Background />

                {/* sun */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshBasicMaterial map={useLoader(TextureLoader, "/textures/8k_sun.jpg")} />
                </mesh>


                {/* earth */}
                <Planet
                    distance={8}
                    size={0.5}
                    textureUrl="/textures/8k_earth_daymap.jpg"
                    speed={1}
                />
                <Orbit distance={8} />
            </Canvas>
        </div>
    );
}
