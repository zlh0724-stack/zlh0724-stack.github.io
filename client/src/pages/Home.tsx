import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiaryCard from "@/components/DiaryCard";
import GalleryGrid from "@/components/GalleryGrid";
import NoteCard from "@/components/NoteCard";
import Footer from "@/components/Footer";
import { BookOpen, Image, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { diaries, notes, drawings } from "@/data/content";

export default function Home() {
  const recentDiaries = diaries.slice(0, 2);
  const featuredArtwork = drawings.slice(0, 6);
  const recentNotes = notes.slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-20 pb-20">
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">最新日記</h2>
            </div>
            <Link href="/diary" data-testid="link-more-diary">
              <Button variant="ghost">查看全部</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recentDiaries.map((diary) => (
              <DiaryCard key={diary.id} diary={diary} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Image className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">精選圖畫</h2>
            </div>
            <Link href="/gallery" data-testid="link-more-gallery">
              <Button variant="ghost">查看全部</Button>
            </Link>
          </div>
          <GalleryGrid images={featuredArtwork} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">學習筆記</h2>
            </div>
            <Link href="/notes" data-testid="link-more-notes">
              <Button variant="ghost">查看全部</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recentNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
