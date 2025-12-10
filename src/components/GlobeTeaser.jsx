import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const NYC_MARKERS = [
  { id: "bronx", label: "South Bronx", lat: 40.817, lng: -73.922, color: 0xf97373 },
  { id: "harlem", label: "Harlem (125th)", lat: 40.807, lng: -73.945, color: 0xa855f7 },
  { id: "soho", label: "SoHo (Lafayette)", lat: 40.724, lng: -73.998, color: 0x38bdf8 },
  { id: "brooklyn-museum", label: "Brooklyn Museum", lat: 40.671, lng: -73.963, color: 0xfca5a5 },
];

function latLongToVector3(lat, lng, radius) {
  const phi = (lat * Math.PI) / 180;
  const theta = ((lng - 180) * Math.PI) / 180;

  const x = -radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

export default function GlobeTeaser() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(1.6, 0.9, 1.6);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.1;
    controls.maxDistance = 2.4;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(3, 2, 2);
    scene.add(dir);

    // Earth
    const radius = 0.75;
    const geometry = new THREE.SphereGeometry(radius, 48, 48);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0b1120,
      metalness: 0.15,
      roughness: 0.9,
      emissive: 0x020617,
      emissiveIntensity: 0.35,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Subtle wire overlay (fits your theme)
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x1f2937, transparent: true, opacity: 0.35 })
    );
    earth.add(wire);

    // Markers group
    const markerGroup = new THREE.Group();
    earth.add(markerGroup);

    const markerGeometry = new THREE.SphereGeometry(0.018, 16, 16);

    NYC_MARKERS.forEach((m) => {
      const markerMaterial = new THREE.MeshStandardMaterial({
        color: m.color,
        emissive: m.color,
        emissiveIntensity: 0.6,
      });

      const mesh = new THREE.Mesh(markerGeometry, markerMaterial);
      mesh.position.copy(latLongToVector3(m.lat, m.lng, radius + 0.01));
      mesh.userData = { targetId: m.id, label: m.label };
      markerGroup.add(mesh);
    });

    // Raycaster for clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onClick(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(markerGroup.children, true);

      if (hits.length) {
        const { targetId } = hits[0].object.userData;
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    renderer.domElement.addEventListener("click", onClick);

    // Resize
    function onResize() {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener("resize", onResize);

    let t = 0;
    let stop = false;

    function animate() {
      if (stop) return;
      t += 0.0015;
      earth.rotation.y += 0.001; // gentle auto-rotation
      markerGroup.children.forEach((m, i) => {
        // tiny “breathing glow”
        m.scale.setScalar(1 + Math.sin(t * 6 + i) * 0.08);
      });

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      stop = true;
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("click", onClick);
      controls.dispose();
      geometry.dispose();
      material.dispose();
      markerGeometry.dispose();
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="section section-alt" id="globe">
      <div className="section-inner">
        <h2 className="section-title">New York as a Global Node</h2>
        <p className="section-text">
          This interactive globe frames New York as one site within a worldwide
          streetwear network. Click a glowing marker to jump into each borough’s
          story.
        </p>

        <div className="globe-frame">
          <div className="globe-canvas" ref={mountRef} />
          <div className="globe-legend">
            {NYC_MARKERS.map((m) => (
              <a key={m.id} href={`#${m.id}`} className="globe-legend-item">
                <span className="globe-legend-dot" />
                <span>{m.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
