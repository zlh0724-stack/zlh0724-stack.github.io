import Navigation from "@/components/Navigation";
import NoteCard from "@/components/NoteCard";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { notes } from "@/data/content";

export default function Notes() {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">學習筆記</h1>
            <p className="text-xl text-muted-foreground">記錄知識，持續成長</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
