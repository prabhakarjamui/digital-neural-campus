import { Float, Line, Ring, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// ── Core neural nodes ─────────────────────────────────────────────────────────
const NODE_POSITIONS: [number, number, number][] = [
  [0, 0, 0],
  [-2, 1.5, -1],
  [2, 1.5, -0.5],
  [-1.5, -1.5, -0.5],
  [1.5, -1.5, -1],
  [0, 3, 0],
  [-3, 0, -1],
  [3, 0, -0.5],
  [0, -3, 0],
  [-1, 0.5, 1],
  [1, 0.5, 1],
  [-0.5, 2.2, 0.5],
  [0.8, -2.2, 0.5],
  [2.5, -0.8, 0.8],
];

// ── COSE Pillar Node definitions ──────────────────────────────────────────────
// Security (red-orange), Anonymization (purple), Teacher Support (green), Evaluation Integrity (bright cyan)
type PillarDef = {
  id: string;
  color: string;
  emissive: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitPhase: number;
  orbitTilt: number;
};

const COSE_PILLARS: PillarDef[] = [
  {
    id: "security",
    color: "#ff6030",
    emissive: "#ff4010",
    orbitRadius: 5.2,
    orbitSpeed: 0.12,
    orbitPhase: 0,
    orbitTilt: 0.35,
  },
  {
    id: "anonymization",
    color: "#c060ff",
    emissive: "#9020e0",
    orbitRadius: 5.4,
    orbitSpeed: 0.09,
    orbitPhase: Math.PI * 0.5,
    orbitTilt: -0.25,
  },
  {
    id: "teacher-support",
    color: "#30ff90",
    emissive: "#10d060",
    orbitRadius: 5.2,
    orbitSpeed: 0.11,
    orbitPhase: Math.PI,
    orbitTilt: 0.2,
  },
  {
    id: "integrity",
    color: "#00ffee",
    emissive: "#00d9ff",
    orbitRadius: 5.4,
    orbitSpeed: 0.1,
    orbitPhase: Math.PI * 1.5,
    orbitTilt: -0.3,
  },
];

// ── Core connections ──────────────────────────────────────────────────────────
const CONNECTIONS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 9],
  [0, 10],
  [1, 5],
  [1, 6],
  [1, 11],
  [2, 5],
  [2, 7],
  [3, 6],
  [3, 8],
  [4, 7],
  [4, 8],
  [4, 13],
  [9, 1],
  [10, 2],
  [5, 7],
  [6, 8],
  [11, 5],
  [12, 8],
  [13, 7],
  [0, 11],
  [0, 12],
];

// ── Components ────────────────────────────────────────────────────────────────

function NeuralNode({
  position,
  delay,
  size = 0.12,
  opacity = 1,
}: {
  position: [number, number, number];
  delay: number;
  size?: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + delay;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = (0.5 + Math.sin(t * 2) * 0.3) * opacity;
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
      <Sphere ref={meshRef} position={position} args={[size, 16, 16]}>
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={opacity}
        />
      </Sphere>
    </Float>
  );
}

function NeuralConnections() {
  return (
    <>
      {CONNECTIONS.map(([a, b]) => {
        const start = new THREE.Vector3(...NODE_POSITIONS[a]);
        const end = new THREE.Vector3(...NODE_POSITIONS[b]);
        return (
          <Line
            key={`${a}-${b}`}
            points={[start, end]}
            color="#00d9ff"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
      })}
    </>
  );
}

// ── COSE Pillar Node — independently orbiting ─────────────────────────────────
function COSEPillarNode({ pillar }: { pillar: PillarDef }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const angle = t * pillar.orbitSpeed + pillar.orbitPhase;
    const x = Math.cos(angle) * pillar.orbitRadius;
    const z = Math.sin(angle) * pillar.orbitRadius * 0.7;
    const y =
      Math.sin(angle * 0.5 + pillar.orbitPhase) * 1.2 + pillar.orbitTilt * 2;
    groupRef.current.position.set(x, y, z);

    if (coreRef.current) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.7 + Math.sin(t * 1.8 + pillar.orbitPhase) * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glow halo */}
      <Sphere args={[0.32, 12, 12]}>
        <meshStandardMaterial
          color={pillar.color}
          emissive={pillar.emissive}
          emissiveIntensity={0.2}
          transparent
          opacity={0.12}
          roughness={1}
        />
      </Sphere>
      {/* Core sphere */}
      <Sphere ref={coreRef} args={[0.18, 20, 20]}>
        <meshStandardMaterial
          color={pillar.color}
          emissive={pillar.emissive}
          emissiveIntensity={0.8}
          roughness={0.05}
          metalness={0.95}
        />
      </Sphere>
    </group>
  );
}

// ── COSE Orbit Ring ───────────────────────────────────────────────────────────
function COSEOrbitRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.03;
    ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.07) * 0.08;
  });

  return (
    <Ring ref={ringRef} args={[5.05, 5.15, 80]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial
        color="#00d9ff"
        transparent
        opacity={0.07}
        side={THREE.DoubleSide}
      />
    </Ring>
  );
}

// ── Outer Ring ambient nodes ──────────────────────────────────────────────────
const OUTER_RING_COUNT = 8;
const OUTER_RING_RADIUS = 4.5;

function OuterRingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    groupRef.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.05) * 0.15;
  });

  const positions: [number, number, number][] = Array.from(
    { length: OUTER_RING_COUNT },
    (_, i) => {
      const angle = (i / OUTER_RING_COUNT) * Math.PI * 2;
      const yOffset = Math.sin(angle * 2) * 0.5;
      return [
        Math.cos(angle) * OUTER_RING_RADIUS,
        yOffset,
        Math.sin(angle) * OUTER_RING_RADIUS * 0.6,
      ];
    },
  );

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <NeuralNode
          key={`outer-ring-node-${i}-${OUTER_RING_COUNT}`}
          position={pos}
          delay={i * 0.4}
          size={0.07}
          opacity={0.55}
        />
      ))}
    </group>
  );
}

// ── Core rotating group ───────────────────────────────────────────────────────
function RotatingGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15 + Math.sin(t * 0.3) * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.11) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <NeuralConnections />
      {NODE_POSITIONS.map((pos, i) => (
        <NeuralNode
          key={`node-${pos[0]}-${pos[1]}`}
          position={pos}
          delay={i * 0.3}
        />
      ))}
    </group>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function NeuralNetworkScene() {
  return (
    <div
      className="w-full h-full"
      style={{
        boxShadow:
          "0 0 80px oklch(0.85 0.25 200 / 0.12), inset 0 0 40px oklch(0.85 0.25 200 / 0.04)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 11], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[0, 0, 5]} intensity={2.5} color="#00d9ff" />
        <pointLight position={[-5, 5, 0]} intensity={0.6} color="#0088ff" />
        <pointLight position={[5, -3, 2]} intensity={0.4} color="#00ffcc" />

        {/* Core neural network */}
        <RotatingGroup />
        <OuterRingNodes />

        {/* COSE Framework: orbit ring + 4 pillar nodes */}
        <COSEOrbitRing />
        {COSE_PILLARS.map((pillar) => (
          <COSEPillarNode key={pillar.id} pillar={pillar} />
        ))}

        {/* COSE accent point lights */}
        <pointLight position={[6, 2, 0]} intensity={0.3} color="#ff6030" />
        <pointLight position={[-6, -2, 0]} intensity={0.3} color="#c060ff" />
        <pointLight position={[0, 6, 2]} intensity={0.3} color="#30ff90" />
      </Canvas>
    </div>
  );
}
