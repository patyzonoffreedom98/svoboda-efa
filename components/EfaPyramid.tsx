export default function EfaPyramid() {
  // Kompaktní a stabilní SVG – žádné mezery, žádná deformace, hezké škálování.
  return (
    <svg
      viewBox="0 0 800 480"
      style={{ width: "100%", height: "auto", display: "block" }}
      role="img"
      aria-label="EFPA pyramida: základ Penze/Úvěry/Investice/Pojistky, nad tím PFP, EFA a EFP"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>
          {`
            .label { fill:#fff; font-weight:700; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial }
          `}
        </style>
      </defs>

      {/* ZÁKLAD */}
      <g>
        <polygon points="70,420 730,420 760,470 40,470" fill="#77a66a" />
        <text x="400" y="450" textAnchor="middle" fontSize="26" className="label">
          Penze | Úvěry | Investice | Pojistky
        </text>
      </g>

      {/* PFP */}
      <g>
        <polygon points="120,340 680,340 710,420 90,420" fill="#4ec0d4" />
        <text x="400" y="320" textAnchor="middle" fontSize="40" className="label">
          PFP
        </text>
      </g>

      {/* EFA */}
      <g>
        <polygon points="180,250 620,250 645,340 155,340" fill="#496f97" />
        <text x="400" y="230" textAnchor="middle" fontSize="40" className="label">
          EFA
        </text>
      </g>

      {/* EFP */}
      <g>
        <polygon points="260,165 540,165 560,215 240,215" fill="#d4a21a" />
        <text x="400" y="150" textAnchor="middle" fontSize="40" className="label">
          EFP
        </text>
      </g>
    </svg>
  );
}
