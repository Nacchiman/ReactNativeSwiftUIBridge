import {useGLTF} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import React from 'react';

export type ScamonProps = {
  modelPath: string;
};

const Scamon = (props: ScamonProps) => {
  const {scene} = useGLTF(props.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <primitive object={scene} />
    </Canvas>
  );
};

export default Scamon;
