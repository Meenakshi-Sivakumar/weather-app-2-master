import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {useTexture} from "@react-three/drei";

function Earth(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    console.log(hover)
    useFrame(() => {
      ref.current.rotation.x += 0.01;
    });
    
    return (
        <>
        <mesh
            {...props}
            ref={ref}
        >
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial
            wireframe={props.wireframe}
            color={"hotpink"}
            />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        </>
    );
  }

export default Earth;