// ✅ src/components/StatsComponent.jsx
import { useEffect } from "react";

const StatsComponent = () => {
  useEffect(() => {
    let stats;

    (async () => {
      const imported = await import("stats.js");
      const Stats = imported.default || imported; // <-- 핵심!

      stats = new Stats();
      stats.showPanel(0);
      document.body.appendChild(stats.dom);

      const animate = () => {
        stats.begin();
        // 여기에 3D 애니메이션 렌더링 같은 작업이 들어가면 좋아요.
        stats.end();
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    })();

    return () => {
      if (stats && stats.dom && document.body.contains(stats.dom)) {
        document.body.removeChild(stats.dom);
      }
    };
  }, []);

  return null;
};

export default StatsComponent;
