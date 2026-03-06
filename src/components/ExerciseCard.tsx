import { Exercise } from "@/data/programs";
import { AlertTriangle, TrendingUp, TrendingDown, Info } from "lucide-react";
import exerciseImages from "@/data/exerciseImages";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export default function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const image = exerciseImages[exercise.imageKey];

  return (
    <div className="exercise-card clinic-card rounded-xl border border-border p-6 animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{index + 1}</span>
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <h3 className="font-serif text-lg text-foreground">{exercise.name}</h3>
          <p className="text-sm text-primary/80 mt-1 italic">{exercise.why}</p>

          {/* Instructions */}
          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Instructions</h4>
            <ol className="space-y-1.5">
              {exercise.instructions.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/90">
                  <span className="text-muted-foreground flex-shrink-0 w-5 text-right">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Dose */}
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/8 text-primary rounded-lg px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Dose:</span>
            <span className="text-sm font-medium">{exercise.dose}</span>
          </div>

          {/* Key Cues */}
          {exercise.keyCues && exercise.keyCues.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                <Info className="w-3.5 h-3.5" />
                Key Cues
              </div>
              <ul className="space-y-1">
                {exercise.keyCues.map((cue, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-accent">•</span>
                    {cue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Progression / Regression */}
          <div className="flex flex-wrap gap-3 mt-3">
            {exercise.progression && (
              <div className="flex items-start gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><span className="font-medium text-accent">Progress:</span> {exercise.progression}</span>
              </div>
            )}
            {exercise.regression && (
              <div className="flex items-start gap-1.5 text-sm">
                <TrendingDown className="w-4 h-4 text-clinic-amber flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80"><span className="font-medium text-clinic-amber">Regress:</span> {exercise.regression}</span>
              </div>
            )}
          </div>

          {/* Pain rule / Stop if / Important */}
          {(exercise.painRule || exercise.stopIf || exercise.important) && (
            <div className="mt-3 rounded-lg bg-clinic-amber/10 border border-clinic-amber/20 p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-clinic-amber flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground/80 space-y-1">
                  {exercise.painRule && <p>{exercise.painRule}</p>}
                  {exercise.stopIf && <p className="font-medium">Stop/modify if: {exercise.stopIf}</p>}
                  {exercise.important && <p>{exercise.important}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
