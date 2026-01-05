"use client"

interface GeometricBackgroundProps {
  variant?: "diamonds" | "triangles" | "grid" | "organic"
  className?: string
  opacity?: number
  animated?: boolean
}

export function GeometricBackground({
  variant = "diamonds",
  className = "",
  opacity = 0.1,
  animated = true
}: GeometricBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
      {variant === "diamonds" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="diamondPattern" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
            <pattern id="diamondTile" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Large diamond */}
              <path
                d="M 60 10 L 110 60 L 60 110 L 10 60 Z"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                opacity="0.4"
              />
              {/* Small diamond inside */}
              <path
                d="M 60 40 L 90 60 L 60 80 L 30 60 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>

          {/* Background layers */}
          <rect width="1440" height="900" fill="url(#diamondPattern)" opacity="0.05" />
          <rect width="1440" height="900" fill="url(#diamondTile)" />

          {/* Floating diamonds animation */}
          {[...Array(8)].map((_, i) => (
            <g
              key={i}
              className={animated ? "animate-float" : ""}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <path
                d={`M ${100 + i * 150} 50 L ${150 + i * 150} 100 L ${100 + i * 150} 150 L ${50 + i * 150} 100 Z`}
                fill="url(#diamondPattern)"
                opacity="0.15"
              />
            </g>
          ))}
        </svg>
      )}

      {variant === "triangles" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>

          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => {
              const x = col * 150
              const y = row * 80
              const isFlipped = (row + col) % 2 === 0

              return (
                <g key={`${row}-${col}`}>
                  <path
                    d={
                      isFlipped
                        ? `M ${x} ${y} L ${x + 75} ${y + 80} L ${x - 75} ${y + 80} Z`
                        : `M ${x - 75} ${y} L ${x + 75} ${y} L ${x} ${y + 80} Z`
                    }
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1"
                    opacity={String(0.1 + (Math.sin(row + col) * 0.05))}
                  />
                </g>
              )
            })
          )}
        </svg>
      )}

      {variant === "grid" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#006D5B" opacity="0.3" />
              <stop offset="100%" stopColor="#6B4C9A" opacity="0.1" />
            </linearGradient>
          </defs>

          {/* Vertical lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 150}
              y1="0"
              x2={i * 150}
              y2="900"
              stroke="#006D5B"
              strokeWidth="1"
              opacity="0.15"
            />
          ))}

          {/* Horizontal lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 120}
              x2="1440"
              y2={i * 120}
              stroke="#6B4C9A"
              strokeWidth="1"
              opacity="0.1"
            />
          ))}

          {/* Intersecting points */}
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle
                key={`point-${row}-${col}`}
                cx={row * 150}
                cy={col * 120}
                r="2"
                fill="#006D5B"
                opacity="0.2"
              />
            ))
          )}

          <rect width="1440" height="900" fill="url(#gridGradient)" />
        </svg>
      )}

      {variant === "organic" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#006D5B" />
              <stop offset="100%" stopColor="#6B4C9A" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>

          {/* Organic blob shapes */}
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={i}
              cx={200 + i * 200}
              cy={150 + Math.sin(i) * 150}
              rx={120 + i * 20}
              ry={80 + i * 15}
              fill="url(#organicGradient)"
              opacity={0.08 + (i * 0.02)}
              filter="url(#blur)"
              className={animated ? "animate-float" : ""}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}

          {/* Corner diamonds */}
          <path
            d="M 0 0 L 150 0 L 75 130 Z"
            fill="#006D5B"
            opacity="0.05"
          />
          <path
            d="M 1440 900 L 1290 900 L 1365 770 Z"
            fill="#6B4C9A"
            opacity="0.05"
          />
        </svg>
      )}
    </div>
  )
}

export function GeometricAccent({
  className = "",
  animated = true
}: {
  className?: string
  animated?: boolean
}) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "animate-diamond-float" : ""}
      >
        {/* Large diamond */}
        <path
          d="M 100 20 L 180 100 L 100 180 L 20 100 Z"
          stroke="#006D5B"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Medium diamond */}
        <path
          d="M 100 50 L 150 100 L 100 150 L 50 100 Z"
          stroke="#6B4C9A"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Small diamond */}
        <path
          d="M 100 80 L 120 100 L 100 120 L 80 100 Z"
          stroke="#8cc73f"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
