import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Percentage-based hit zones on the anatomical image.
// The image is landscape with whitespace. Figures occupy roughly
// the vertical range 5%-98% and horizontal range 12%-85%.
// Front figure center ~28%, back figure center ~67%.
const regions: { id: BodyRegion; label: string; areas: { x: number; y: number; w: number; h: number }[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [
      { x: 24, y: 22, w: 8, h: 5 },
      { x: 61, y: 18, w: 8, h: 6 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      // Front left shoulder (orange deltoid)
      { x: 14, y: 25, w: 11, h: 9 },
      // Front right shoulder
      { x: 31, y: 25, w: 11, h: 9 },
      // Back left shoulder
      { x: 52, y: 23, w: 10, h: 9 },
      // Back right shoulder
      { x: 70, y: 23, w: 10, h: 9 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      // Front left arm (green)
      { x: 9, y: 36, w: 8, h: 30 },
      // Front right arm
      { x: 38, y: 36, w: 8, h: 30 },
      // Back left arm
      { x: 47, y: 36, w: 7, h: 30 },
      // Back right arm
      { x: 77, y: 36, w: 7, h: 30 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      // Front torso (blue chest + abs)
      { x: 21, y: 28, w: 14, h: 20 },
      // Back torso (blue upper back + purple lower back)
      { x: 59, y: 28, w: 12, h: 20 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [
      // Front hip/groin (purple shorts)
      { x: 19, y: 48, w: 18, h: 8 },
      // Back glutes (pink)
      { x: 56, y: 48, w: 18, h: 10 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      { x: 17, y: 56, w: 10, h: 14 },
      { x: 28, y: 56, w: 10, h: 14 },
      { x: 55, y: 58, w: 10, h: 12 },
      { x: 66, y: 58, w: 10, h: 12 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      { x: 18, y: 70, w: 8, h: 6 },
      { x: 29, y: 70, w: 8, h: 6 },
      { x: 56, y: 70, w: 8, h: 5 },
      { x: 67, y: 70, w: 8, h: 5 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      { x: 18, y: 76, w: 8, h: 14 },
      { x: 29, y: 76, w: 8, h: 14 },
      { x: 56, y: 75, w: 8, h: 14 },
      { x: 67, y: 75, w: 8, h: 14 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      { x: 17, y: 90, w: 9, h: 9 },
      { x: 29, y: 90, w: 9, h: 9 },
      { x: 55, y: 89, w: 9, h: 9 },
      { x: 67, y: 89, w: 9, h: 9 },
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
