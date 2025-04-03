useFrame(({ clock }) => {
  const time = clock.getElapsedTime();
  const geometry = geometryRef.current;
  const position = geometry.attributes.position;
  const normal = geometry.attributes.normal;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);

    const distortion = noise.perlin3(x * 0.8, y * 0.8, time * 0.5) * 0.05;

    position.setXYZ(
      i,
      x + normal.getX(i) * distortion,
      y + normal.getY(i) * distortion,
      z + normal.getZ(i) * distortion
    );
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
});
