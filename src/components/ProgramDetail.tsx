import { Program } from "@/data/programs";
import ExerciseCard from "@/components/ExerciseCard";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramDetailProps {
  program: Program;
  onBack: () => void;
}

export default function ProgramDetail({ program, onBack }: ProgramDetailProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 no-print">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Print Program
        </Button>
      </div>

      {/* Print header */}
      <div className="print-only mb-6">
        <h1 className="text-xl font-serif font-bold">Gdanski Chiropractic Clinic</h1>
        <p className="text-sm text-muted-foreground">Physiotherapy Exercise Program</p>
        <hr className="my-3" />
      </div>

      {/* Program info */}
      <div className="clinic-card rounded-xl border border-border p-6 mb-6">
        <h1 className="font-serif text-2xl md:text-3xl text-foreground">
          {program.condition}
        </h1>
        <p className="text-muted-foreground mt-2">{program.description}</p>
        <div className="mt-4 flex items-start gap-2 bg-primary/8 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-primary">Program Goal</p>
            <p className="text-sm text-foreground/80 mt-0.5">{program.goal}</p>
          </div>
        </div>

        {/* Symptoms */}
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Common Symptoms</p>
          <div className="flex flex-wrap gap-2">
            {program.symptoms.map((s, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Urgent Signs */}
      {program.urgentSigns && program.urgentSigns.length > 0 && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-destructive text-sm">Seek Urgent Medical Attention If You Experience:</h3>
              <ul className="mt-2 space-y-1">
                {program.urgentSigns.map((sign, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-destructive">•</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Exercises */}
      <h2 className="font-serif text-xl text-foreground mb-4">
        Exercises ({program.exercises.length})
      </h2>
      <div className="space-y-4">
        {program.exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl bg-muted p-5 text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Evidence base:</strong> {program.programAudit}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          This program is provided for educational purposes. Always consult your healthcare provider before beginning any exercise program.
        </p>
      </div>

      {/* Bottom print button */}
      <div className="mt-6 text-center no-print">
        <Button onClick={handlePrint} variant="outline" className="gap-2">
          <Printer className="w-4 h-4" />
          Print This Program
        </Button>
      </div>
    </div>
  );
}
