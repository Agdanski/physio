import { useState } from "react";
import { BodyRegion } from "@/data/programs";
import bodyMapImage from "@/assets/body-map.png";

interface BodyMapProps {
  onSelectRegion: (region: BodyRegion) => void;
  selectedRegion?: BodyRegion | null;
}

type RegionMap = {
  id: BodyRegion;
  label: string;
  paths: string[];
};

// Coordinates are in a normalized 0–100 SVG viewBox space.
// NOTE: Lower Back intentionally maps only to posterior view.
const regions: RegionMap[] = [
  {
    id: "neck",
    label: "Neck",
    paths: [
      "M26 19 H32 V23 H26 Z",
      "M62 16 H68 V21 H62 Z",
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    paths: [
      "M17 24 C18 21 22 21 24.5 23 C25.5 25 25.5 28 24 30 C21 31 18.5 31 17 28 Z",
      "M32 23 C34.5 21 38.5 21 40 24 C39.5 28 39 30 37 31 C34.5 31 33 30 32 28 Z",
      "M54 22 C55.5 19.5 59.5 19.5 61.5 21.5 C62.5 24.5 62.5 27.5 61 29.5 C58.5 30.5 56 30.5 54.5 28.5 Z",
      "M69 21.5 C71 19.5 75 19.5 77 22 C77.5 25 77 28 75.5 29.5 C73 30.5 70.5 30.5 69.5 28.5 Z",
    ],
  },
  {
    id: "elbow-wrist-hand",
    label: "Elbow, Wrist & Hand",
    paths: [
      "M10 33 C12 31 15 31 16 34 C16.5 43 16.5 53 15.5 62 C13.5 63 11.5 63 10 61 C9.5 52 9.5 42 10 33 Z",
      "M39 33 C41 31 44 31 45 34 C45.5 43 45.5 53 44.5 62 C42.5 63 40.5 63 39 61 C38.5 52 38.5 42 39 33 Z",
      "M47 33 C49 31 51.5 31 53 33.5 C53.5 42 53.5 52 52.5 61.5 C50.5 63 48.5 63 47 61 C46.5 52 46.5 42 47 33 Z",
      "M77 33 C78.5 31 81 31 83 33.5 C83.5 42 83.5 52 82.5 61.5 C81 63 79 63 77.5 61 C76.5 52 76.5 42 77 33 Z",
    ],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    paths: [
      // Posterior lumbar only
      "M58 34 H72 V44 H58 Z",
    ],
  },
  {
    id: "hip-groin",
    label: "Hip & Groin",
    paths: [
      "M20 43 H37 V51 H20 Z",
      "M56 43 H74 V55 H56 Z",
    ],
  },
  {
    id: "thigh",
    label: "Thigh",
    paths: [
      "M18 51 C20 50 24 50 26.5 52 C27 57 26.5 62 25.5 66 C23.5 67 20.5 67 18.5 66 C17.5 62 17.5 56.5 18 51 Z",
      "M28 51 C30 50 34 50 36.5 52 C37 57 36.5 62 35.5 66 C33.5 67 30.5 67 28.5 66 C27.5 62 27.5 56.5 28 51 Z",
      "M56 55 C58 54 61.5 54 64 56 C64.5 60 64 64 63 68 C61 68.5 58.5 68.5 56.5 67.5 C55.5 64 55.5 59.5 56 55 Z",
      "M66 55 C68 54 71.5 54 74 56 C74.5 60 74 64 73 68 C71 68.5 68.5 68.5 66.5 67.5 C65.5 64 65.5 59.5 66 55 Z",
    ],
  },
  {
    id: "knee",
    label: "Knee",
    paths: [
      "M19 65 H26 V71 H19 Z",
      "M29 65 H36 V71 H29 Z",
      "M57 67 H64 V72 H57 Z",
      "M67 67 H74 V72 H67 Z",
    ],
  },
  {
    id: "lower-leg",
    label: "Lower Leg",
    paths: [
      "M19 71 C21 70 24 70 26 71.5 C26.5 76 26 80.5 25.5 85 C23.5 86 21.5 86 19.5 85 C18.5 80 18.5 75.5 19 71 Z",
      "M29 71 C31 70 34 70 36 71.5 C36.5 76 36 80.5 35.5 85 C33.5 86 31.5 86 29.5 85 C28.5 80 28.5 75.5 29 71 Z",
      "M57 72 C59 71 62 71 64 72.5 C64.5 77 64 81.5 63.5 85 C61.5 86 59.5 86 57.5 85 C56.5 81 56.5 76.5 57 72 Z",
      "M67 72 C69 71 72 71 74 72.5 C74.5 77 74 81.5 73.5 85 C71.5 86 69.5 86 67.5 85 C66.5 81 66.5 76.5 67 72 Z",
    ],
  },
  {
    id: "ankle-foot",
    label: "Ankle & Foot",
    paths: [
      "M18 85 C20 84 24.5 84 26.5 86 C27 90 26.5 94 25 96 C22.5 97 20 97 18 95 C17.5 91.5 17.5 88 18 85 Z",
      "M29 85 C31 84 35.5 84 37.5 86 C38 90 37.5 94 36 96 C33.5 97 31 97 29 95 C28.5 91.5 28.5 88 29 85 Z",
      "M56 84 C58 83 62.5 83 64.5 85 C65 89.5 64.5 93.5 63 95.5 C60.5 96.5 58 96.5 56 94.5 C55.5 91 55.5 87.5 56 84 Z",
      "M67 84 C69 83 73.5 83 75.5 85 C76 89.5 75.5 93.5 74 95.5 C71.5 96.5 69 96.5 67 94.5 C66.5 91 66.5 87.5 67 84 Z",
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

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {regions.map((region) =>
            region.paths.map((d, i) => (
              <path
                key={`${region.id}-${i}`}
                d={d}
                onClick={() => onSelectRegion(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                className="cursor-pointer transition-all duration-200"
                fill={isHighlighted(region.id) ? "hsl(var(--primary) / 0.24)" : "transparent"}
                stroke={isHighlighted(region.id) ? "hsl(var(--primary) / 0.65)" : "transparent"}
                strokeWidth={isHighlighted(region.id) ? 0.4 : 0}
                vectorEffect="non-scaling-stroke"
              />
            ))
          )}
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
