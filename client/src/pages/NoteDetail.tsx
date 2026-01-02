import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { notes } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NoteDetail() {
  const [, params] = useRoute("/note/:slug");
  const slug = params?.slug;

  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">找不到此筆記</h1>
            <Link href="/notes">
              <Button>返回筆記列表</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const colorClasses = {
    primary: "bg-primary/10 text-primary border-l-primary",
    accent: "bg-accent/10 text-accent-foreground border-l-accent",
    chart1: "bg-chart-1/10 text-chart-1 border-l-chart-1",
    chart2: "bg-chart-2/10 text-chart-2 border-l-chart-2",
    chart3: "bg-chart-3/10 text-chart-3 border-l-chart-3",
  };

  const colorClass = colorClasses[note.color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/notes">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回筆記列表
            </Button>
          </Link>

          <div className="space-y-8">
            <div className={`p-6 space-y-4 border-l-4 ${colorClass} rounded-r-lg`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colorClass}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <Badge variant="secondary">{note.subject}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time>{note.date}</time>
                </div>
              </div>

              <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
                {note.title}
              </h1>
            </div>

            <div>
              <MarkdownContent content={note.content} />
            </div>

            <div className="pt-8 border-t">
              <Link href="/notes">
                <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                  <ArrowLeft className="w-4 h-4" />
                  返回筆記列表
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

