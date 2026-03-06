import { Program } from "@/data/programs";
import { ChevronRight, Activity } from "lucide-react";

interface ConditionListProps {
  programs: Program[];
  onSelect: (program: Program) => void;
}

export default function ConditionList({ programs, onSelect }: ConditionListProps) {
  if (programs.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Activity className="w-10 h-10 mx-auto mb-3 opacity-40" />
        <p>No programs found for this selection.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {programs.map((program) => (
        <button
          key={program.id}
          onClick={() => onSelect(program)}
          className="w-full clinic-card-hover rounded-xl p-5 text-left border border-border group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                {program.condition}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {program.goal}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {program.symptoms.slice(0, 3).map((s, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary font-medium"
                  >
                    {s}
                  </span>
                ))}
                {program.symptoms.length > 3 && (
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    +{program.symptoms.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1 ml-3 transition-colors flex-shrink-0" />
          </div>
        </button>
      ))}
    </div>
  );
}
