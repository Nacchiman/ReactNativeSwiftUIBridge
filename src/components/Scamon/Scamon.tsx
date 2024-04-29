import {Box} from '@react-three/drei/native';
import {Canvas} from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import React from 'react';
import {View} from 'react-native';

export type ScamonProps = {
  modelPath: string;
};

const Scamon = (props: ScamonProps) => {
  // const {scene} = useGLTF(props.modelPath);
  const [OrbitControls, events] = useControls();

  console.warn('modelPath:', props.modelPath);
  return (
    <>
      <View style={{flex: 1}} {...events}>
        <Canvas>
          <OrbitControls />

          <ambientLight intensity={3} />
          <directionalLight />
          <directionalLight color="red" position={[0, -5, 5]} />
          {/* <primitive object={scene} /> */}
          <Box>
            <meshLambertMaterial />
          </Box>
        </Canvas>
      </View>
    </>
  );
};

export default Scamon;
