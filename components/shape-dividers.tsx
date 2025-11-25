"use client"

interface ShapeDividerProps {
  variant?: "wave" | "diagonal" | "diamond" | "stairs"
  className?: string
  color?: "primary" | "accent" | "secondary"
  flip?: boolean
}

export function DiamondsShapeDivider({
  className = "",
  color = "primary",
  flip = false
}: ShapeDividerProps) {
  const colorMap = {
    primary: "#006D5B",
    accent: "#6B4C9A",
    secondary: "#F0F4F8"
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-auto"
        style={{
          transform: flip ? "scaleY(-1)" : "scaleY(1)"
        }}
      >
        <defs>
          <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Multiple diamond shapes for a divider effect */}
        <g fill="url(#diamondGradient)" className="animate-float">
          {/* Large diamond shapes */}
          <path
            d="M 0 100 L 150 50 L 300 100 L 150 150 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "0s" }}
          />
          <path
            d="M 200 120 L 350 70 L 500 120 L 350 170 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "0.2s" }}
          />
          <path
            d="M 400 100 L 550 50 L 700 100 L 550 150 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "0.4s" }}
          />
          <path
            d="M 600 120 L 750 70 L 900 120 L 750 170 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "0.6s" }}
          />
          <path
            d="M 800 100 L 950 50 L 1100 100 L 950 150 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "0.8s" }}
          />
          <path
            d="M 1000 120 L 1150 70 L 1300 120 L 1150 170 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M 1200 100 L 1350 50 L 1500 100 L 1350 150 Z"
            className="animate-diamond-float"
            style={{ animationDelay: "1.2s" }}
          />
        </g>

        {/* Curve at the bottom */}
        <path
          d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,149.3C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill={colorMap[color]}
          fillOpacity="0.1"
        />
      </svg>
    </div>
  )
}

export function DiagonalShapeDivider({
  className = "",
  color = "primary",
  flip = false
}: ShapeDividerProps) {
  const colorMap = {
    primary: "#006D5B",
    accent: "#6B4C9A",
    secondary: "#F0F4F8"
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-auto"
        style={{
          transform: flip ? "scaleY(-1)" : "scaleY(1)"
        }}
      >
        <defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <polygon points="0,0 1440,50 1440,100 0,100" fill={colorMap[color]} fillOpacity="0.08" />
        <polygon points="0,20 1440,60 1440,100 0,100" fill="url(#diagonalGradient)" />
      </svg>
    </div>
  )
}

export function StairsShapeDivider({
  className = "",
  color = "primary",
  flip = false
}: ShapeDividerProps) {
  const colorMap = {
    primary: "#006D5B",
    accent: "#6B4C9A",
    secondary: "#F0F4F8"
  }

  const stepCount = 6

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-auto"
        style={{
          transform: flip ? "scaleY(-1)" : "scaleY(1)"
        }}
      >
        <defs>
          <linearGradient id="stairsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {Array.from({ length: stepCount }).map((_, i) => {
          const stepWidth = 1440 / stepCount
          const x = i * stepWidth
          const y = (i / stepCount) * 100

          return (
            <g key={i}>
              <rect x={x} y={y} width={stepWidth} height={100 - y} fill={colorMap[color]} fillOpacity={0.03 + (i * 0.02)} />
              <line x1={x} y1={y} x2={x + stepWidth} y2={y} stroke={colorMap[color]} strokeWidth="1.5" strokeOpacity="0.3" />
            </g>
          )
        })}

        <polygon
          points={`0,100 ${Array.from({ length: stepCount + 1 })
            .map((_, i) => {
              const stepWidth = 1440 / stepCount
              const x = i * stepWidth
              const y = (i / stepCount) * 100
              return `${x},${y}`
            })
            .join(" ")} 1440,120 0,120`}
          fill="url(#stairsGradient)"
        />
      </svg>
    </div>
  )
}

export function WaveShapeDivider({
  className = "",
  color = "primary",
  flip = false
}: ShapeDividerProps) {
  const colorMap = {
    primary: "#006D5B",
    accent: "#6B4C9A",
    secondary: "#F0F4F8"
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="w-full h-auto animate-wave"
        style={{
          transform: flip ? "scaleY(-1)" : "scaleY(1)"
        }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={colorMap[color]} stopOpacity="0.1" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <path
          d="M0,100 Q240,50 480,100 T960,100 T1440,100 L1440,200 L0,200 Z"
          fill="url(#waveGradient)"
          className="animate-wave-motion"
        />

        <path
          d="M0,120 Q360,80 720,120 T1440,120 L1440,200 L0,200 Z"
          fill={colorMap[color]}
          fillOpacity="0.05"
          className="animate-wave-motion-delay"
        />
      </svg>
    </div>
  )
}
