import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import LoginPage from "@/components/LoginPage";
import BodyMap from "@/components/BodyMap";
import ConditionList from "@/components/ConditionList";
import ProgramDetail from "@/components/ProgramDetail";
import SymptomSearch from "@/components/SymptomSearch";
import FeedbackDialog from "@/components/FeedbackDialog";
import { BodyRegion, bodyRegionLabels, getProgramsByRegion, Program } from "@/data/programs";
import { LogOut, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicLogo from "@/assets/clinic-logo.png";

type View = "home" | "conditions" | "program";

const Index = () => {
  const { isAuthenticated, logout } = useAuth();
  const [view, setView] = useState<View>("home");
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const handleSelectRegion = (region: BodyRegion) => {
    setSelectedRegion(region);
    setView("conditions");
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
    setView("program");
  };

  const handleBack = () => {
    if (view === "program") {
      setView("conditions");
      setSelectedProgram(null);
    } else {
      setView("home");
      setSelectedRegion(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="clinic-gradient no-print">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={clinicLogo} alt="Gdanski Chiropractic Clinic" className="h-10 rounded-md" />
            <p className="text-xs text-primary-foreground/70">Physiotherapy Portal</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <LogOut className="w-4 h-4 mr-1.5" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8">
        {view === "home" && (
          <div className="animate-fade-in">
            {/* Welcome */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
                <Activity className="w-4 h-4" />
                Exercise Program Finder
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Find Your Exercise Program
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                Search by symptoms or select the area of your body that is bothering you to find the right physiotherapy program.
              </p>
            </div>

            {/* Symptom Search */}
            <div className="max-w-lg mx-auto mb-10">
              <SymptomSearch onSelectProgram={handleSelectProgram} />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-lg mx-auto mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-base text-black uppercase tracking-wider font-bold">or select body area</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Body Map */}
            <BodyMap onSelectRegion={handleSelectRegion} selectedRegion={selectedRegion} />
          </div>
        )}

        {view === "conditions" && selectedRegion && (
          <div className="animate-fade-in">
            <Button variant="ghost" onClick={handleBack} className="gap-2 mb-4">
              <span>←</span> Back to Body Map
            </Button>
            <h2 className="font-serif text-2xl text-foreground mb-1">
              {bodyRegionLabels[selectedRegion]} Programs
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Select a condition below to view the full exercise program.
            </p>
            <ConditionList
              programs={getProgramsByRegion(selectedRegion)}
              onSelect={handleSelectProgram}
            />
          </div>
        )}

        {view === "program" && selectedProgram && (
          <ProgramDetail program={selectedProgram} onBack={handleBack} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-6 no-print">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gdanski Chiropractic Clinic. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            These exercises are for educational purposes only. Consult your healthcare provider before starting any exercise program.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
