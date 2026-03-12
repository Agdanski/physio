import { useState } from "react";
import { BodyRegion } from "@/data/programs";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Realistic anatomical body regions with smooth, natural contours
const regions: { id: BodyRegion; label: string; paths: string[] }[] = [
  {
    id: "neck",
    label: "Neck",
    paths: [
      // Neck — cylindrical with slight taper
      "M 188,108 C 188,108 185,120 184,128 C 183,134 183,138 184,142 L 216,142 C 217,138 217,134 216,128 C 215,120 212,108 212,108 Z",
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    paths: [
      // Left shoulder — rounded deltoid
      "M 184,142 C 180,142 170,140 160,144 C 148,149 140,158 136,168 C 133,176 132,182 133,186 L 158,176 C 160,170 164,162 168,156 C 172,150 178,146 184,144 Z",
      // Right shoulder
      "M 216,142 C 220,142 230,140 240,144 C 252,149 260,158 264,168 C 267,176 268,182 267,186 L 242,176 C 240,170 236,162 232,156 C 228,150 222,146 216,144 Z",
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    paths: [
      // Left arm — upper arm, elbow, forearm, wrist, hand
      "M 133,186 C 131,194 128,206 126,218 C 124,230 122,240 120,248 C 118,256 116,264 114,272 C 112,280 110,290 108,300 C 106,308 104,316 102,322 C 100,328 98,334 96,340 C 95,344 94,348 94,352 C 94,358 96,364 100,368 C 104,372 108,374 112,372 C 116,370 118,366 118,360 C 118,356 116,350 116,344 C 118,338 120,330 122,322 C 124,314 127,304 130,294 C 133,284 136,274 138,264 C 140,254 142,244 144,234 C 146,224 148,214 150,206 C 152,198 154,190 156,184 L 158,176 Z",
      // Right arm
      "M 267,186 C 269,194 272,206 274,218 C 276,230 278,240 280,248 C 282,256 284,264 286,272 C 288,280 290,290 292,300 C 294,308 296,316 298,322 C 300,328 302,334 304,340 C 305,344 306,348 306,352 C 306,358 304,364 300,368 C 296,372 292,374 288,372 C 284,370 282,366 282,360 C 282,356 284,350 284,344 C 282,338 280,330 278,322 C 276,314 273,304 270,294 C 267,284 264,274 262,264 C 260,254 258,244 256,234 C 254,224 252,214 250,206 C 248,198 246,190 244,184 L 242,176 Z",
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    paths: [
      // Torso / trunk — chest and abdomen as one region
      "M 184,142 C 178,146 172,150 168,156 C 164,162 160,170 158,176 L 156,184 C 154,190 152,198 172,198 L 172,260 C 172,264 174,268 178,272 L 180,274 L 200,274 L 222,274 L 222,272 C 226,268 228,264 228,260 L 228,198 C 248,198 246,190 244,184 L 242,176 C 240,170 236,162 232,156 C 228,150 222,146 216,144 L 216,142 Z",
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    paths: [
      // Pelvis / hip region
      "M 172,260 L 172,274 L 180,274 L 180,310 L 196,310 L 200,296 L 204,310 L 220,310 L 220,274 L 228,274 L 228,260 Z",
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    paths: [
      // Left thigh — tapered, muscular
      "M 172,310 L 180,310 C 180,320 178,340 176,360 C 174,378 172,394 172,400 L 186,400 C 188,394 190,378 190,360 C 190,340 192,320 196,310 L 196,310 Z",
      // Right thigh
      "M 204,310 C 208,320 210,340 210,360 C 210,378 212,394 214,400 L 228,400 C 228,394 226,378 224,360 C 222,340 220,320 220,310 Z",
    ],
  },
  {
    id: "knee",
    label: "Knee",
    paths: [
      // Left knee — subtle widening
      "M 172,400 L 186,400 C 187,406 188,414 187,422 C 186,428 184,432 182,436 L 174,436 C 172,432 170,428 170,422 C 169,414 170,406 172,400 Z",
      // Right knee
      "M 214,400 L 228,400 C 230,406 231,414 230,422 C 230,428 228,432 226,436 L 218,436 C 216,432 214,428 214,422 C 213,414 214,406 214,400 Z",
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    paths: [
      // Left calf — tapered
      "M 174,436 L 182,436 C 183,450 184,470 183,488 C 182,504 180,516 178,524 L 172,524 C 170,516 168,504 168,488 C 167,470 168,450 174,436 Z",
      // Right calf
      "M 218,436 L 226,436 C 227,450 228,470 227,488 C 226,504 224,516 222,524 L 216,524 C 214,516 212,504 212,488 C 211,470 212,450 218,436 Z",
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    paths: [
      // Left foot
      "M 172,524 L 178,524 C 179,530 180,536 180,540 C 180,546 178,550 174,554 C 170,558 164,560 160,560 C 156,560 154,558 154,554 C 154,550 158,546 162,542 C 166,538 168,532 172,524 Z",
      // Right foot
      "M 216,524 L 222,524 C 221,530 220,536 220,540 C 220,546 222,550 226,554 C 230,558 236,560 240,560 C 244,560 246,558 246,554 C 246,550 242,546 238,542 C 234,538 232,532 228,524 Z",
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
          viewBox="80 50 240 530"
          className="w-56 h-auto md:w-72"
          role="img"
          aria-label="Human body diagram — click a body region to find exercises"
        >
          <defs>
            <radialGradient id="headGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.08)" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.18)" />
            </radialGradient>
            <filter id="bodyShadow" x="-4%" y="-2%" width="108%" height="106%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="hsl(var(--foreground) / 0.08)" />
            </filter>
          </defs>

          {/* Head */}
          <ellipse
            cx="200"
            cy="78"
            rx="24"
            ry="28"
            fill="url(#headGrad)"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
          />
          {/* Subtle face line */}
          <line x1="200" y1="68" x2="200" y2="88" stroke="hsl(var(--border) / 0.3)" strokeWidth="0.5" />

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
                        ? "hsl(var(--primary) / 0.25)"
                        : "hsl(var(--muted-foreground) / 0.12)"
                    }
                    stroke={
                      isHighlighted(region.id)
                        ? "hsl(var(--primary))"
                        : "hsl(var(--border) / 0.7)"
                    }
                    strokeWidth={isHighlighted(region.id) ? "2" : "1"}
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
