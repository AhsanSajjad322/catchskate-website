// Signature visual: orients the viewer to the app's core mechanic —
// the nose (top of phone) spins, the rails (left/right edges) flip.
export default function TrickCompass() {
  return (
    <svg
      viewBox="0 0 360 460"
      role="img"
      aria-label="Diagram of a phone showing the nose at the top and the rails on the left and right sides, with arrows indicating spin and flip motions"
      className="trick-compass"
    >
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--caution)" />
        </marker>
      </defs>

      {/* phone body */}
      <rect x="110" y="70" width="140" height="300" rx="26" fill="var(--asphalt-2)" stroke="var(--line)" strokeWidth="2" />
      <circle cx="180" cy="98" r="4" fill="var(--chalk-faint)" />
      <rect x="150" y="340" width="60" height="6" rx="3" fill="var(--chalk-faint)" />

      {/* nose spin arrow */}
      <path
        d="M 130 40 A 60 60 0 0 1 230 40"
        fill="none"
        stroke="var(--caution)"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />
      <text x="180" y="22" textAnchor="middle" fill="var(--chalk)" fontFamily="Anton, sans-serif" fontSize="15" letterSpacing="1">
        NOSE
      </text>
      <text x="180" y="428" textAnchor="middle" fill="var(--chalk-faint)" fontFamily="Inter, sans-serif" fontSize="12">
        spins clockwise or counterclockwise
      </text>

      {/* left rail flip arrow */}
      <path
        d="M 70 260 L 70 180"
        fill="none"
        stroke="var(--hazard-red)"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />
      <text x="70" y="150" textAnchor="middle" fill="var(--chalk)" fontFamily="Anton, sans-serif" fontSize="13">
        LEFT
      </text>
      <text x="70" y="166" textAnchor="middle" fill="var(--chalk)" fontFamily="Anton, sans-serif" fontSize="13">
        RAIL
      </text>

      {/* right rail flip arrow */}
      <path
        d="M 290 180 L 290 260"
        fill="none"
        stroke="var(--hazard-red)"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />
      <text x="290" y="294" textAnchor="middle" fill="var(--chalk)" fontFamily="Anton, sans-serif" fontSize="13">
        RIGHT
      </text>
      <text x="290" y="310" textAnchor="middle" fill="var(--chalk)" fontFamily="Anton, sans-serif" fontSize="13">
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
