import { useEffect, useRef, useState } from 'react'
import type { Material, Object3D, WebGLRenderer } from 'three'
import './HolsbiCoreModel.css'

interface HolsbiCoreModelProps {
  reduced: boolean
  variant?: 'hero' | 'compact'
}

export function HolsbiCoreModel({ reduced, variant = 'hero' }: HolsbiCoreModelProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current

    if (!host || !canvas || reduced) return

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
      camera.position.set(0, 0.08, 9)

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

      const mobile = window.matchMedia('(max-width: 767px)').matches
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1 : 1.5))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.28

      const loader = new GLTFLoader()
      loader.load(
        '/models/holsbi-core.glb',
        ({ scene: model }) => {
          if (disposed || !renderer) return

          const bounds = new THREE.Box3().setFromObject(model)
          const center = bounds.getCenter(new THREE.Vector3())
          const size = bounds.getSize(new THREE.Vector3())
          const largestDimension = Math.max(size.x, size.y, size.z)
          const targetSize = 5

          const modelScale = targetSize / largestDimension
          model.scale.setScalar(modelScale)
          model.position.set(-center.x * modelScale, -center.y * modelScale, -center.z * modelScale)
          const modelSize = size.multiplyScalar(modelScale)
          const pivot = new THREE.Group()
          pivot.rotation.x = -0.035
          pivot.rotation.y = -0.08
          pivot.add(model)
          scene.add(pivot)

          model.traverse((object: Object3D) => {
            const mesh = object as Object3D & { material?: Material | Material[] }
            if (!mesh.material) return
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
            materials.forEach((material) => disposableMaterials.add(material))
          })

          scene.add(new THREE.HemisphereLight(0x8eefff, 0x070512, 2.15))
          const cyanLight = new THREE.PointLight(0x20e7f0, 34, 16)
          cyanLight.position.set(-3.8, 2.25, 4.5)
          scene.add(cyanLight)
          const magentaLight = new THREE.PointLight(0xff2daf, 31, 16)
          magentaLight.position.set(3.9, 1.15, 4.2)
          scene.add(magentaLight)
          const topLight = new THREE.DirectionalLight(0xd8ecff, 2.8)
          topLight.position.set(0, 5, 4)
          scene.add(topLight)
          const cyanRim = new THREE.SpotLight(0x36f5ff, 42, 18, Math.PI / 4, 0.72)
          cyanRim.position.set(-4.8, 0.4, 5)
          cyanRim.target.position.set(0, 0, 0)
          scene.add(cyanRim, cyanRim.target)
          const magentaRim = new THREE.SpotLight(0xff3cac, 38, 18, Math.PI / 4, 0.72)
          magentaRim.position.set(4.8, 0.2, 5)
          magentaRim.target.position.set(0, 0, 0)
          scene.add(magentaRim, magentaRim.target)

          let pointerX = 0
          let pointerY = 0
          let smoothX = 0
          let smoothY = 0
          let dragging = false
          let activePointerId: number | null = null
          let lastPointerX = 0
          let lastPointerY = 0
          let dragX = 0
          let dragY = 0
          let dragRotationX = 0
          let dragRotationY = 0
          let targetDragX = 0
          let targetDragY = 0
          let targetRotationX = 0
          let targetRotationY = 0
          let velocityX = 0
          let velocityY = 0
          const startedAt = performance.now()

          const renderFrame = (now: number) => {
            if (!renderer || disposed) return
            const elapsed = (now - startedAt) / 1000
            smoothX += (pointerX - smoothX) * 0.045
            smoothY += (pointerY - smoothY) * 0.045

            if (!dragging) {
              targetDragX = THREE.MathUtils.clamp(targetDragX + velocityX, -0.72, 0.72)
              targetDragY = THREE.MathUtils.clamp(targetDragY + velocityY, -0.55, 0.55)
              velocityX *= 0.9
              velocityY *= 0.9
            }

            dragX += (targetDragX - dragX) * 0.14
            dragY += (targetDragY - dragY) * 0.14
            dragRotationX += (targetRotationX - dragRotationX) * 0.12
            dragRotationY += (targetRotationY - dragRotationY) * 0.12
            pivot.rotation.y = -0.08 + dragRotationY + smoothX * 0.08 + Math.sin(elapsed * 0.45) * 0.025
            pivot.rotation.x = -0.035 + dragRotationX - smoothY * 0.05
            pivot.position.x = dragX + smoothX * 0.04
            const baseY = variant === 'hero' ? -0.08 : 0
            pivot.position.y = baseY + dragY + Math.sin(elapsed * 0.72) * 0.05 - smoothY * 0.04
            renderer.render(scene, camera)
            if (visible) frame = requestAnimationFrame(renderFrame)
          }

          const resize = () => {
            if (!renderer) return
            const { width, height } = host.getBoundingClientRect()
            renderer.setSize(width, height, false)
            camera.aspect = width / Math.max(height, 1)
            const halfFov = THREE.MathUtils.degToRad(camera.fov / 2)
            const verticalDistance = modelSize.y / (2 * Math.tan(halfFov))
            const horizontalDistance = modelSize.x / (2 * Math.tan(halfFov) * camera.aspect)
            camera.position.z = Math.max(verticalDistance, horizontalDistance) * 1.32 + modelSize.z * 0.5
            camera.updateProjectionMatrix()
            renderer.render(scene, camera)
          }

          const onPointerMove = (event: PointerEvent) => {
            const rect = host.getBoundingClientRect()
            pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
            pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2

            if (!dragging || event.pointerId !== activePointerId) return
            const deltaX = event.clientX - lastPointerX
            const deltaY = event.clientY - lastPointerY
            lastPointerX = event.clientX
            lastPointerY = event.clientY
            targetDragX = THREE.MathUtils.clamp(targetDragX + (deltaX / rect.width) * 1.35, -0.72, 0.72)
            targetDragY = THREE.MathUtils.clamp(targetDragY - (deltaY / rect.height) * 1.15, -0.55, 0.55)
            targetRotationY = THREE.MathUtils.clamp(targetRotationY + deltaX * 0.006, -0.6, 0.6)
            targetRotationX = THREE.MathUtils.clamp(targetRotationX + deltaY * 0.004, -0.28, 0.28)
            velocityX = (deltaX / rect.width) * 0.12
            velocityY = -(deltaY / rect.height) * 0.1
          }
          const onPointerDown = (event: PointerEvent) => {
            if (variant !== 'hero' || event.button !== 0) return
            dragging = true
            activePointerId = event.pointerId
            lastPointerX = event.clientX
            lastPointerY = event.clientY
            velocityX = 0
            velocityY = 0
            host.setPointerCapture(event.pointerId)
            host.classList.add('holsbi-model--dragging')
          }
          const finishDrag = (event: PointerEvent) => {
            if (event.pointerId !== activePointerId) return
            dragging = false
            activePointerId = null
            if (host.hasPointerCapture(event.pointerId)) host.releasePointerCapture(event.pointerId)
            host.classList.remove('holsbi-model--dragging')
          }
          const resetModel = () => {
            targetDragX = 0
            targetDragY = 0
            targetRotationX = 0
            targetRotationY = 0
            velocityX = 0
            velocityY = 0
          }
          const onPointerLeave = () => {
            if (dragging) return
            pointerX = 0
            pointerY = 0
          }

          host.addEventListener('pointerdown', onPointerDown)
          host.addEventListener('pointermove', onPointerMove)
          host.addEventListener('pointerup', finishDrag)
          host.addEventListener('pointercancel', finishDrag)
          host.addEventListener('pointerleave', onPointerLeave)
          host.addEventListener('dblclick', resetModel)
          removePointerListeners = () => {
            host.removeEventListener('pointerdown', onPointerDown)
            host.removeEventListener('pointermove', onPointerMove)
            host.removeEventListener('pointerup', finishDrag)
            host.removeEventListener('pointercancel', finishDrag)
            host.removeEventListener('pointerleave', onPointerLeave)
            host.removeEventListener('dblclick', resetModel)
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
  }, [reduced, variant])

  return (
    <div ref={hostRef} className={`holsbi-model holsbi-model--${variant} ${ready ? 'holsbi-model--ready' : ''}`}>
      <canvas ref={canvasRef} className="holsbi-model__canvas" aria-hidden="true" />
      <span className="visually-hidden">La pieza tridimensional se puede mover y rotar mediante arrastre.</span>
    </div>
  )
}
