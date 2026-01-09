"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TechSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#1e40af"
                    speed={4}
                    distort={0.4}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

function TechNodes() {
    const points = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 50; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, []);

    const lineRef = useRef<THREE.LineSegments>(null);

    useFrame((state) => {
        if (lineRef.current) {
            lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            lineRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group>
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshBasicMaterial color="#7c3aed" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

export function TechCanvas() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <TechSphere />
                <TechNodes />

                <fog attach="fog" args={['#020617', 5, 15]} />
            </Canvas>
        </div>
    );
}
