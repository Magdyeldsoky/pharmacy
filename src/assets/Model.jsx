import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Float, ContactShadows, Environment } from "@react-three/drei"

function Model(props) {
  const { nodes, materials } = useGLTF("/model.glb")

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]} scale={1.5}>
        <mesh
          geometry={nodes.tent_Tent_0.geometry}
          material={materials.Tent}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color="#3b82f6" 
            roughness={0.2} 
            metalness={0.5} 
            envMapIntensity={2}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function Model3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#60a5fa" />
        
        <Suspense fallback={null}>
          <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <Model />
          </Float>
          
          <Environment preset="city" />
          
          <ContactShadows 
            position={[0, -0.8, 0]} 
            opacity={0.3} 
            scale={8} 
            blur={2.5} 
            far={4} 
          />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/model.glb")