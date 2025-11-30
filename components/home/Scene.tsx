import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { Group } from "three";
import {
  Environment,
  Float,
  ContactShadows,
  Grid,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

function RandsCore() {
  const groupRef = useRef<Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Mouse interaction for rotation
      const targetX = (state.mouse.x * Math.PI) / 4;
      const targetY = (state.mouse.y * Math.PI) / 4;

      groupRef.current.rotation.y +=
        (targetX - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.x +=
        (-targetY - groupRef.current.rotation.x) * 0.1;

      // Idle rotation
      groupRef.current.rotation.z = time * 0.1;
    }

    // Smoothly interpolate distortion and speed
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        hovered ? 0.6 : 0.3,
        0.05
      );
      materialRef.current.speed = THREE.MathUtils.lerp(
        materialRef.current.speed,
        hovered ? 4 : 2,
        0.05
      );
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
    >
      {/* Central Liquid Core */}
      <mesh scale={active ? 1.2 : 1}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={materialRef}
          color={active ? "#ff00ff" : "#ccff00"}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          distort={0.3} // Initial value
          speed={2} // Initial value
        />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Orbital Ring 2 (Cross) */}
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Floating Particles */}
      <Sparkles
        count={50}
        scale={4}
        size={4}
        speed={0.4}
        opacity={0.5}
        color="#ccff00"
      />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full min-h-[400px] relative bg-[#111]">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#111"]} />
          <fog attach="fog" args={["#111", 5, 20]} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, 0, -10]} intensity={2} color="#ccff00" />
          <pointLight position={[10, 0, 10]} intensity={2} color="#ff00ff" />

          {/* Core Scene */}
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <RandsCore />
          </Float>

          {/* Environment */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Grid
            position={[0, -3, 0]}
            args={[20, 20]}
            cellSize={1}
            cellThickness={1}
            cellColor="#333"
            sectionSize={5}
            sectionThickness={1.5}
            sectionColor="#ccff00"
            fadeDistance={15}
            fadeStrength={1}
            infiniteGrid
          />
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.6}
            scale={10}
            blur={2}
            far={4}
            color="#000"
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
