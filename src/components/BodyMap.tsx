import { useState } from "react";
import { BodyRegion } from "@/data/programs";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

const regions: { id: BodyRegion; label: string; path: string }[] = [
  { id: "neck", label: "Neck", path: "M 145,70 Q 150,55 155,70 Q 160,80 155,85 Q 150,90 145,85 Q 140,80 145,70 Z" },
  { id: "shoulder", label: "Shoulder", path: "M 120,90 Q 110,85 105,95 Q 100,105 105,115 L 120,110 Q 125,100 120,90 Z M 180,90 Q 190,85 195,95 Q 200,105 195,115 L 180,110 Q 175,100 180,90 Z" },
  { id: "elbow-wrist-hand", label: "Elbow, Wrist & Hand", path: "M 100,115 Q 95,130 90,150 Q 88,160 85,175 Q 82,185 80,195 L 90,195 Q 93,185 95,175 Q 98,160 100,150 Q 103,135 105,120 Z M 200,115 Q 205,130 210,150 Q 212,160 215,175 Q 218,185 220,195 L 210,195 Q 207,185 205,175 Q 202,160 200,150 Q 197,135 195,120 Z" },
  { id: "lower-back", label: "Lower Back", path: "M 130,130 L 170,130 L 172,160 L 128,160 Z" },
  { id: "hip-groin", label: "Hip & Groin", path: "M 120,160 L 180,160 L 185,185 Q 175,195 165,195 L 155,195 L 150,190 L 145,195 L 135,195 Q 125,195 115,185 Z" },
  { id: "thigh", label: "Thigh", path: "M 120,195 L 145,195 L 142,240 L 118,240 Z M 155,195 L 180,195 L 182,240 L 158,240 Z" },
  { id: "knee", label: "Knee", path: "M 118,240 L 142,240 L 140,265 L 120,265 Z M 158,240 L 182,240 L 180,265 L 160,265 Z" },
  { id: "lower-leg", label: "Lower Leg", path: "M 120,265 L 140,265 L 138,310 L 122,310 Z M 160,265 L 180,265 L 178,310 L 162,310 Z" },
  { id: "ankle-foot", label: "Ankle & Foot", path: "M 122,310 L 138,310 L 140,330 Q 142,335 138,338 L 118,338 Q 114,335 116,330 Z M 162,310 L 178,310 L 180,330 Q 182,335 178,338 L 158,338 Q 154,335 156,330 Z" },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="60 30 180 330" className="w-64 h-auto md:w-80" role="img" aria-label="Human body diagram - click a body region to find exercises">
          <ellipse cx="150" cy="42" rx="18" ry="20" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          {regions.map((region) => (
            <g
              key={region.id}
              className="cursor-pointer"
              onClick={() => onSelectRegion(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <path
                d={region.path}
                fill={isHighlighted(region.id) ? "hsl(var(--primary) / 0.3)" : "hsl(var(--muted) / 0.8)"}
                stroke={isHighlighted(region.id) ? "hsl(var(--primary))" : "hsl(var(--border))"}
                strokeWidth={isHighlighted(region.id) ? "2" : "1.2"}
                className="transition-all duration-200"
              />
            </g>
          ))}
        </svg>
      </div>

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
