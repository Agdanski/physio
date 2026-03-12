import { useState } from "react";
import { BodyRegion } from "@/data/programs";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

const regions: { id: BodyRegion; label: string; paths: string[] }[] = [
  {
    id: "neck",
    label: "Neck",
    paths: [
      // Neck — short cylinder connecting head to shoulders
      "M 93,54 L 93,66 L 107,66 L 107,54 Z",
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    paths: [
      // Left shoulder — deltoid cap
      "M 93,66 C 86,66 78,68 72,72 C 66,76 62,82 60,88 L 74,88 L 80,78 L 88,70 L 93,68 Z",
      // Right shoulder
      "M 107,66 C 114,66 122,68 128,72 C 134,76 138,82 140,88 L 126,88 L 120,78 L 112,70 L 107,68 Z",
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    paths: [
      // Left arm — upper arm + forearm + hand
      "M 60,88 C 58,96 55,108 52,120 C 49,132 47,142 45,150 C 43,158 41,166 39,174 C 37,182 35,190 34,196 C 33,200 33,204 35,208 C 37,212 41,212 43,208 C 45,204 45,198 44,192 C 46,186 48,176 50,166 C 52,156 55,144 58,132 C 60,124 63,114 66,106 C 68,100 70,94 72,90 L 74,88 Z",
      // Right arm
      "M 140,88 C 142,96 145,108 148,120 C 151,132 153,142 155,150 C 157,158 159,166 161,174 C 163,182 165,190 166,196 C 167,200 167,204 165,208 C 163,212 159,212 157,208 C 155,204 155,198 156,192 C 154,186 152,176 150,166 C 148,156 145,144 142,132 C 140,124 137,114 134,106 C 132,100 130,94 128,90 L 126,88 Z",
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    paths: [
      // Upper torso / chest (visually part of "lower-back" region which maps to the trunk)
      // Chest region — from shoulder line to waist
      "M 93,66 L 88,70 L 80,78 L 74,88 L 72,90 C 72,96 73,106 74,114 L 76,124 L 78,130 L 78,132 L 122,132 L 122,130 L 124,124 L 126,114 C 127,106 128,96 128,90 L 126,88 L 120,78 L 112,70 L 107,66 Z",
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    paths: [
      // Waist + pelvis — from waist to top of thigh
      "M 78,132 L 78,142 C 78,148 80,154 82,158 L 86,164 L 90,168 L 100,168 L 110,168 L 114,164 L 118,158 C 120,154 122,148 122,142 L 122,132 Z",
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    paths: [
      // Left thigh
      "M 82,158 L 86,164 L 90,168 C 90,176 88,190 87,204 C 86,218 85,228 85,234 L 95,234 C 95,228 95,218 96,204 C 96,190 98,176 100,168 Z",
      // Right thigh
      "M 100,168 C 102,176 104,190 104,204 C 104,218 105,228 105,234 L 115,234 C 115,228 114,218 113,204 C 112,190 110,176 110,168 L 114,164 L 118,158 Z",
    ],
  },
  {
    id: "knee",
    label: "Knee",
    paths: [
      // Left knee
      "M 85,234 L 95,234 C 95,238 95,244 95,248 C 95,252 94,254 93,256 L 87,256 C 86,254 85,252 85,248 C 84,244 85,238 85,234 Z",
      // Right knee
      "M 105,234 L 115,234 C 115,238 116,244 115,248 C 115,252 114,254 113,256 L 107,256 C 106,254 105,252 105,248 C 104,244 105,238 105,234 Z",
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    paths: [
      // Left calf
      "M 87,256 L 93,256 C 94,264 94,276 93,290 C 92,300 91,308 90,314 L 87,314 C 86,308 85,300 84,290 C 83,276 84,264 87,256 Z",
      // Right calf
      "M 107,256 L 113,256 C 114,264 115,276 116,290 C 117,300 115,308 114,314 L 111,314 C 110,308 109,300 108,290 C 107,276 107,264 107,256 Z",
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    paths: [
      // Left foot
      "M 87,314 L 90,314 C 90,318 90,322 89,326 C 88,330 86,332 83,334 C 80,336 77,336 76,334 C 75,332 76,330 78,328 C 80,326 82,322 84,318 Z",
      // Right foot
      "M 111,314 L 114,314 C 116,318 118,322 120,326 C 122,328 124,330 125,332 C 126,334 125,336 123,336 C 121,336 118,336 115,334 C 112,332 111,330 111,326 C 111,322 111,318 111,314 Z",
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          viewBox="25 8 150 344"
          className="w-48 h-auto md:w-60"
          role="img"
          aria-label="Human body diagram — click a body region to find exercises"
        >
          <defs>
            <radialGradient id="skinFill" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.05)" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.14)" />
            </radialGradient>
            <radialGradient id="headFill" cx="50%" cy="38%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.05)" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.15)" />
            </radialGradient>
            <filter id="bodyShadow" x="-6%" y="-3%" width="112%" height="108%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="hsl(var(--foreground) / 0.06)" />
            </filter>
          </defs>

          {/* Head */}
          <ellipse
            cx="100"
            cy="36"
            rx="14"
            ry="18"
            fill="url(#headFill)"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />

          {/* Body regions */}
          <g filter="url(#bodyShadow)">
            {regions.map((region) => (
              <g
                key={region.id}
                className="cursor-pointer"
                onClick={() => onSelectRegion(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {region.paths.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill={
                      isHighlighted(region.id)
                        ? "hsl(var(--primary) / 0.22)"
                        : "url(#skinFill)"
                    }
                    stroke={
                      isHighlighted(region.id)
                        ? "hsl(var(--primary))"
                        : "hsl(var(--border) / 0.5)"
                    }
                    strokeWidth={isHighlighted(region.id) ? "1.6" : "0.7"}
                    strokeLinejoin="round"
                    className="transition-all duration-200"
                  />
                ))}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Region buttons */}
      <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-md">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onSelectRegion(region.id)}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
              isHighlighted(region.id)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-card-foreground border-border hover:border-primary hover:bg-primary/5"
            }`}
          >
            {region.label}
          </button>
        ))}
      </div>
    </div>
  );
}
