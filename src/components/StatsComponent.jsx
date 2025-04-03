// src/components/StatsComponent.jsx
import { useEffect } from "react";

// 📌 완전한 경로 import - 절대 모듈 이름 아님
import Stats from "../../node_modules/three/examples/jsm/libs/stats.module.js";

const StatsComponent = () => {
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    const animate = () => {
      stats.update();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return null;
};

export default StatsComponent;
