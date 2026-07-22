"use client";

import { useEffect, useRef } from "react";

export default function GlobalWebGL() {
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

      const cyanLight = new THREE.PointLight(0x00b7cc, 10, 25);
      cyanLight.position.set(4, 3, 4);
      scene.add(cyanLight);

      const blueLight = new THREE.PointLight(0x0057ff, 8, 25);
      blueLight.position.set(-4, -2, 2);
      scene.add(blueLight);

      const purpleLight = new THREE.PointLight(0x9900ff, 6, 25);
      purpleLight.position.set(1, -4, -2);
      scene.add(purpleLight);

      const warmLight = new THREE.PointLight(0x0099ff, 5, 25);
      warmLight.position.set(-2, 4, 1);
      scene.add(warmLight);

      /* ─── Common Material (Shared for high performance) ─── */
      const geoMain = new THREE.IcosahedronGeometry(3.2, 16);
      const geoSmall = new THREE.IcosahedronGeometry(1.2, 12);
      
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xbbddff,
        emissiveIntensity: 0.5,
        roughness: 0.08,
        metalness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });

      const matSmall = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0x111111,
        emissiveIntensity: 0.1,
        roughness: 0.08,
        metalness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });

      const onBeforeCompileFluid = (shader: any, material: any) => {
        shader.uniforms.uTime = { value: 0 };
        material.userData.shader = shader;
        
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

      mat.onBeforeCompile = (shader) => onBeforeCompileFluid(shader, mat);
      matSmall.onBeforeCompile = (shader) => onBeforeCompileFluid(shader, matSmall);

      // Scene Container (moves with scroll)
      const scrollGroup = new THREE.Group();
      scene.add(scrollGroup);

      /* ─── Main Hero Blob (Index 0) ─── */
      const mainBlob = new THREE.Mesh(geoMain, mat);
      scrollGroup.add(mainBlob);

      const haloGeo = new THREE.IcosahedronGeometry(3.6, 3);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x00b7cc,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      scrollGroup.add(halo);

      /* ─── Scattered Blobs ─── */
      const scatterPositions = [
        { x: -7, y: -15, z: -3 },
        { x: 7, y: -32, z: -5 },
        { x: -8, y: -48, z: -2 },
        { x: 8, y: -65, z: -4 },
        { x: -7, y: -82, z: -6 },
        { x: 7, y: -98, z: -3 },
      ];

      // Using InstancedMesh for maximum performance!
      const instancedBlobs = new THREE.InstancedMesh(geoSmall, matSmall, 6);
      const dummy = new THREE.Object3D();
      const bounceStates = scatterPositions.map(() => ({ bouncing: 0, targetScale: 1, currentScale: 1 }));

      const blobColors = [
        new THREE.Color(0x00ccff), // Deep Cyan (less green)
        new THREE.Color(0xbbddff), // Ice Blue
        new THREE.Color(0x9900ff), // Purple
        new THREE.Color(0x0057ff), // Deep Blue
        new THREE.Color(0x3388ff), // Soft Blue (replaced Aqua)
        new THREE.Color(0xdfaeff), // Light Purple
      ];

      scatterPositions.forEach((pos, i) => {
        dummy.position.set(pos.x, pos.y, pos.z);
        dummy.updateMatrix();
        instancedBlobs.setMatrixAt(i, dummy.matrix);
        instancedBlobs.setColorAt(i, blobColors[i]);
      });
      if (instancedBlobs.instanceColor) instancedBlobs.instanceColor.needsUpdate = true;
      scrollGroup.add(instancedBlobs);

      /* ─── Cinematic Dust Particles ─── */
      const particleCount = 400;
      const pGeo = new THREE.BufferGeometry();
      const pPositions = new Float32Array(particleCount * 3);
      const pSpeeds = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3]     = (Math.random() - 0.5) * 30;
        pPositions[i * 3 + 1] = (Math.random() - 0.5) * 100 - 40; // Cover entire scroll area
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 2;
        pSpeeds[i] = 0.005 + Math.random() * 0.01;
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
      scrollGroup.add(particles);

      /* ─── Scroll & Mouse Tracking ─── */
      let targetScrollY = 0;
      let currentScrollY = 0;

      const mouse = new THREE.Vector2(0, 0);
      const targetMouse = new THREE.Vector2(0, 0);
      const raycaster = new THREE.Raycaster();

      const onMouseMove = (e: MouseEvent) => {
        targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      
      const onScroll = () => {
        // Map 1 pixel of scroll to approx 0.012 3D units.
        targetScrollY = window.scrollY * 0.012;
      };

      const onClick = () => {
        raycaster.setFromCamera(targetMouse, camera);
        const intersects = raycaster.intersectObject(instancedBlobs);
        if (intersects.length > 0) {
          const instanceId = intersects[0].instanceId;
          if (instanceId !== undefined) {
            // Trigger massive jello bounce!
            bounceStates[instanceId].bouncing = 1;
            bounceStates[instanceId].targetScale = 1.6;
            setTimeout(() => {
              bounceStates[instanceId].bouncing = 0;
              bounceStates[instanceId].targetScale = 1.0;
            }, 100);
          }
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("scroll", onScroll);
      window.addEventListener("click", onClick);

      /* ─── Clock ─── */
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        if (mat.userData.shader) {
          mat.userData.shader.uniforms.uTime.value = t;
        }
        if (matSmall.userData.shader) {
          matSmall.userData.shader.uniforms.uTime.value = t;
        }

        // Smooth Scroll Interpolation
        currentScrollY += (targetScrollY - currentScrollY) * 0.08;
        scrollGroup.position.y = currentScrollY;

        // Smooth Mouse Parallax
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;
        
        scene.rotation.x = mouse.y * 0.15;
        scene.rotation.y = mouse.x * 0.15;

        // Slow main blob rotation
        mainBlob.rotation.x = t * 0.07;
        mainBlob.rotation.y = t * 0.11;
        mainBlob.position.x = mouse.x * 0.5;
        mainBlob.position.y = mouse.y * 0.5;
        
        halo.rotation.x = -t * 0.04;
        halo.rotation.y = t * 0.08;

        // Animate Instanced Blobs (Rotation, Bounce, Dodging)
        for(let i = 0; i < 6; i++) {
          const pos = scatterPositions[i];
          
          // Slime Attraction (pull towards mouse)
          dummy.position.set(pos.x, pos.y, pos.z);
          const worldPos = dummy.position.clone().add(scrollGroup.position);
          worldPos.project(camera);
          
          const dx = worldPos.x - targetMouse.x;
          const dy = worldPos.y - targetMouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          let slimeX = 0;
          let slimeY = 0;
          // Increased range, reversed force direction
          if (dist < 0.6 && worldPos.z < 1) {
            const force = (0.6 - dist) * 1.5;
            slimeX = -(dx / dist) * force;
            slimeY = -(dy / dist) * force;
          }

          // Bounce Spring Logic
          const state = bounceStates[i];
          state.currentScale += (state.targetScale - state.currentScale) * (state.bouncing ? 0.3 : 0.05);

          dummy.position.set(pos.x + slimeX, pos.y + slimeY, pos.z);
          dummy.rotation.x = t * 0.1 + i;
          dummy.rotation.y = t * 0.15 + i;
          dummy.scale.set(state.currentScale, state.currentScale, state.currentScale);
          dummy.updateMatrix();
          instancedBlobs.setMatrixAt(i, dummy.matrix);
        }
        instancedBlobs.instanceMatrix.needsUpdate = true;

        /* Orbit ambient lights, but make cyanLight track the mouse for a glowing flashlight effect! */
        cyanLight.position.x   = mouse.x * 12;
        cyanLight.position.y   = currentScrollY + (mouse.y * 7);
        cyanLight.position.z   = 4; // Close to the front for bright specular highlights

        blueLight.position.x   = Math.cos(t * 0.35) * 5;
        blueLight.position.y   = currentScrollY;
        warmLight.position.y   = currentScrollY + 4;

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
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("click", onClick);
        cancelAnimationFrame(animId);
        renderer.dispose();
        geoMain.dispose();
        geoSmall.dispose();
        mat.dispose();
        matSmall.dispose();
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
      className="fixed inset-0 w-[100vw] h-[100vh]"
      style={{ zIndex: -1, pointerEvents: "none" }}
    />
  );
}
