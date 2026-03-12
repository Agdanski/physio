import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Percentage-based hit zones: [left%, top%, width%, height%]
type Zone = [number, number, number, number];

// Coordinates calibrated to the uploaded body-map.png
// Front figure center ~36%, Back figure center ~63%
// Front figure: x range ~26%-47%, Back: ~52%-73%
const regionDefs: { id: BodyRegion; label: string; zones: Zone[] }[] = [
  {
    id: "neck",
    label: "Neck",
    zones: [
      // Front neck (yellow)
      [34, 14, 6, 5],
      // Back neck
      [61, 13, 5, 5],
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    zones: [
      // Front left shoulder (orange)
      [28, 17, 8, 7],
      // Front right shoulder (orange)
      [38, 17, 8, 7],
      // Back left shoulder (orange)
      [53, 17, 8, 7],
      // Back right shoulder (orange)
      [65, 17, 8, 7],
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    zones: [
      // Front left arm (green)
      [24, 28, 6, 28],
      // Front right arm (green)
      [44, 28, 6, 28],
      // Back left arm (green)
      [50, 28, 5, 28],
      // Back right arm (green)
      [72, 28, 5, 28],
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    zones: [
      // Back only - purple/blue lower back
      [57, 37, 13, 9],
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    zones: [
      // Front groin (purple)
      [32, 45, 10, 7],
      // Back glutes (pink)
      [56, 46, 15, 10],
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    zones: [
      // Front left thigh
      [31, 52, 6, 14],
      // Front right thigh
      [37, 52, 6, 14],
      // Back left thigh (red)
      [56, 56, 8, 13],
      // Back right thigh (red)
      [64, 56, 8, 13],
    ],
  },
  {
    id: "knee",
    label: "Knee",
    zones: [
      // Front left knee (red)
      [31, 65, 6, 6],
      // Front right knee (red)
      [37, 65, 6, 6],
      // Back left knee
      [57, 69, 7, 5],
      // Back right knee
      [64, 69, 7, 5],
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    zones: [
      // Front left lower leg
      [31, 71, 6, 16],
      // Front right lower leg
      [37, 71, 6, 16],
      // Back left lower leg (blue)
      [57, 74, 7, 13],
      // Back right lower leg
      [64, 74, 7, 13],
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    zones: [
      // Front left foot (teal)
      [30, 87, 6, 8],
      // Front right foot
      [37, 87, 6, 8],
      // Back left foot
      [56, 87, 7, 8],
      // Back right foot
      [64, 87, 7, 8],
    ],
  },
];

export default function BodyMap({ onSelectRegion, selectedRegion }: BodyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const isHighlighted = (id: BodyRegion) => selectedRegion === id || hoveredRegion === id;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl mx-auto select-none">
        <img
          src={bodyMapImage}
          alt="Human body diagram — click a body region to find exercises"
          className="w-full h-auto"
          draggable={false}
        />

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

        <div className="absolute bottom-1 left-[30%] text-xs font-bold text-muted-foreground tracking-wide">
          FRONT
        </div>
        <div className="absolute bottom-1 left-[58%] text-xs font-bold text-muted-foreground tracking-wide">
          BACK
        </div>
      </div>

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
