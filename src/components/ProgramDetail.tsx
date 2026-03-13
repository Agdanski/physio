import { Program } from "@/data/programs";
import ExerciseCard from "@/components/ExerciseCard";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle, Clock, ShieldAlert, TrendingUp, Flame, Wrench, Info, Target, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

        {/* Best For */}
        {program.bestFor && (
          <div className="mt-3 text-sm text-foreground/80">
            <span className="font-semibold text-foreground">Best for:</span> {program.bestFor}
          </div>
        )}

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

      {/* Not For / Urgent Signs */}
      {((program.notFor && program.notFor.length > 0) || (program.urgentSigns && program.urgentSigns.length > 0)) && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              {program.notFor && program.notFor.length > 0 && (
                <>
                  <h3 className="font-semibold text-destructive text-sm">Not Suitable For / Seek Care If:</h3>
                  <ul className="mt-2 space-y-1 mb-3">
                    {program.notFor.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-destructive">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {program.urgentSigns && program.urgentSigns.length > 0 && (
                <>
                  <h3 className="font-semibold text-destructive text-sm">Seek Urgent Medical Attention If You Experience:</h3>
                  <ul className="mt-2 space-y-1">
                    {program.urgentSigns.map((sign, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-destructive">•</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Self-Management Advice */}
      {program.selfManagementAdvice && program.selfManagementAdvice.length > 0 && (
        <div className="rounded-xl border border-border bg-muted/30 p-5 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-2">Key Self-Management Advice</h3>
              <ul className="space-y-1.5">
                {program.selfManagementAdvice.map((advice, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-primary">•</span>
                    {advice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Important Notes */}
      {program.importantNotes && program.importantNotes.length > 0 && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-destructive text-sm mb-2">Important</h3>
              <ul className="space-y-1.5">
                {program.importantNotes.map((note, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-destructive">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Side-Specific Modification Notes */}
      {program.sideSpecificNotes && program.sideSpecificNotes.length > 0 && (
        <div className="rounded-xl border border-border bg-muted/30 p-5 mb-6">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-2">Side-Specific Modification Notes</h3>
              <ul className="space-y-1.5">
                {program.sideSpecificNotes.map((note, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-primary">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Loading Note */}
      {program.loadingNote && program.loadingNote.length > 0 && (
        <div className="rounded-xl border border-border bg-muted/30 p-5 mb-6">
          <div className="flex items-start gap-3">
            <Weight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-2">Loading Note</h3>
              <ul className="space-y-1.5">
                {program.loadingNote.map((note, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}


      {((program.requiredEquipment && program.requiredEquipment.length > 0) || (program.optionalEquipment && program.optionalEquipment.length > 0)) && (
        <div className="rounded-xl border border-border p-5 mb-6">
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div className="text-sm space-y-2">
              {program.requiredEquipment && program.requiredEquipment.length > 0 && (
                <div>
                  <span className="font-semibold text-foreground">Required:</span>{" "}
                  <span className="text-foreground/80">{program.requiredEquipment.join(", ")}</span>
                </div>
              )}
              {program.optionalEquipment && program.optionalEquipment.length > 0 && (
                <div>
                  <span className="font-semibold text-foreground">Optional:</span>{" "}
                  <span className="text-foreground/80">{program.optionalEquipment.join(", ")}</span>
                </div>
              )}
              {program.noEquipmentAlternative && (
                <div>
                  <span className="font-semibold text-foreground">No-equipment option:</span>{" "}
                  <span className="text-foreground/80">{program.noEquipmentAlternative}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exercises */}
      {program.phases.length === 1 ? (
        <div className="mb-6">
          {program.phases[0].description && (
            <p className="text-sm text-muted-foreground mb-4 italic">{program.phases[0].description}</p>
          )}
          <div className="space-y-4">
            {program.phases[0].exercises.map((exercise, j) => (
              <ExerciseCard key={j} exercise={exercise} index={j} />
            ))}
          </div>
        </div>
      ) : program.phases.length > 1 ? (
        <Tabs defaultValue="phase-0" className="mb-6">
          {/* Phase navigation banner */}
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 mb-4">
            <p className="text-sm font-semibold text-primary text-center mb-3">
              This program has {program.phases.length} phases — make sure to progress through each one
            </p>
            <TabsList className="w-full flex h-12 bg-muted/80 p-1 rounded-lg">
              {program.phases.map((phase, i) => (
                <TabsTrigger
                  key={i}
                  value={`phase-${i}`}
                  className="flex-1 text-xs sm:text-sm font-semibold py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md transition-all"
                >
                  {phase.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {program.phases.map((phase, i) => (
            <TabsContent key={i} value={`phase-${i}`}>
              {phase.description && (
                <p className="text-sm text-muted-foreground mb-4 mt-2 italic">{phase.description}</p>
              )}
              <div className="space-y-4">
                {phase.exercises.map((exercise, j) => (
                  <ExerciseCard key={j} exercise={exercise} index={j} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : null}

      {/* Progression / Flare-Up / Timeline / Seek Assessment */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {program.progressionRules && program.progressionRules.length > 0 && (
          <div className="rounded-xl border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold text-foreground">Progression Rules</h3>
            </div>
            <ul className="space-y-1.5">
              {program.progressionRules.map((rule, i) => (
                <li key={i} className="text-xs text-foreground/80 flex gap-2">
                  <span className="text-accent">→</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {program.flareUpRules && program.flareUpRules.length > 0 && (
          <div className="rounded-xl border border-clinic-amber/30 bg-clinic-amber/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-clinic-amber" />
              <h3 className="text-sm font-semibold text-foreground">Flare-Up Rules</h3>
            </div>
            <ul className="space-y-1.5">
              {program.flareUpRules.map((rule, i) => (
                <li key={i} className="text-xs text-foreground/80 flex gap-2">
                  <span className="text-clinic-amber">→</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {program.expectedTimeline && (
          <div className="rounded-xl border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground">Expected Timeline</h3>
            </div>
            <p className="text-xs text-foreground/80">{program.expectedTimeline}</p>
          </div>
        )}

        {program.seekAssessment && program.seekAssessment.length > 0 && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-destructive" />
              <h3 className="text-sm font-semibold text-foreground">When to Seek Further Assessment</h3>
            </div>
            <ul className="space-y-1.5">
              {program.seekAssessment.map((item, i) => (
                <li key={i} className="text-xs text-foreground/80 flex gap-2">
                  <span className="text-destructive">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl bg-muted p-5 text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Evidence base:</strong> {program.programAudit}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          This program is designed as an evidence-informed self-management guide. It does not replace in-person assessment when symptoms are severe, traumatic, rapidly worsening, neurologic, or not improving.
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
