"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { Group, Vector3 } from "three";
import {
  Environment,
  Float,
  PerspectiveCamera,
  ContactShadows,
  Html,
  Grid,
} from "@react-three/drei";

function DroidHead({ mouse }: { mouse: React.MutableRefObject<Vector3> }) {
  const headRef = useRef<Group>(null);

  useFrame((state) => {
    if (headRef.current) {
      // Smooth look-at
      const targetX = (state.mouse.x * Math.PI) / 4;
      const targetY = (state.mouse.y * Math.PI) / 4;

      headRef.current.rotation.y +=
        (targetX - headRef.current.rotation.y) * 0.1;
      headRef.current.rotation.x +=
        (-targetY - headRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={headRef} position={[0, 1.2, 0]}>
      {/* Main Head Shape */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 1]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Face Plate */}
      <mesh position={[0, 0, 0.51]}>
        <planeGeometry args={[1, 0.6]} />
        <meshStandardMaterial color="#000000" roughness={0.2} metalness={1} />
      </mesh>

      {/* Eyes (Neon) */}
      <mesh position={[-0.25, 0.05, 0.52]}>
        <planeGeometry args={[0.3, 0.1]} />
        <meshBasicMaterial color="#ccff00" toneMapped={false} />
      </mesh>
      <mesh position={[0.25, 0.05, 0.52]}>
        <planeGeometry args={[0.3, 0.1]} />
        <meshBasicMaterial color="#ccff00" toneMapped={false} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0.4, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.4, 0.8, 0]}>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color="#ff00ff" toneMapped={false} />
      </mesh>
    </group>
  );
}

function DroidBody() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Torso */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.6, 0.4, 1.5, 32]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Chest Light */}
      <mesh position={[0, 0.8, 0.55]}>
        <circleGeometry args={[0.15]} />
        <meshBasicMaterial color="#ff6600" toneMapped={false} />
      </mesh>

      {/* Branding Text */}
      <Html
        position={[0, 0.2, 0.6]}
        transform
        occlude
        scale={0.2}
        style={{ pointerEvents: "none" }}
      >
        <div className="font-display font-bold text-white bg-black px-2 border border-white/20">
          RANDS-01
        </div>
      </Html>
    </group>
  );
}

function DroidArms() {
  const leftArm = useRef<Group>(null);
  const rightArm = useRef<Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (leftArm.current) leftArm.current.position.y = Math.sin(time * 2) * 0.1;
    if (rightArm.current)
      rightArm.current.position.y = Math.cos(time * 2) * 0.1;
  });

  return (
    <>
      <group ref={leftArm} position={[-0.9, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#ccff00"
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.9, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#ff00ff"
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      </group>
    </>
  );
}

function RandsDroid() {
  const mouse = useRef(new Vector3());

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      <group>
        <DroidHead mouse={mouse} />
        <DroidBody />
        <DroidArms />
      </group>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full min-h-[400px] relative bg-[#111]">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 2, 6], fov: 45 }}>
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

          {/* Character */}
          <RandsDroid />

          {/* Environment */}
          <Grid
            position={[0, -2, 0]}
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
            position={[0, -2, 0]}
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
