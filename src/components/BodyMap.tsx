import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

type RegionArea = { x: number; y: number; w: number; h: number };

const regions: { id: BodyRegion; label: string; areas: RegionArea[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [
      { x: 24, y: 19, w: 8, h: 5 },
      { x: 61, y: 16, w: 8, h: 5 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      { x: 14, y: 22, w: 11, h: 9 },
      { x: 31, y: 22, w: 11, h: 9 },
      { x: 52, y: 20, w: 10, h: 9 },
      { x: 70, y: 20, w: 10, h: 9 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      { x: 12, y: 33, w: 7, h: 30 },
      { x: 36, y: 33, w: 7, h: 30 },
      { x: 49, y: 33, w: 7, h: 30 },
      { x: 75, y: 33, w: 7, h: 30 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      // Posterior-only: lumbar area is not visible on frontal diagram
      { x: 58, y: 33, w: 14, h: 11 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [
      { x: 19, y: 45, w: 18, h: 8 },
      { x: 56, y: 45, w: 18, h: 10 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      { x: 17, y: 53, w: 10, h: 14 },
      { x: 28, y: 53, w: 10, h: 14 },
      { x: 55, y: 55, w: 10, h: 12 },
      { x: 66, y: 55, w: 10, h: 12 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      { x: 18, y: 67, w: 8, h: 6 },
      { x: 29, y: 67, w: 8, h: 6 },
      { x: 56, y: 67, w: 8, h: 5 },
      { x: 67, y: 67, w: 8, h: 5 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      { x: 18, y: 73, w: 8, h: 14 },
      { x: 29, y: 73, w: 8, h: 14 },
      { x: 56, y: 72, w: 8, h: 14 },
      { x: 67, y: 72, w: 8, h: 14 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      { x: 17, y: 87, w: 9, h: 10 },
      { x: 29, y: 87, w: 9, h: 10 },
      { x: 55, y: 86, w: 9, h: 10 },
      { x: 67, y: 86, w: 9, h: 10 },
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl mx-auto">
        <img
          src={bodyMapImage}
          alt="Human body diagram — click a body region to find exercises"
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        {regions.map((region) =>
          region.areas.map((area, i) => (
            <button
              key={`${region.id}-${i}`}
              onClick={() => onSelectRegion(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="absolute rounded-xl transition-all duration-200"
              style={{
                left: `${area.x}%`,
                top: `${area.y}%`,
                width: `${area.w}%`,
                height: `${area.h}%`,
                backgroundColor: isHighlighted(region.id)
                  ? "hsl(var(--primary) / 0.25)"
                  : "transparent",
                border: isHighlighted(region.id)
                  ? "2px solid hsl(var(--primary) / 0.6)"
                  : "2px solid transparent",
                cursor: "pointer",
              }}
              aria-label={region.label}
            />
          ))
        )}
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
