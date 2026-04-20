export default function HeroMeshBg() {
  return (
    <div aria-hidden="true" className="waves-bg pointer-events-none absolute inset-0 overflow-hidden">

      {/* Layer 1: back — tall, slow */}
      <div className="wave-layer wave-layer--back">
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5B8C6F" d="
            M 0 110
            C 150 40, 300 40, 450 110
            S 750 180, 900 110
            S 1200 40, 1200 110
            C 1350 40, 1500 40, 1650 110
            S 1950 180, 2100 110
            S 2400 40, 2400 110
            L 2400 200 L 0 200 Z
          " />
        </svg>
      </div>

      {/* Layer 2: mid — medium amplitude */}
      <div className="wave-layer wave-layer--mid">
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5B8C6F" d="
            M 0 120
            C 100 70, 200 70, 300 120
            S 500 170, 600 120
            S 800 70, 900 120
            S 1100 170, 1200 120
            C 1300 70, 1400 70, 1500 120
            S 1700 170, 1800 120
            S 2000 70, 2100 120
            S 2300 170, 2400 120
            L 2400 200 L 0 200 Z
          " />
        </svg>
      </div>

      {/* Layer 3: front — tight wavelength */}
      <div className="wave-layer wave-layer--front">
        <svg viewBox="0 0 2400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5B8C6F" d="
            M 0 140
            C 50 115, 100 115, 150 140
            S 250 165, 300 140
            S 400 115, 450 140
            S 550 165, 600 140
            S 700 115, 750 140
            S 850 165, 900 140
            S 1000 115, 1050 140
            S 1150 165, 1200 140
            C 1250 115, 1300 115, 1350 140
            S 1450 165, 1500 140
            S 1600 115, 1650 140
            S 1750 165, 1800 140
            S 1900 115, 1950 140
            S 2050 165, 2100 140
            S 2200 115, 2250 140
            S 2350 165, 2400 140
            L 2400 200 L 0 200 Z
          " />
        </svg>
      </div>

    </div>
  );
}
