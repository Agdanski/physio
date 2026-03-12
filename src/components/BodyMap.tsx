import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Clickable regions as percentage-based overlays on the front body (left figure)
// Coordinates are percentages of the image dimensions
const regions: { id: BodyRegion; label: string; areas: { x: number; y: number; w: number; h: number }[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [{ x: 16.5, y: 8.5, w: 6, h: 5 }],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      { x: 8, y: 10, w: 9, h: 8 },
      { x: 22, y: 10, w: 9, h: 8 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      { x: 3, y: 22, w: 8, h: 28 },
      { x: 28, y: 22, w: 8, h: 28 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      // Front torso (abs/core area maps to lower back program)
      { x: 13, y: 18, w: 13, h: 18 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [{ x: 11, y: 36, w: 17, h: 8 }],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      { x: 10, y: 44, w: 9, h: 18 },
      { x: 20, y: 44, w: 9, h: 18 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      { x: 11, y: 62, w: 7, h: 8 },
      { x: 21, y: 62, w: 7, h: 8 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      { x: 11, y: 70, w: 7, h: 18 },
      { x: 21, y: 70, w: 7, h: 18 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      { x: 10, y: 88, w: 8, h: 10 },
      { x: 21, y: 88, w: 8, h: 10 },
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      {/* Body image with clickable overlay regions */}
      <div className="relative w-full max-w-lg mx-auto">
        <img
          src={bodyMapImage}
          alt="Human body diagram — click a body region to find exercises"
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        {/* Clickable overlay zones */}
        {regions.map((region) =>
          region.areas.map((area, i) => (
            <button
              key={`${region.id}-${i}`}
              onClick={() => onSelectRegion(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="absolute rounded-lg transition-all duration-200"
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
