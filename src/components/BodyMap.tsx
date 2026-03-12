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
      "M 91,56 C 91,56 89,64 88,70 L 88,76 L 112,76 L 112,70 C 111,64 109,56 109,56 Z",
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    paths: [
      // Left shoulder
      "M 88,76 C 84,76 78,77 72,80 C 65,84 60,90 57,97 C 55,102 55,106 56,108 L 72,104 L 78,90 L 84,82 L 88,78 Z",
      // Right shoulder
      "M 112,76 C 116,76 122,77 128,80 C 135,84 140,90 143,97 C 145,102 145,106 144,108 L 128,104 L 122,90 L 116,82 L 112,78 Z",
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    paths: [
      // Left arm
      "M 56,108 C 54,116 51,128 49,140 C 47,152 45,162 43,170 C 41,178 39,186 37,194 C 35,202 33,210 32,216 C 31,222 30,226 30,230 C 30,236 32,240 36,242 C 40,244 44,242 46,238 C 48,234 48,228 47,222 C 48,216 50,208 52,200 C 54,192 56,182 58,172 C 60,162 63,150 66,140 C 68,132 70,122 72,114 L 72,104 Z",
      // Right arm
      "M 144,108 C 146,116 149,128 151,140 C 153,152 155,162 157,170 C 159,178 161,186 163,194 C 165,202 167,210 168,216 C 169,222 170,226 170,230 C 170,236 168,240 164,242 C 160,244 156,242 154,238 C 152,234 152,228 153,222 C 152,216 150,208 148,200 C 146,192 144,182 142,172 C 140,162 137,150 134,140 C 132,132 130,122 128,114 L 128,104 Z",
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    paths: [
      // Torso
      "M 88,76 L 84,82 L 78,90 L 72,104 L 72,114 C 72,118 74,130 76,140 L 78,150 L 80,156 L 80,160 L 120,160 L 120,156 L 122,150 L 124,140 C 126,130 128,118 128,114 L 128,104 L 122,90 L 116,82 L 112,76 Z",
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    paths: [
      "M 80,160 L 80,172 C 80,178 82,184 84,188 L 88,194 L 92,198 L 100,198 L 100,192 L 100,198 L 108,198 L 112,194 L 116,188 C 118,184 120,178 120,172 L 120,160 Z",
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    paths: [
      // Left thigh
      "M 84,188 L 88,194 L 92,198 C 92,206 90,220 88,234 C 86,248 84,258 84,264 L 96,264 C 96,258 96,248 96,234 C 96,220 98,206 100,198 L 100,192 Z",
      // Right thigh
      "M 100,192 L 100,198 C 102,206 104,220 104,234 C 104,248 104,258 104,264 L 116,264 C 116,258 114,248 112,234 C 110,220 108,206 108,198 L 112,194 L 116,188 Z",
    ],
  },
  {
    id: "knee",
    label: "Knee",
    paths: [
      // Left knee
      "M 84,264 L 96,264 C 96,268 96,274 95,280 C 95,284 94,286 93,288 L 86,288 C 85,286 84,284 84,280 C 83,274 84,268 84,264 Z",
      // Right knee
      "M 104,264 L 116,264 C 116,268 117,274 116,280 C 116,284 115,286 114,288 L 107,288 C 106,286 105,284 104,280 C 104,274 104,268 104,264 Z",
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    paths: [
      // Left calf
      "M 86,288 L 93,288 C 94,298 94,312 93,326 C 92,338 91,346 90,352 L 86,352 C 85,346 84,338 83,326 C 82,312 83,298 86,288 Z",
      // Right calf
      "M 107,288 L 114,288 C 115,298 116,312 117,326 C 118,338 116,346 114,352 L 110,352 C 109,346 108,338 107,326 C 106,312 106,298 107,288 Z",
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    paths: [
      // Left foot
      "M 86,352 L 90,352 C 90,356 90,360 90,364 C 90,368 88,370 85,372 C 82,374 78,374 76,372 C 74,370 74,368 76,366 C 78,364 80,360 82,356 Z",
      // Right foot
      "M 110,352 L 114,352 C 116,356 118,360 120,364 C 122,366 122,368 124,370 C 126,372 126,374 124,374 C 122,374 118,374 115,372 C 112,370 110,368 110,364 C 110,360 110,356 110,352 Z",
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
          viewBox="20 10 160 380"
          className="w-52 h-auto md:w-64"
          role="img"
          aria-label="Human body diagram — click a body region to find exercises"
        >
          <defs>
            <radialGradient id="skinGrad" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.06)" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.15)" />
            </radialGradient>
            <radialGradient id="headGrad" cx="50%" cy="38%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.06)" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.16)" />
            </radialGradient>
            <filter id="softShadow" x="-6%" y="-3%" width="112%" height="108%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="hsl(var(--foreground) / 0.06)" />
            </filter>
          </defs>

          {/* Head */}
          <ellipse
            cx="100"
            cy="36"
            rx="16"
            ry="20"
            fill="url(#headGrad)"
            stroke="hsl(var(--border))"
            strokeWidth="1.2"
          />

          {/* Body regions */}
          <g filter="url(#softShadow)">
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
                        : "url(#skinGrad)"
                    }
                    stroke={
                      isHighlighted(region.id)
                        ? "hsl(var(--primary))"
                        : "hsl(var(--border) / 0.6)"
                    }
                    strokeWidth={isHighlighted(region.id) ? "1.8" : "0.8"}
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
