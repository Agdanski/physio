import { useState } from "react";
import { BodyRegion } from "@/data/programs";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

type HitRect = { x: number; y: number; w: number; h: number };

const regionDefs: { id: BodyRegion; label: string; rects: HitRect[] }[] = [
  {
    id: "neck",
    label: "Neck",
    rects: [
      { x: 63, y: 38, w: 24, h: 12 },
      { x: 213, y: 38, w: 24, h: 12 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    rects: [
      { x: 38, y: 50, w: 22, h: 14 },
      { x: 90, y: 50, w: 22, h: 14 },
      { x: 188, y: 50, w: 22, h: 14 },
      { x: 240, y: 50, w: 22, h: 14 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    rects: [
      { x: 22, y: 78, w: 16, h: 60 },
      { x: 112, y: 78, w: 16, h: 60 },
      { x: 172, y: 78, w: 16, h: 60 },
      { x: 262, y: 78, w: 16, h: 60 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    rects: [
      { x: 202, y: 76, w: 46, h: 20 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    rects: [
      { x: 52, y: 96, w: 46, h: 16 },
      { x: 202, y: 96, w: 46, h: 16 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    rects: [
      { x: 52, y: 112, w: 22, h: 38 },
      { x: 76, y: 112, w: 22, h: 38 },
      { x: 202, y: 112, w: 22, h: 38 },
      { x: 226, y: 112, w: 22, h: 38 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    rects: [
      { x: 54, y: 150, w: 18, h: 14 },
      { x: 78, y: 150, w: 18, h: 14 },
      { x: 204, y: 150, w: 18, h: 14 },
      { x: 228, y: 150, w: 18, h: 14 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    rects: [
      { x: 54, y: 164, w: 16, h: 40 },
      { x: 80, y: 164, w: 16, h: 40 },
      { x: 204, y: 164, w: 16, h: 40 },
      { x: 230, y: 164, w: 16, h: 40 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    rects: [
      { x: 50, y: 204, w: 20, h: 18 },
      { x: 80, y: 204, w: 20, h: 18 },
      { x: 200, y: 204, w: 20, h: 18 },
      { x: 230, y: 204, w: 20, h: 18 },
    ],
  },
];

/* Clean anatomical silhouettes using smooth curves */
const FrontBody = () => (
  <g>
    {/* Head */}
    <ellipse cx="75" cy="22" rx="14" ry="17" />
    {/* Neck */}
    <rect x="68" y="38" width="14" height="12" rx="3" />
    {/* Torso */}
    <path d="M48,50 Q45,55 44,65 L44,98 Q44,105 52,112 L56,112 L56,98 L94,98 L94,112 L98,112 Q106,105 106,98 L106,65 Q105,55 102,50 Z" />
    {/* Left arm */}
    <path d="M48,50 Q38,52 32,68 L24,100 Q20,112 18,125 Q16,135 22,138 Q28,135 28,125 L34,100 L38,85 L40,70 L44,62" />
    {/* Right arm */}
    <path d="M102,50 Q112,52 118,68 L126,100 Q130,112 132,125 Q134,135 128,138 Q122,135 122,125 L116,100 L112,85 L110,70 L106,62" />
    {/* Left leg */}
    <path d="M56,112 L54,150 L56,164 L58,195 Q58,205 54,212 Q50,220 52,222 Q58,222 62,215 Q64,205 62,195 L62,164 L64,150 L66,112" />
    {/* Right leg */}
    <path d="M84,112 L86,150 L84,164 L82,195 Q82,205 86,212 Q90,220 92,222 Q98,222 98,215 Q96,205 92,195 L88,164 L86,150 L84,112" />
  </g>
);

const BackBody = () => (
  <g>
    {/* Head */}
    <ellipse cx="225" cy="22" rx="14" ry="17" />
    {/* Neck */}
    <rect x="218" y="38" width="14" height="12" rx="3" />
    {/* Torso */}
    <path d="M198,50 Q195,55 194,65 L194,98 Q194,105 202,112 L206,112 L206,98 L244,98 L244,112 L248,112 Q256,105 256,98 L256,65 Q255,55 252,50 Z" />
    {/* Left arm */}
    <path d="M198,50 Q188,52 182,68 L174,100 Q170,112 168,125 Q166,135 172,138 Q178,135 178,125 L184,100 L188,85 L190,70 L194,62" />
    {/* Right arm */}
    <path d="M252,50 Q262,52 268,68 L276,100 Q280,112 282,125 Q284,135 278,138 Q272,135 272,125 L266,100 L262,85 L260,70 L256,62" />
    {/* Left leg */}
    <path d="M206,112 L204,150 L206,164 L208,195 Q208,205 204,212 Q200,220 202,222 Q208,222 212,215 Q214,205 212,195 L212,164 L214,150 L216,112" />
    {/* Right leg */}
    <path d="M234,112 L236,150 L234,164 L232,195 Q232,205 236,212 Q240,220 242,222 Q248,222 248,215 Q246,205 242,195 L238,164 L236,150 L234,112" />
  </g>
);

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto">
        <svg
          viewBox="0 0 300 240"
          className="w-full h-auto"
          role="img"
          aria-label="Human body diagram — click a body region to find exercises"
        >
          {/* Body fills */}
          <g fill="hsl(30 25% 87%)" stroke="hsl(30 15% 68%)" strokeWidth="0.6" strokeLinejoin="round">
            <FrontBody />
            <BackBody />
          </g>

          {/* Labels */}
          <text x="75" y="236" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(220 15% 35%)" fontFamily="system-ui, sans-serif">
            FRONT
          </text>
          <text x="225" y="236" textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(220 15% 35%)" fontFamily="system-ui, sans-serif">
            BACK
          </text>

          {/* Hit regions */}
          {regionDefs.map((region) =>
            region.rects.map((r, i) => (
              <rect
                key={`${region.id}-${i}`}
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                rx={3}
                fill={isHighlighted(region.id) ? "hsl(var(--primary) / 0.25)" : "transparent"}
                stroke={isHighlighted(region.id) ? "hsl(var(--primary) / 0.55)" : "transparent"}
                strokeWidth={1}
                className="cursor-pointer"
                onClick={() => onSelectRegion(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                role="button"
                tabIndex={0}
                aria-label={region.label}
              />
            ))
          )}
        </svg>
      </div>

      {/* Button grid */}
      <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-md">
        {regionDefs.map((region) => (
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
