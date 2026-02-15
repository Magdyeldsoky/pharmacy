import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Float, ContactShadows, Environment } from "@react-three/drei"
import { Suspense } from "react"

function Model() {
    const { scene } = useGLTF("/model.glb")
    
    return (
        <primitive 
            object={scene} 
            scale={1.8} 
            position={[0, -1, 0]} 
            rotation={[0, -0.5, 0]} 
        />
    )
}

export default function Model3D() {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas 
                shadows 
                camera={{ position: [0, 0, 5], fov: 35 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                
                <Suspense fallback={null}>
                    <Float 
                        speed={2} 
                        rotationIntensity={0.5} 
                        floatIntensity={1}
                    >
                        <Model />
                    </Float>
                    
                    <Environment preset="city" />
                    
                    <ContactShadows 
                        position={[0, -1.5, 0]} 
                        opacity={0.4} 
                        scale={10} 
                        blur={2} 
                        far={4.5} 
                    />
                </Suspense>

                <OrbitControls 
                    enableZoom={false} 
                    minPolarAngle={Math.PI / 2.5} 
                    maxPolarAngle={Math.PI / 1.5} 
                />
            </Canvas>
        </div>
    )
}