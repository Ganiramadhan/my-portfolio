export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#grid-mask)" />
    </svg>
  )
}

export function DotsPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute h-32 w-32 ${className}`}
      viewBox="0 0 120 120"
    >
      <defs>
        <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#dots)" />
    </svg>
  )
}

export function BlobShape({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          fill="currentColor"
          d="M120,-180C156,-150,184,-115,200,-74C216,-33,220,15,205,57C190,99,156,135,118,160C80,185,40,199,-3,203C-46,207,-92,201,-129,177C-166,153,-194,111,-205,66C-216,21,-210,-27,-191,-69C-172,-111,-140,-147,-104,-178C-68,-209,-34,-235,5,-241C44,-247,84,-210,120,-180Z"
          opacity="0.85"
        >
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M120,-180C156,-150,184,-115,200,-74C216,-33,220,15,205,57C190,99,156,135,118,160C80,185,40,199,-3,203C-46,207,-92,201,-129,177C-166,153,-194,111,-205,66C-216,21,-210,-27,-191,-69C-172,-111,-140,-147,-104,-178C-68,-209,-34,-235,5,-241C44,-247,84,-210,120,-180Z;
              M140,-150C175,-115,190,-65,195,-15C200,35,195,85,170,125C145,165,100,195,55,205C10,215,-35,205,-80,180C-125,155,-170,115,-185,65C-200,15,-185,-45,-155,-90C-125,-135,-80,-165,-30,-180C20,-195,75,-195,140,-150Z;
              M120,-180C156,-150,184,-115,200,-74C216,-33,220,15,205,57C190,99,156,135,118,160C80,185,40,199,-3,203C-46,207,-92,201,-129,177C-166,153,-194,111,-205,66C-216,21,-210,-27,-191,-69C-172,-111,-140,-147,-104,-178C-68,-209,-34,-235,5,-241C44,-247,84,-210,120,-180Z
            "
          />
        </path>
      </g>
    </svg>
  )
}

export function WaveDivider({
  className = '',
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      aria-hidden="true"
      className={`block w-full ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
      />
    </svg>
  )
}

export function NoiseBg({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay ${className}`}
    >
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  )
}

export function SparkDoodle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`pointer-events-none ${className}`} viewBox="0 0 90 90" fill="none">
      <path d="M45 5c1 21 8 33 29 39-21 5-29 17-29 40-2-22-10-34-31-40C35 39 43 26 45 5Z" fill="currentColor" />
      <path d="M75 7c.4 8 3 12 10 14-7 2-10 6-10 14-1-8-4-12-11-14 8-2 10-6 11-14Z" fill="currentColor" opacity=".5" />
    </svg>
  )
}

export function OrbitDoodle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`pointer-events-none ${className}`} viewBox="0 0 240 180" fill="none">
      <path d="M25 94c23-58 153-90 190-31 36 58-79 106-159 80C-25 117 56 26 151 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9" />
      <circle cx="210" cy="67" r="9" fill="currentColor" />
      <circle cx="48" cy="137" r="5" fill="currentColor" opacity=".55" />
      <path d="m31 75-11 5 10 6M167 151l12 2-6 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ScribbleDoodle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`pointer-events-none ${className}`} viewBox="0 0 220 70" fill="none">
      <path d="M7 43c25-30 51 18 75-9 20-22 30 13 51-8 25-25 42 30 78-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="m199 8 13 7-8 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
