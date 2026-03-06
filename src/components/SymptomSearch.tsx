import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchProgramsBySymptom, Program } from "@/data/programs";

interface SymptomSearchProps {
  onSelectProgram: (program: Program) => void;
}

export default function SymptomSearch({ onSelectProgram }: SymptomSearchProps) {
  const [query, setQuery] = useState("");

  const results = query.length >= 3 ? searchProgramsBySymptom(query) : [];

  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your symptoms (e.g., 'knee pain with stairs')"
          className="pl-10 pr-10"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>

      {query.length >= 3 && (
        <div className="mt-3 space-y-2">
          {results.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No matching programs found. Try different keywords or use the body map below.
            </p>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-2">
                {results.length} program{results.length !== 1 ? "s" : ""} found
              </p>
              {results.map((program) => (
                <button
                  key={program.id}
                  onClick={() => onSelectProgram(program)}
                  className="w-full text-left p-3 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <p className="font-medium text-sm text-foreground">{program.condition}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{program.goal}</p>
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
