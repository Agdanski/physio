import { useState } from "react";
import { BodyRegion } from "@/data/programs";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

/* ---------- SVG path data for front & back silhouettes ---------- */

const frontOutline =
  "M100,30 C100,15 90,5 80,5 L70,5 C60,5 50,15 50,30 " + // head
  "L55,45 45,50 30,55 15,80 10,110 15,115 25,90 35,70 40,60 " + // left arm
  "L42,70 38,100 35,130 38,135 42,105 45,75 " + // left hand
  "L48,95 45,140 42,180 40,210 42,215 48,210 50,180 52,145 " + // left leg
  "L50,220 48,230 55,232 58,225 " + // left foot
  "L75,145 " + // crotch
  "L92,225 95,232 102,230 100,220 " + // right foot
  "L98,145 100,180 102,210 108,215 110,210 105,180 102,140 100,95 " + // right leg
  "L105,75 108,105 112,135 115,130 112,100 108,70 110,60 " + // right hand
  "L115,70 125,90 135,115 140,110 135,80 120,55 105,50 95,45 Z";

const backOutline =
  "M250,30 C250,15 240,5 230,5 L220,5 C210,5 200,15 200,30 " +
  "L205,45 195,50 180,55 165,80 160,110 165,115 175,90 185,70 190,60 " +
  "L192,70 188,100 185,130 188,135 192,105 195,75 " +
  "L198,95 195,140 192,180 190,210 192,215 198,210 200,180 202,145 " +
  "L200,220 198,230 205,232 208,225 " +
  "L225,145 " +
  "L242,225 245,232 252,230 250,220 " +
  "L248,145 250,180 252,210 258,215 260,210 255,180 252,140 250,95 " +
  "L255,75 258,105 262,135 265,130 262,100 258,70 260,60 " +
  "L265,70 275,90 285,115 290,110 285,80 270,55 255,50 245,45 Z";

/* ---------- Clickable region shapes (rect x,y,w,h in SVG coords) ---------- */

type HitRect = { x: number; y: number; w: number; h: number };

const regionDefs: { id: BodyRegion; label: string; rects: HitRect[] }[] = [
  {
    id: "neck",
    label: "Neck",
    rects: [
      { x: 55, y: 30, w: 40, h: 18 }, // front
      { x: 205, y: 30, w: 40, h: 18 }, // back
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    rects: [
      { x: 30, y: 48, w: 25, h: 18 }, // front left
      { x: 95, y: 48, w: 25, h: 18 }, // front right
      { x: 180, y: 48, w: 25, h: 18 }, // back left
      { x: 245, y: 48, w: 25, h: 18 }, // back right
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    rects: [
      { x: 12, y: 70, w: 18, h: 55 }, // front left arm
      { x: 120, y: 70, w: 18, h: 55 }, // front right arm
      { x: 162, y: 70, w: 18, h: 55 }, // back left arm
      { x: 270, y: 70, w: 18, h: 55 }, // back right arm
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    rects: [
      // posterior only
      { x: 200, y: 68, w: 50, h: 25 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    rects: [
      { x: 42, y: 88, w: 66, h: 18 }, // front
      { x: 192, y: 88, w: 66, h: 18 }, // back
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    rects: [
      { x: 42, y: 106, w: 30, h: 40 }, // front left
      { x: 78, y: 106, w: 30, h: 40 }, // front right
      { x: 192, y: 106, w: 30, h: 40 }, // back left
      { x: 228, y: 106, w: 30, h: 40 }, // back right
    ],
  },
  {
    id: "knee",
    label: "Knee",
    rects: [
      { x: 44, y: 146, w: 20, h: 16 }, // front left
      { x: 86, y: 146, w: 20, h: 16 }, // front right
      { x: 194, y: 146, w: 20, h: 16 }, // back left
      { x: 236, y: 146, w: 20, h: 16 }, // back right
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    rects: [
      { x: 44, y: 162, w: 18, h: 48 }, // front left
      { x: 88, y: 162, w: 18, h: 48 }, // front right
      { x: 194, y: 162, w: 18, h: 48 }, // back left
      { x: 238, y: 162, w: 18, h: 48 }, // back right
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    rects: [
      { x: 40, y: 210, w: 22, h: 24 }, // front left
      { x: 88, y: 210, w: 22, h: 24 }, // front right
      { x: 190, y: 210, w: 22, h: 24 }, // back left
      { x: 238, y: 210, w: 22, h: 24 }, // back right
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      {/* SVG body map */}
      <div className="w-full max-w-xl mx-auto">
        <svg
          viewBox="0 0 300 250"
          className="w-full h-auto"
          role="img"
          aria-label="Human body diagram — click a body region to find exercises"
        >
          {/* Background */}
          <rect width="300" height="250" fill="white" rx="8" />

          {/* Body silhouettes */}
          <path d={frontOutline} fill="hsl(35 30% 88%)" stroke="hsl(35 15% 65%)" strokeWidth="0.8" />
          <path d={backOutline} fill="hsl(35 30% 88%)" stroke="hsl(35 15% 65%)" strokeWidth="0.8" />

          {/* Labels */}
          <text x="75" y="244" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(var(--foreground))">
            FRONT
          </text>
          <text x="225" y="244" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(var(--foreground))">
            BACK
          </text>

          {/* Clickable hit regions */}
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
                stroke={isHighlighted(region.id) ? "hsl(var(--primary) / 0.6)" : "transparent"}
                strokeWidth={1}
                className="cursor-pointer transition-colors duration-200"
                onClick={() => onSelectRegion(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
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
