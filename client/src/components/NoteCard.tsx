import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Note } from "@/types/content";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const { id, slug, title, subject, date, preview, color = "primary" } = note;
  
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-l-primary",
    accent: "bg-accent/10 text-accent-foreground border-l-accent",
    chart1: "bg-chart-1/10 text-chart-1 border-l-chart-1",
    chart2: "bg-chart-2/10 text-chart-2 border-l-chart-2",
    chart3: "bg-chart-3/10 text-chart-3 border-l-chart-3",
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <Link href={`/note/${slug}`}>
      <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl cursor-pointer" data-testid={`card-note-${id}`}>
        <div className={`p-6 space-y-4 border-l-4 ${colorClass}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <Badge variant="secondary" data-testid={`badge-subject-${id}`}>{subject}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time data-testid={`text-date-${id}`}>{date}</time>
            </div>
          </div>
          
          <h3 className="text-xl font-bold" data-testid={`text-title-${id}`}>{title}</h3>
          
          <p className="text-muted-foreground line-clamp-3" data-testid={`text-preview-${id}`}>
            {preview}
          </p>
          
          <Button variant="ghost" className="gap-2 w-full md:w-auto" data-testid={`link-view-note-${id}`}>
            查看筆記
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </Link>
  );
}
