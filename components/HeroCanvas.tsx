'use client'
import { useEffect, useRef } from 'react'

interface Line {
  x: number
  y: number
  dx: number
  dy: number
  length: number
  maxLength: number
  color: string
  alpha: number
  fading: boolean
  dotX: number
  dotY: number
  lastDotX: number
  lastDotY: number
}

const COLORS = ['#F62624', '#73FDFC', '#2BFE78', '#FAD334']

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const GRID = 20
    let lines: Line[] = []
    let flashDots: { x: number; y: number; color: string; alpha: number }[] = []
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const snapToGrid = (v: number) => Math.round(v / GRID) * GRID

    const spawnLine = (): Line => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
      const [dx, dy] = dirs[Math.floor(Math.random() * dirs.length)]
      const x = snapToGrid(Math.random() * canvas.width)
      const y = snapToGrid(Math.random() * canvas.height)
      return {
        x, y, dx, dy,
        length: 0,
        maxLength: 60 + Math.random() * 120,
        color, alpha: 0.7,
        fading: false,
        dotX: x, dotY: y,
        lastDotX: x, lastDotY: y
      }
    }

    for (let i = 0; i < 6; i++) lines.push(spawnLine())

    const flashInterval = setInterval(() => {
      const x = snapToGrid(Math.random() * canvas.width)
      const y = snapToGrid(Math.random() * canvas.height)
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      flashDots.push({ x, y, color, alpha: 0.9 })
    }, 400)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      flashDots = flashDots.filter(d => d.alpha > 0)
      flashDots.forEach(d => {
        ctx.beginPath()
        ctx.arc(d.x, d.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = d.color
        ctx.globalAlpha = d.alpha
        ctx.fill()
        ctx.globalAlpha = 1
        d.alpha -= 0.025
      })

      lines.forEach(line => {
        if (line.fading) {
          line.alpha -= 0.015
        } else {
          const speed = 1.2
          line.x += line.dx * speed
          line.y += line.dy * speed
          line.length += speed

          if (line.length % GRID < speed) {
            const snappedX = snapToGrid(line.x)
            const snappedY = snapToGrid(line.y)
            ctx.beginPath()
            ctx.arc(snappedX, snappedY, 2.5, 0, Math.PI * 2)
            ctx.fillStyle = line.color
            ctx.globalAlpha = line.alpha * 0.8
            ctx.fill()
            ctx.globalAlpha = 1
          }

          if (line.length >= line.maxLength) line.fading = true

          if (line.x <= 0 || line.x >= canvas.width) {
            line.dx *= -1
            line.x = Math.max(0, Math.min(canvas.width, line.x))
          }
          if (line.y <= 0 || line.y >= canvas.height) {
            line.dy *= -1
            line.y = Math.max(0, Math.min(canvas.height, line.y))
          }
        }

        const tailLength = Math.min(line.length, 100)
        const tailX = line.x - line.dx * tailLength
        const tailY = line.y - line.dy * tailLength

        const grad = ctx.createLinearGradient(tailX, tailY, line.x, line.y)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(1, line.color)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(line.x, line.y)
        ctx.strokeStyle = grad
        ctx.globalAlpha = line.alpha * 0.6
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.globalAlpha = 1

        ctx.beginPath()
        ctx.arc(line.x, line.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = line.color
        ctx.globalAlpha = line.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      })

      lines = lines.filter(l => l.alpha > 0)
      while (lines.length < 6) lines.push(spawnLine())

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(flashInterval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.35 }}
    />
  )
}
