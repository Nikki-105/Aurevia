"use client";

import { useEffect, useRef } from "react";

export default function HeroFluid() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let rendererEl: HTMLCanvasElement | null = null;

    async function init() {
      const THREE = await import("three");
      const mount = mountRef.current;
      if (!mount) return;

      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
      camera.position.z = 7;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.inset = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      mount.appendChild(renderer.domElement);
      rendererEl = renderer.domElement;

      /* ─── Lights ─── */
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const cyanLight = new THREE.PointLight(0x00b7cc, 10, 18);
      cyanLight.position.set(4, 3, 4);
      scene.add(cyanLight);

      const blueLight = new THREE.PointLight(0x0057ff, 8, 18);
      blueLight.position.set(-4, -2, 2);
      scene.add(blueLight);

      const purpleLight = new THREE.PointLight(0x9900ff, 6, 16);
      purpleLight.position.set(1, -4, -2);
      scene.add(purpleLight);

      const warmLight = new THREE.PointLight(0x0099ff, 5, 14);
      warmLight.position.set(-2, 4, 1);
      scene.add(warmLight);

      /* ─── Main blob ─── */
      const geo = new THREE.IcosahedronGeometry(3.2, 16);

      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xbbddff,
        emissiveIntensity: 0.5,
        roughness: 0.08,
        metalness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });

      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = { value: 0 };
        mat.userData.shader = shader;
        
        shader.vertexShader = shader.vertexShader.replace(
          '#include <common>',
          `#include <common>
          uniform float uTime;
          
          float getDisplacement(vec3 p) {
            return sin(p.x * 1.6 + uTime * 0.85) * 0.38 +
                   sin(p.y * 2.2 + uTime * 1.05) * 0.28 +
                   sin(p.z * 2.9 + uTime * 0.72) * 0.20 +
                   sin((p.x + p.y) * 1.1 + uTime * 1.3) * 0.14 +
                   cos((p.y + p.z) * 0.9 + uTime * 0.6) * 0.10;
          }
          `
        );

        shader.vertexShader = shader.vertexShader.replace(
          '#include <beginnormal_vertex>',
          `#include <beginnormal_vertex>
          float offset = 0.05;
          vec3 p_temp = position;
          float d_temp = getDisplacement(p_temp);
          float len_temp = length(p_temp);
          vec3 displacedPos = p_temp * ((len_temp + d_temp) / len_temp);
          
          vec3 tangent1 = normalize(cross(objectNormal, vec3(1.0, 0.0, 0.0)));
          if (length(tangent1) < 0.1) {
            tangent1 = normalize(cross(objectNormal, vec3(0.0, 1.0, 0.0)));
          }
          vec3 tangent2 = normalize(cross(objectNormal, tangent1));
          
          vec3 p1 = p_temp + tangent1 * offset;
          vec3 p2 = p_temp + tangent2 * offset;
          
          float d1 = getDisplacement(p1);
          float d2 = getDisplacement(p2);
          
          vec3 dp1 = p1 * ((length(p1) + d1) / length(p1));
          vec3 dp2 = p2 * ((length(p2) + d2) / length(p2));
          
          objectNormal = normalize(cross(dp1 - displacedPos, dp2 - displacedPos));
          `
        );

        shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          transformed = displacedPos;
          `
        );
      };

      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      /* ─── Outer wireframe halo ─── */
      const haloGeo = new THREE.IcosahedronGeometry(3.6, 3);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x00b7cc,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      scene.add(halo);

      /* ─── Mouse Tracking ─── */
      const mouse = new THREE.Vector2(0, 0);
      const targetMouse = new THREE.Vector2(0, 0);
      const onMouseMove = (e: MouseEvent) => {
        targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", onMouseMove);

      /* ─── Cinematic Dust Particles ─── */
      const particleCount = 400;
      const pGeo = new THREE.BufferGeometry();
      const pPositions = new Float32Array(particleCount * 3);
      const pSpeeds = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3]     = (Math.random() - 0.5) * 25;
        pPositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 2;
        pSpeeds[i] = 0.002 + Math.random() * 0.005;
      }
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0x00e5ff,
        size: 0.04,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      /* ─── Clock ─── */
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        if (mat.userData.shader) {
          mat.userData.shader.uniforms.uTime.value = t;
        }

        /* Slow rotation */
        mesh.rotation.x = t * 0.07;
        mesh.rotation.y = t * 0.11;
        halo.rotation.x = -t * 0.04;
        halo.rotation.y = t * 0.08;
        particles.rotation.y = t * 0.03;

        /* Smooth Mouse Parallax */
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;
        
        scene.rotation.x = mouse.y * 0.15;
        scene.rotation.y = mouse.x * 0.15;
        mesh.position.x = mouse.x * 0.5;
        mesh.position.y = mouse.y * 0.5;

        /* Drift particles upwards */
        const positions = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += pSpeeds[i];
          if (positions[i * 3 + 1] > 12) positions[i * 3 + 1] = -12;
        }
        pGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      /* ─── Resize ─── */
      const onResize = () => {
        if (!mount) return;
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animId);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        haloGeo.dispose();
        haloMat.dispose();
        pGeo.dispose();
        pMat.dispose();
        if (mount.contains(rendererEl!)) mount.removeChild(rendererEl!);
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });

    return () => {
      cancelAnimationFrame(animId);
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
