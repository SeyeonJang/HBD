import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Environment } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

export default function CupCake() {
    const modelRef = useRef();

    useFrame((state, delta) => {
        if (modelRef.current) {
        modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <>
        {/* 주변 조명 설정 */}
        <Environment preset="sunset"/>
        
        {/* 기본 조명 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 카메라 컨트롤 */}
        <OrbitControls 
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            makeDefault
        />

        <PerspectiveCamera makeDefault position={[20, 5, 20]} />

        {/* 모델 위치 중앙 정렬 */}
        <Center>
            <primitive 
                ref={modelRef}
                object={useGLTF('/cupcake.glb').scene}
                scale={80}
                position={[0, 5, 0]}/>
        </Center>
        </>
    );
}

useGLTF.preload('/cupcake.glb');