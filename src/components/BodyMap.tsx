import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// The image has two figures side by side.
// Front figure center is ~30% from left, back figure center is ~65%.
// We map clickable zones on BOTH figures for each region.
// All values are percentages of the full image.
const regions: { id: BodyRegion; label: string; areas: { x: number; y: number; w: number; h: number }[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [
      // Front neck
      { x: 26.5, y: 9, w: 5.5, h: 4 },
      // Back neck
      { x: 61, y: 7, w: 5.5, h: 5 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      // Front left shoulder
      { x: 20, y: 11, w: 7.5, h: 8 },
      // Front right shoulder
      { x: 31, y: 11, w: 7.5, h: 8 },
      // Back left shoulder
      { x: 55, y: 11, w: 7, h: 8 },
      // Back right shoulder
      { x: 65.5, y: 11, w: 7, h: 8 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      // Front left arm
      { x: 16, y: 22, w: 6, h: 30 },
      // Front right arm
      { x: 36.5, y: 22, w: 6, h: 30 },
      // Back left arm
      { x: 51, y: 22, w: 6, h: 30 },
      // Back right arm
      { x: 70.5, y: 22, w: 6, h: 30 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      // Front torso (chest/abs)
      { x: 24, y: 19, w: 10.5, h: 18 },
      // Back torso (upper & lower back)
      { x: 58.5, y: 16, w: 10.5, h: 22 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [
      // Front hip/groin
      { x: 23, y: 37, w: 12.5, h: 8 },
      // Back glutes
      { x: 57, y: 38, w: 13.5, h: 10 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      // Front left thigh
      { x: 22, y: 45, w: 7, h: 16 },
      // Front right thigh
      { x: 29.5, y: 45, w: 7, h: 16 },
      // Back left thigh
      { x: 57, y: 48, w: 7, h: 14 },
      // Back right thigh
      { x: 64, y: 48, w: 7, h: 14 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      // Front left knee
      { x: 23, y: 61, w: 5.5, h: 7 },
      // Front right knee
      { x: 30, y: 61, w: 5.5, h: 7 },
      // Back left knee
      { x: 57.5, y: 62, w: 5.5, h: 6 },
      // Back right knee
      { x: 64, y: 62, w: 5.5, h: 6 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      // Front left calf
      { x: 23, y: 68, w: 5.5, h: 18 },
      // Front right calf
      { x: 30, y: 68, w: 5.5, h: 18 },
      // Back left calf
      { x: 57.5, y: 68, w: 5.5, h: 18 },
      // Back right calf
      { x: 64, y: 68, w: 5.5, h: 18 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      // Front left foot
      { x: 22, y: 86, w: 6, h: 12 },
      // Front right foot
      { x: 30, y: 86, w: 6, h: 12 },
      // Back left foot
      { x: 57, y: 86, w: 6, h: 12 },
      // Back right foot
      { x: 64, y: 86, w: 6, h: 12 },
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
