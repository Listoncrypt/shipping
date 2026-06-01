export function ShipIllustration() {
  return (
    <svg
      viewBox="0 0 400 250"
      className="w-96 h-auto opacity-30 absolute bottom-0 right-0 md:right-12 md:bottom-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Water waves */}
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>

      {/* Waves */}
      <path
        d="M 0 180 Q 25 175, 50 180 T 100 180 T 150 180 T 200 180 T 250 180 T 300 180 T 350 180 T 400 180 L 400 200 Q 375 195, 350 200 T 300 200 T 250 200 T 200 200 T 150 200 T 100 200 T 50 200 T 0 200 Z"
        fill="url(#waterGrad)"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Ship Hull */}
      <path
        d="M 80 140 L 100 160 L 280 160 L 300 140 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Ship Body/Superstructure */}
      <rect
        x="150"
        y="110"
        width="100"
        height="35"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* Main Mast */}
      <line x1="180" y1="110" x2="180" y2="60" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
      <line x1="220" y1="110" x2="220" y2="60" stroke="#ffffff" strokeWidth="1" opacity="0.7" />

      {/* Containers/Cargo Stacks */}
      <g opacity="0.7">
        {/* Stack 1 */}
        <rect x="140" y="95" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="140" y="75" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />

        {/* Stack 2 */}
        <rect x="170" y="95" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="170" y="75" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="170" y="55" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />

        {/* Stack 3 */}
        <rect x="200" y="95" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="200" y="75" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="200" y="55" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />

        {/* Stack 4 */}
        <rect x="230" y="95" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="230" y="75" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />

        {/* Stack 5 */}
        <rect x="260" y="95" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="260" y="75" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <rect x="260" y="55" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="0.8" />
      </g>

      {/* Ship Cabin/Bridge */}
      <rect
        x="160"
        y="85"
        width="80"
        height="25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Anchor Chain */}
      <line x1="100" y1="140" x2="100" y2="165" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
      <line x1="300" y1="140" x2="300" y2="165" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />

      {/* Ship Name/Details - subtle lines */}
      <line x1="120" y1="150" x2="260" y2="150" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
