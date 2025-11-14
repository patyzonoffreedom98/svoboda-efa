export default function EfaPyramid() {
  return (
    <svg
      viewBox="0 0 800 520"
      role="img"
      aria-label="Pyramida EFPA – PFP, EFA, EFP a základ Penze | Úvěry | Investice | Pojistky"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Základ */}
      <g>
        <polygon points="120,480 680,480 740,560 60,560" fill="#77a66a" />
        <text x="400" y="515" textAnchor="middle" fontSize="28" fill="#fff" fontWeight={700}>
          Penze | Úvěry | Investice | Pojistky
        </text>
      </g>

      {/* PFP */}
      <g>
        <polygon points="160,440 640,440 700,540 100,540" fill="#4ec0d4" />
        <text x="400" y="420" textAnchor="middle" fontSize="42" fill="#fff" fontWeight={700}>
          PFP
        </text>
      </g>

      {/* EFA */}
      <g>
        <polygon points="200,360 600,360 660,440 140,440" fill="#496f97" />
        <text x="400" y="340" textAnchor="middle" fontSize="42" fill="#fff" fontWeight={700}>
          EFA
        </text>
      </g>

      {/* EFP */}
      <g>
        <polygon points="260,260 540,260 580,320 220,320" fill="#d4a21a" />
        <text x="400" y="245" textAnchor="middle" fontSize="42" fill="#fff" fontWeight={700}>
          EFP
        </text>
      </g>
    </svg>
  );
}
