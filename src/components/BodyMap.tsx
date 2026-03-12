import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

// Percentage-based hit zones: [left%, top%, width%, height%]
type Zone = [number, number, number, number];

// Coordinates calibrated to src/assets/body-map.png (front + back figures)
const regionDefs: { id: BodyRegion; label: string; zones: Zone[] }[] = [
  {
    id: "neck",
    label: "Neck",
    zones: [
      // Front neck / upper collar
      [27, 16, 6, 6],
      // Back neck
      [64, 15, 5, 6],
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    zones: [
      // Front shoulders (orange)
      [22, 21, 6, 12],
      [34, 21, 6, 12],
      // Back shoulders (orange)
      [58, 21, 6, 12],
      [70, 21, 6, 12],
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    zones: [
      // Front arms (green / teal)
      [18.5, 29, 5.5, 31],
      [37, 29, 5.5, 31],
      // Back arms (green / teal)
      [53.5, 29, 5.5, 31],
      [74, 29, 5.5, 31],
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    zones: [
      // Posterior only (purple)
      [60, 36, 13.5, 16],
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    zones: [
      // Front groin/pelvis (purple)
      [27, 45, 10.5, 13.5],
      // Back glutes (pink)
      [60, 45, 13.5, 14],
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    zones: [
      // Intentionally removed from both views per mapping request
    ],
  },
  {
    id: "knee",
    label: "Knee",
    zones: [
      // Front: what was previously thigh
      [23, 58.5, 5.8, 18.8],
      [33, 58.5, 5.8, 18.8],
      // Back: removed per mapping request
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    zones: [
      // Front: what was previously knee
      [23.4, 74.9, 5.4, 8.8],
      [33, 74.9, 5.4, 8.8],
      // Back: what was previously knee
      [60.2, 74.2, 4.8, 8.7],
      [68.1, 74.2, 4.8, 8.7],
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    zones: [
      // Front: what was previously lower leg
      [22.8, 82.8, 6, 15.3],
      [30.6, 82.8, 6, 15.3],
      // Back: what was previously lower leg
      [59.7, 79.9, 6.2, 15.2],
      [67.7, 79.9, 6.2, 15.2],
      // Removed previous too-low ankle/foot zones on both views
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
