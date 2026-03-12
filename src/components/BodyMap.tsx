import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Percentage-based hit zones mapped to color regions in the image
// Each zone: [left%, top%, width%, height%]
type Zone = [number, number, number, number];

const regionDefs: { id: BodyRegion; label: string; zones: Zone[] }[] = [
  {
    id: "neck",
    label: "Neck",
    zones: [
      // Front neck (yellow area)
      [22, 12, 8, 6],
      // Back neck
      [64, 12, 8, 6],
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    zones: [
      // Front left shoulder (orange)
      [13, 14, 10, 8],
      // Front right shoulder (orange)
      [29, 14, 10, 8],
      // Back left shoulder (orange)
      [55, 14, 10, 8],
      // Back right shoulder (orange)
      [71, 14, 10, 8],
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    zones: [
      // Front left arm (green)
      [8, 28, 7, 32],
      // Front right arm (green)
      [37, 28, 7, 32],
      // Back left arm (green)
      [50, 28, 7, 32],
      // Back right arm (green)
      [79, 28, 7, 32],
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    zones: [
      // Back only - purple/blue lower back area
      [58, 36, 20, 10],
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    zones: [
      // Front groin (purple)
      [19, 44, 14, 8],
      // Back glutes (pink/magenta)
      [58, 46, 20, 10],
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    zones: [
      // Front left thigh
      [18, 52, 8, 16],
      // Front right thigh
      [27, 52, 8, 16],
      // Back left thigh (red)
      [57, 56, 10, 14],
      // Back right thigh (red)
      [69, 56, 10, 14],
    ],
  },
  {
    id: "knee",
    label: "Knee",
    zones: [
      // Front left knee (red)
      [18, 66, 8, 7],
      // Front right knee (red)
      [27, 66, 8, 7],
      // Back left knee
      [58, 69, 9, 6],
      // Back right knee
      [70, 69, 9, 6],
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    zones: [
      // Front left lower leg (purple + blue)
      [18, 73, 8, 16],
      // Front right lower leg
      [27, 73, 8, 16],
      // Back left lower leg (blue)
      [58, 75, 9, 14],
      // Back right lower leg
      [70, 75, 9, 14],
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    zones: [
      // Front left foot (teal)
      [17, 89, 8, 8],
      // Front right foot
      [27, 89, 8, 8],
      // Back left foot
      [57, 89, 9, 8],
      // Back right foot
      [70, 89, 9, 8],
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      {/* Image container with overlay hit zones */}
      <div className="relative w-full max-w-xl mx-auto select-none">
        <img
          src={bodyMapImage}
          alt="Human body diagram — click a body region to find exercises"
          className="w-full h-auto"
          draggable={false}
        />

        {/* Hit zone overlays */}
        {regionDefs.map((region) =>
          region.zones.map((zone, i) => (
            <button
              key={`${region.id}-${i}`}
              onClick={() => onSelectRegion(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              aria-label={region.label}
              className="absolute rounded-lg transition-all duration-200 border-2"
              style={{
                left: `${zone[0]}%`,
                top: `${zone[1]}%`,
                width: `${zone[2]}%`,
                height: `${zone[3]}%`,
                backgroundColor: isHighlighted(region.id)
                  ? "hsl(var(--primary) / 0.3)"
                  : "transparent",
                borderColor: isHighlighted(region.id)
                  ? "hsl(var(--primary) / 0.7)"
                  : "transparent",
              }}
            />
          ))
        )}

        {/* View labels */}
        <div className="absolute bottom-1 left-[18%] text-xs font-bold text-muted-foreground tracking-wide">
          FRONT
        </div>
        <div className="absolute bottom-1 left-[62%] text-xs font-bold text-muted-foreground tracking-wide">
          BACK
        </div>
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
