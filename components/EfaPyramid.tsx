export default function EfaPyramid() {
  // Čisté responzivní SVG s pevnou viewBox a správným zachováním poměru stran.
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="EFPA pyramida: základ Penze/Úvěry/Investice/Pojistky, nad tím PFP, EFA a EFP"
      style={{ width: "100%", height: "auto" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>
          {`
            .label { fill: #fff; font-weight: 700; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
          `}
        </style>
      </defs>

      {/* ZÁKLAD – Penze | Úvěry | Investice | Pojistky */}
      <g>
        <polygon points="70,520 730,520 760,580 40,580" fill="#77a66a" />
        <text x="400" y="555" textAnchor="middle" fontSize="28" className="label">
          Penze | Úvěry | Investice | Pojistky
        </text>
      </g>

      {/* PFP */}
      <g>
        <polygon points="110,450 690,450 720,520 80,520" fill="#4ec0d4" />
        <text x="400" y="430" textAnchor="middle" fontSize="44" className="label">
          PFP
        </text>
      </g>

      {/* EFA */}
      <g>
        <polygon points="160,360 640,360 670,450 130,450" fill="#496f97" />
        <text x="400" y="340" textAnchor="middle" fontSize="44" className="label">
          EFA
        </text>
      </g>

      {/* EFP */}
      <g>
        <polygon points="230,250 570,250 595,310 205,310" fill="#d4a21a" />
        <text x="400" y="235" textAnchor="middle" fontSize="44" className="label">
          EFP
        </text>
      </g>
    </svg>
  );
}
