'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Subtle animated network background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let width = 0
    let height = 0

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      width = rect?.width ?? window.innerWidth
      height = rect?.height ?? window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(60, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2.2 + 1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      ctx.lineWidth = 0.6
      ctx.strokeStyle = 'rgba(7, 24, 61, 0.12)'
      ctx.fillStyle = 'rgba(7, 24, 61, 0.22)'

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.globalAlpha = 1 - dist / 130
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen bg-[#FAFAFA] flex items-center overflow-hidden"
    >
      {/* Network background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80 pointer-events-none" />

      <div className="relative z-10 section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full pt-28 pb-20">
        {/* Left: intro */}
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-navy">
            Prosanto
            <span className="highlight block">Das</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-navy mt-4">
            Software Engineer
          </p>
          <p className="text-slate-500 text-lg mt-6 max-w-xl leading-relaxed">
            I build intelligent, automated systems — from Gen AI and Agentic AI to N8N
            workflows. AWS Certified Solutions Architect, and a competitive programmer at heart.
          </p>


        </div>

        {/* Right: circular profile photo */}
        <div className="flex justify-center">
          <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-[#FFD54A] shadow-soft-lg" />

            {/* Decorative orbit rings */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-navy/15" />
            <div className="absolute -inset-8 rounded-full border border-navy/8" />

            <div className="absolute inset-4 overflow-hidden rounded-full bg-white shadow-inner">
              <Image
                src="/profile.jpg"
                alt="Prosanto Das"
                fill
                priority
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
