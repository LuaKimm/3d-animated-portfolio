import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel"; // Adjust the path based on where your ComputerModel.jsx file is

const ConsoleModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <ConsoleModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefaults />
      </Suspense>
    </Canvas>
  );
};

export default ConsoleModelContainer;
