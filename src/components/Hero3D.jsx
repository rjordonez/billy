import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './Hero3D.css';

// Simplex noise function (simplified version)
const snoise = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

// Custom shader material for the topographic surface
const TopographicMaterial = shaderMaterial(
  {
    uTime: 0,
    uAmplitude: 0.15,
    uFrequency: 2.0,
    uLineCount: 35.0,
    uLineWidth: 0.02,
    uBaseColor: new THREE.Color('#5cb85c'),
    uLineColor: new THREE.Color('#2d5016'),
  },
  // Vertex Shader
  `
    ${snoise}

    uniform float uTime;
    uniform float uAmplitude;
    uniform float uFrequency;

    varying vec3 vPosition;
    varying float vDisplacement;

    void main() {
      vec3 pos = position;

      // Layered noise for organic movement
      float noise1 = snoise(pos.xy * uFrequency + uTime * 0.1);
      float noise2 = snoise(pos.xy * uFrequency * 2.0 - uTime * 0.05);
      float noise3 = snoise(pos.xy * uFrequency * 0.5 + uTime * 0.15);

      float displacement = (noise1 * 0.5 + noise2 * 0.25 + noise3 * 0.25) * uAmplitude;

      pos.z += displacement;

      vPosition = pos;
      vDisplacement = displacement;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uLineCount;
    uniform float uLineWidth;
    uniform vec3 uBaseColor;
    uniform vec3 uLineColor;

    varying vec3 vPosition;
    varying float vDisplacement;

    void main() {
      // Create contour lines based on displacement
      float linePattern = fract(vDisplacement * uLineCount);
      float line = smoothstep(0.5 - uLineWidth, 0.5, linePattern) *
                   (1.0 - smoothstep(0.5, 0.5 + uLineWidth, linePattern));

      // Mix base color with line color
      vec3 color = mix(uBaseColor, uLineColor, line);

      // Add subtle gradient based on height
      float heightGradient = smoothstep(-1.0, 1.0, vDisplacement);
      color = mix(color * 0.9, color * 1.1, heightGradient);

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Extend Three.js with our custom material
extend({ TopographicMaterial });

function AnimatedSurface() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime * 0.3;
    }

    // Gentle rotation
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 6, 0, 0]}>
      <torusGeometry args={[1.5, 0.6, 128, 128]} />
      <topographicMaterial ref={materialRef} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <fog attach="fog" args={['#fafafa', 8, 15]} />
        <AnimatedSurface />
      </Canvas>
    </div>
  );
}
