// Signature visual: orients the viewer to the app's core mechanic —
// the nose (top of phone) spins, the rails (left/right edges) flip.
export default function TrickCompass() {
  return (
    <svg
      viewBox="0 0 360 460"
      role="img"
      aria-label="Diagram of a phone showing the nose at the top and the rails on the left and right sides"
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
          <stop offset="0%" stopColor="var(--caution)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--caution)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowTeal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2ce5dc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2ce5dc" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* phone body — corners stay a plain, neutral grey */}
      <rect x="110" y="70" width="140" height="300" rx="26" fill="var(--asphalt-2)" stroke="var(--line)" strokeWidth="2" />
      <circle cx="180" cy="98" r="4" fill="var(--chalk-faint)" />
      <rect x="150" y="340" width="60" height="6" rx="3" fill="var(--chalk-faint)" />

      {/* nose — soft yellow glow fading into the grey phone body */}
      <ellipse cx="180" cy="112" rx="58" ry="34" fill="url(#glowYellow)" />
      <text
        x="180"
        y="120"
        textAnchor="middle"
        fill="var(--caution)"
        fontFamily="Anton, sans-serif"
        fontSize="20"
        letterSpacing="2"
        filter="url(#glow)"
      >
        NOSE
      </text>

      {/* left rail — soft teal glow */}
      <ellipse cx="70" cy="158" rx="46" ry="36" fill="url(#glowTeal)" />
      <text x="70" y="152" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="15" filter="url(#glow)">
        LEFT
      </text>
      <text x="70" y="172" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="15" filter="url(#glow)">
        RAIL
      </text>

      {/* right rail — soft teal glow */}
      <ellipse cx="290" cy="302" rx="46" ry="36" fill="url(#glowTeal)" />
      <text x="290" y="296" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="15" filter="url(#glow)">
        RIGHT
      </text>
      <text x="290" y="316" textAnchor="middle" fill="#2ce5dc" fontFamily="Anton, sans-serif" fontSize="15" filter="url(#glow)">
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
