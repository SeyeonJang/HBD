import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Main from './pages/Main';

function App() {

  return (
    <Canvas style={{ height: '45vh' }}>
      <Main/>
    </Canvas>
  );
}

export default App