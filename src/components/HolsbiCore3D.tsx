import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import './HolsbiCore3D.css'

interface HolsbiCore3DProps { reduced: boolean }
type Module = THREE.Mesh<THREE.BufferGeometry, THREE.Material> & { userData: { targetY: number; startY: number; delay: number } }

export function HolsbiCore3D({ reduced }: HolsbiCore3DProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const host = hostRef.current, canvas = canvasRef.current
    if (!host || !canvas || window.matchMedia('(max-width: 767px)').matches) return
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(31, 1, .1, 100)
    camera.position.set(0, .05, 10.4)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12

    const core = new THREE.Group(); core.rotation.x = -.035; scene.add(core)
    const modules: Module[] = []
    const dark = new THREE.MeshPhysicalMaterial({ color: 0x071426, metalness: .82, roughness: .3, clearcoat: .48, clearcoatRoughness: .24 })
    const smoked = new THREE.MeshPhysicalMaterial({ color: 0x112a43, metalness: .58, roughness: .22, transmission: .08, transparent: true, opacity: .9 })
    const cyan = new THREE.MeshStandardMaterial({ color: 0x102c3a, metalness: .65, roughness: .24, emissive: 0x13dce8, emissiveIntensity: 1.45 })
    const magenta = new THREE.MeshStandardMaterial({ color: 0x32102e, metalness: .65, roughness: .24, emissive: 0xff2daf, emissiveIntensity: 1.25 })
    const mats = [dark, smoked, cyan, magenta]
    const add = (size:number[], pos:number[], material:THREE.Material, delay:number, radius=.08) => {
      const mesh = new THREE.Mesh(new RoundedBoxGeometry(size[0],size[1],size[2],3,radius), material) as unknown as Module
      mesh.position.set(pos[0],pos[1],pos[2]); mesh.userData={targetY:pos[1],startY:pos[1]+(delay<.1?-.4:1.1),delay}; mesh.position.y=mesh.userData.startY; core.add(mesh); modules.push(mesh); return mesh
    }
    add([4.45,.28,1.42],[0,-1.86,.12],dark,0); add([3.65,.2,1.7],[0,-1.58,.18],smoked,.03)
    add([1.15,3.45,1.25],[-1.45,.02,0],dark,.14,.13); add([1.15,3.45,1.25],[1.45,.02,0],dark,.22,.13)
    add([1.5,.68,1.15],[-1.28,.16,.14],smoked,.28); add([1.5,.68,1.15],[1.28,.16,.14],smoked,.34)
    add([2.05,.72,1.18],[0,.16,.03],dark,.48,.11); add([1.92,.18,1.27],[0,.5,.04],cyan,.68,.05); add([1.92,.18,1.27],[0,-.18,.04],magenta,.74,.05)
    for (const side of [-1,1]) {
      for (let i=0;i<5;i++) add([.12,.32,.08],[side*1.96,1.15-i*.55,.68],side<0?cyan:magenta,.72+i*.025,.025)
      add([.58,.14,.1],[side*1.42,-1.17,.69],side<0?cyan:magenta,.78,.025)
      add([.38,.46,.2],[side*1.58,1.15,.7],smoked,.55,.04)
    }
    add([2.8,.12,1.65],[0,-1.28,.3],cyan,.82,.025); add([1.72,.1,1.72],[.62,-1.05,.38],magenta,.86,.025)
    const edgeMaterial = new THREE.LineBasicMaterial({ color:0x5eefff, transparent:true, opacity:.32 })
    modules.slice(0,7).forEach((m,i)=>{ const line=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,28),edgeMaterial); line.position.copy(m.position); line.userData={source:m}; core.add(line); line.visible=i<2 })
    scene.add(new THREE.AmbientLight(0x163b63,1.6))
    const leftLight=new THREE.PointLight(0x16e8ff,38,10); leftLight.position.set(-3.8,1.8,3.7); scene.add(leftLight)
    const rightLight=new THREE.PointLight(0xff2daf,34,10); rightLight.position.set(3.8,.8,3.4); scene.add(rightLight)
    const topLight=new THREE.DirectionalLight(0xb5d8ff,2.4); topLight.position.set(0,4,4); scene.add(topLight)
    let visible=true, frame=0, pointerX=0, pointerY=0, smoothX=0, smoothY=0
    const start=performance.now()
    const ease=(v:number)=>1-Math.pow(1-v,3)
    const draw=(now:number)=>{
      const elapsed=(now-start)/1000
      modules.forEach(m=>{ const p=Math.max(0,Math.min(1,(elapsed-m.userData.delay)/.38)); m.position.y=THREE.MathUtils.lerp(m.userData.startY,m.userData.targetY,ease(p)) })
      if (!reduced) { smoothX+=(pointerX-smoothX)*.045; smoothY+=(pointerY-smoothY)*.045; core.position.y=Math.sin(elapsed*Math.PI/4.2)*.055; core.position.x=smoothX*.065; core.rotation.y=Math.sin(elapsed*Math.PI/4.6)*THREE.MathUtils.degToRad(2)+smoothX*THREE.MathUtils.degToRad(1.2); core.rotation.x=-.035+Math.sin(elapsed*Math.PI/5)*THREE.MathUtils.degToRad(1)-smoothY*THREE.MathUtils.degToRad(1.2); leftLight.intensity=38+Math.abs(smoothX)*5; rightLight.intensity=34+Math.abs(smoothY)*4 }
      renderer.render(scene,camera); if(visible&&!reduced) frame=requestAnimationFrame(draw)
    }
    const resize=()=>{ const {width,height}=host.getBoundingClientRect(); renderer.setSize(width,height,false); camera.aspect=width/height; camera.updateProjectionMatrix(); renderer.render(scene,camera) }
    const ro=new ResizeObserver(resize); ro.observe(host); resize()
    const io=new IntersectionObserver(([entry])=>{ const was=visible; visible=entry.isIntersecting; if(visible&&!was&&!reduced) frame=requestAnimationFrame(draw); if(!visible) cancelAnimationFrame(frame) },{threshold:.05}); io.observe(host)
    const move=(e:PointerEvent)=>{ const r=host.getBoundingClientRect(); pointerX=((e.clientX-r.left)/r.width-.5)*2; pointerY=((e.clientY-r.top)/r.height-.5)*2 }
    const leave=()=>{pointerX=0;pointerY=0}; host.addEventListener('pointermove',move); host.addEventListener('pointerleave',leave)
    frame=requestAnimationFrame(draw)
    return()=>{ cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); host.removeEventListener('pointermove',move); host.removeEventListener('pointerleave',leave); core.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose()}); edgeMaterial.dispose(); mats.forEach(m=>m.dispose()); renderer.dispose() }
  },[reduced])

  return <div ref={hostRef} className="holsbi-core3d"><canvas ref={canvasRef} className="holsbi-core3d__canvas" aria-label="Holsbi Core, estructura H tridimensional modular" /><img className="holsbi-core3d__fallback" src="/holsbi-core.png" alt="Holsbi Core, estructura H modular en cian y magenta" /></div>
}
