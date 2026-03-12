import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// All coordinates are % of image width/height.
// Calibrated by visual testing against the rendered image.
const regions: { id: BodyRegion; label: string; areas: { x: number; y: number; w: number; h: number }[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [
      { x: 24, y: 16, w: 8, h: 5 },
      { x: 61, y: 13, w: 8, h: 5 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      { x: 14, y: 19, w: 11, h: 9 },
      { x: 31, y: 19, w: 11, h: 9 },
      { x: 52, y: 17, w: 10, h: 9 },
      { x: 70, y: 17, w: 10, h: 9 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      { x: 9, y: 30, w: 8, h: 30 },
      { x: 38, y: 30, w: 8, h: 30 },
      { x: 47, y: 30, w: 7, h: 30 },
      { x: 77, y: 30, w: 7, h: 30 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      { x: 21, y: 23, w: 14, h: 19 },
      { x: 59, y: 23, w: 12, h: 19 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [
      { x: 19, y: 42, w: 18, h: 8 },
      { x: 56, y: 42, w: 18, h: 10 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      { x: 17, y: 50, w: 10, h: 14 },
      { x: 28, y: 50, w: 10, h: 14 },
      { x: 55, y: 52, w: 10, h: 12 },
      { x: 66, y: 52, w: 10, h: 12 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      { x: 18, y: 64, w: 8, h: 6 },
      { x: 29, y: 64, w: 8, h: 6 },
      { x: 56, y: 64, w: 8, h: 5 },
      { x: 67, y: 64, w: 8, h: 5 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      { x: 18, y: 70, w: 8, h: 14 },
      { x: 29, y: 70, w: 8, h: 14 },
      { x: 56, y: 69, w: 8, h: 14 },
      { x: 67, y: 69, w: 8, h: 14 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      { x: 17, y: 84, w: 9, h: 10 },
      { x: 29, y: 84, w: 9, h: 10 },
      { x: 55, y: 83, w: 9, h: 10 },
      { x: 67, y: 83, w: 9, h: 10 },
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
              className="absolute rounded-md transition-all duration-200"
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
