import { useEffect, useRef, useState } from 'react'
import type { Material, Object3D, WebGLRenderer } from 'three'
import './HolsbiCoreModel.css'

interface HolsbiCoreModelProps {
  reduced: boolean
}

export function HolsbiCoreModel({ reduced }: HolsbiCoreModelProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    const desktop = window.matchMedia('(min-width: 768px)')

    if (!host || !canvas || reduced || !desktop.matches) return

    let disposed = false
    let renderer: WebGLRenderer | undefined
    let frame = 0
    let visible = true
    let resizeObserver: ResizeObserver | undefined
    let intersectionObserver: IntersectionObserver | undefined
    let removePointerListeners = () => undefined
    const disposableMaterials = new Set<Material>()

    void Promise.all([
      import('three'),
      import('three/addons/loaders/GLTFLoader.js'),
    ]).then(([THREE, { GLTFLoader }]) => {
      if (disposed) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
      camera.position.set(0, 0.25, 7.6)

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        })
      } catch {
        return
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.05

      const loader = new GLTFLoader()
      loader.load(
        '/models/holsbi-core.glb',
        ({ scene: model }) => {
          if (disposed || !renderer) return

          const bounds = new THREE.Box3().setFromObject(model)
          const center = bounds.getCenter(new THREE.Vector3())
          const size = bounds.getSize(new THREE.Vector3())
          const largestDimension = Math.max(size.x, size.y, size.z)
          const targetSize = 5.35

          model.position.sub(center)
          model.scale.setScalar(targetSize / largestDimension)
          model.rotation.x = -0.025
          model.rotation.y = -0.08
          scene.add(model)

          model.traverse((object: Object3D) => {
            const mesh = object as Object3D & { material?: Material | Material[] }
            if (!mesh.material) return
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
            materials.forEach((material) => disposableMaterials.add(material))
          })

          scene.add(new THREE.HemisphereLight(0x7ddfff, 0x060713, 1.65))
          const cyanLight = new THREE.PointLight(0x20e7f0, 18, 15)
          cyanLight.position.set(-4, 2.5, 4)
          scene.add(cyanLight)
          const magentaLight = new THREE.PointLight(0xff2daf, 16, 15)
          magentaLight.position.set(4, 1.2, 3.5)
          scene.add(magentaLight)

          let pointerX = 0
          let pointerY = 0
          let smoothX = 0
          let smoothY = 0
          const startedAt = performance.now()

          const renderFrame = (now: number) => {
            if (!renderer || disposed) return
            const elapsed = (now - startedAt) / 1000
            smoothX += (pointerX - smoothX) * 0.045
            smoothY += (pointerY - smoothY) * 0.045
            model.rotation.y = -0.08 + smoothX * 0.11 + Math.sin(elapsed * 0.45) * 0.025
            model.rotation.x = -0.025 - smoothY * 0.055
            model.position.y = Math.sin(elapsed * 0.75) * 0.045
            renderer.render(scene, camera)
            if (visible) frame = requestAnimationFrame(renderFrame)
          }

          const resize = () => {
            if (!renderer) return
            const { width, height } = host.getBoundingClientRect()
            renderer.setSize(width, height, false)
            camera.aspect = width / Math.max(height, 1)
            camera.updateProjectionMatrix()
            renderer.render(scene, camera)
          }

          const onPointerMove = (event: PointerEvent) => {
            const rect = host.getBoundingClientRect()
            pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
            pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2
          }
          const onPointerLeave = () => {
            pointerX = 0
            pointerY = 0
          }

          host.addEventListener('pointermove', onPointerMove, { passive: true })
          host.addEventListener('pointerleave', onPointerLeave)
          removePointerListeners = () => {
            host.removeEventListener('pointermove', onPointerMove)
            host.removeEventListener('pointerleave', onPointerLeave)
          }

          resizeObserver = new ResizeObserver(resize)
          resizeObserver.observe(host)
          intersectionObserver = new IntersectionObserver(([entry]) => {
            const wasVisible = visible
            visible = entry.isIntersecting
            if (visible && !wasVisible) frame = requestAnimationFrame(renderFrame)
            if (!visible) cancelAnimationFrame(frame)
          }, { threshold: 0.05 })
          intersectionObserver.observe(host)

          resize()
          setReady(true)
          frame = requestAnimationFrame(renderFrame)
        },
        undefined,
        () => setReady(false),
      )
    })

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      intersectionObserver?.disconnect()
      removePointerListeners()
      disposableMaterials.forEach((material) => material.dispose())
      renderer?.dispose()
    }
  }, [reduced])

  return (
    <div ref={hostRef} className={`holsbi-model ${ready ? 'holsbi-model--ready' : ''}`}>
      <img
        src="/holsbi-core.webp"
        alt="Holsbi Core, estructura H tridimensional en cian y magenta"
        className="holsbi-model__fallback"
        width={1247}
        height={901}
        fetchPriority="high"
      />
      <canvas ref={canvasRef} className="holsbi-model__canvas" aria-hidden="true" />
      <span className="visually-hidden">La pieza tridimensional reacciona suavemente al movimiento del cursor.</span>
    </div>
  )
}
