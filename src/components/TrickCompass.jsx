// Signature visual: orients the viewer to the app's core mechanic —
// the nose (top of phone) spins, the rails (left/right edges) flip.
// The nose and rails are highlighted directly on the phone body; the glow
// fades out before it reaches the rounded corners, which stay plain grey.
export default function TrickCompass() {
  return (
    <svg
      viewBox="0 0 360 460"
      role="img"
      aria-label="Diagram of a phone with the nose highlighted in yellow at the top and the rails highlighted in teal on the left and right sides"
      className="trick-compass"
    >
      <defs>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="glowYellow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--caution)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--caution)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowTeal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2ce5dc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2ce5dc" stopOpacity="0" />
        </radialGradient>
        {/* Clips every glow to the phone's rounded silhouette so color
            never spills past the edge, and fades out before the corners. */}
        <clipPath id="phoneClip">
          <rect x="110" y="70" width="140" height="300" rx="26" />
        </clipPath>
      </defs>

      {/* phone body */}
      <rect x="110" y="70" width="140" height="300" rx="26" fill="var(--asphalt-2)" stroke="var(--line)" strokeWidth="2" />

      {/* glows — clipped to the phone shape, corners stay plain grey */}
      <g clipPath="url(#phoneClip)">
        <ellipse cx="180" cy="104" rx="80" ry="40" fill="url(#glowYellow)" />
        <ellipse cx="143" cy="220" rx="42" ry="95" fill="url(#glowTeal)" />
        <ellipse cx="217" cy="220" rx="42" ry="95" fill="url(#glowTeal)" />
      </g>

      <circle cx="180" cy="98" r="4" fill="var(--chalk-faint)" />
      <rect x="150" y="340" width="60" height="6" rx="3" fill="var(--chalk-faint)" />

      {/* nose label */}
      <text
        x="180"
        y="112"
        textAnchor="middle"
        fill="var(--caution)"
        fontFamily="Anton, sans-serif"
        fontSize="19"
        letterSpacing="2"
        filter="url(#glow)"
      >
        NOSE
      </text>

      {/* left rail label */}
      <text x="143" y="214" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="13" filter="url(#glow)">
        LEFT
      </text>
      <text x="143" y="230" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="13" filter="url(#glow)">
        RAIL
      </text>

      {/* right rail label */}
      <text x="217" y="214" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="13" filter="url(#glow)">
        RIGHT
      </text>
      <text x="217" y="230" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="13" filter="url(#glow)">
        RAIL
      </text>

      <style>{`
        .trick-compass {
          width: 100%;
          max-width: 320px;
          height: auto;
        }
      `}</style>
    </svg>
  );
}
