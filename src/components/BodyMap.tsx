import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Percentage-based hit zones mapped to the anatomical image.
// Image is landscape (~3:2). Front figure centered ~28%, back figure ~67%.
const regions: { id: BodyRegion; label: string; areas: { x: number; y: number; w: number; h: number }[] }[] = [
  {
    id: "neck",
    label: "Neck",
    areas: [
      // Front neck (yellow band between head and shoulders)
      { x: 24, y: 14, w: 8, h: 5 },
      // Back neck
      { x: 61, y: 10, w: 8, h: 6 },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    areas: [
      // Front left shoulder (orange)
      { x: 14, y: 16, w: 11, h: 10 },
      // Front right shoulder (orange)
      { x: 31, y: 16, w: 11, h: 10 },
      // Back left shoulder (orange)
      { x: 52, y: 14, w: 10, h: 10 },
      // Back right shoulder (orange)
      { x: 70, y: 14, w: 10, h: 10 },
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    areas: [
      // Front left arm (green)
      { x: 9, y: 28, w: 8, h: 34 },
      // Front right arm (green)
      { x: 38, y: 28, w: 8, h: 34 },
      // Back left arm (green)
      { x: 47, y: 28, w: 7, h: 34 },
      // Back right arm (green)
      { x: 77, y: 28, w: 7, h: 34 },
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    areas: [
      // Front torso / chest+abs (blue region)
      { x: 21, y: 20, w: 14, h: 22 },
      // Back — upper + lower back (blue + purple)
      { x: 59, y: 20, w: 12, h: 22 },
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    areas: [
      // Front hip/groin (purple shorts area)
      { x: 19, y: 42, w: 18, h: 9 },
      // Back glutes (pink)
      { x: 56, y: 42, w: 18, h: 12 },
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    areas: [
      // Front left thigh
      { x: 17, y: 51, w: 10, h: 14 },
      // Front right thigh
      { x: 28, y: 51, w: 10, h: 14 },
      // Back left thigh (red)
      { x: 55, y: 54, w: 10, h: 12 },
      // Back right thigh (red)
      { x: 66, y: 54, w: 10, h: 12 },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    areas: [
      // Front left knee (red)
      { x: 18, y: 64, w: 8, h: 7 },
      // Front right knee (red)
      { x: 29, y: 64, w: 8, h: 7 },
      // Back left knee
      { x: 56, y: 66, w: 8, h: 5 },
      // Back right knee
      { x: 67, y: 66, w: 8, h: 5 },
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    areas: [
      // Front left calf (purple+blue)
      { x: 18, y: 71, w: 8, h: 16 },
      // Front right calf
      { x: 29, y: 71, w: 8, h: 16 },
      // Back left calf (blue)
      { x: 56, y: 71, w: 8, h: 16 },
      // Back right calf
      { x: 67, y: 71, w: 8, h: 16 },
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    areas: [
      // Front left foot (teal)
      { x: 17, y: 87, w: 9, h: 11 },
      // Front right foot
      { x: 29, y: 87, w: 9, h: 11 },
      // Back left foot
      { x: 55, y: 87, w: 9, h: 11 },
      // Back right foot
      { x: 67, y: 87, w: 9, h: 11 },
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
