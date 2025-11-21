import Navigation from "@/components/Navigation";
import NoteCard from "@/components/NoteCard";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function Notes() {
  const notes = [
    {
      id: "1",
      title: "JavaScript 異步編程",
      subject: "程式設計",
      date: "2024-11-05",
      preview: "學習了 Promise、async/await 的使用方法，以及如何處理異步操作中的錯誤。這些概念對於開發現代 Web 應用非常重要...",
      color: "primary" as const,
    },
    {
      id: "2",
      title: "遊戲設計原理",
      subject: "遊戲開發",
      date: "2024-11-03",
      preview: "探討了遊戲的核心機制、玩家動機和獎勵系統的設計。一個好的遊戲需要平衡挑戰性和成就感...",
      color: "accent" as const,
    },
    {
      id: "3",
      title: "色彩理論基礎",
      subject: "美術設計",
      date: "2024-11-01",
      preview: "學習了色彩的三要素：色相、明度、彩度。以及如何運用配色原理創作出和諧的畫面...",
      color: "chart1" as const,
    },
    {
      id: "4",
      title: "React Hooks 深入理解",
      subject: "程式設計",
      date: "2024-10-28",
      preview: "深入研究了 useState、useEffect、useContext 等常用 Hooks 的原理和最佳實踐...",
      color: "chart2" as const,
    },
    {
      id: "5",
      title: "動畫原理十二法則",
      subject: "動畫設計",
      date: "2024-10-25",
      preview: "學習了迪士尼動畫的十二個基本原則，包括擠壓與伸展、預備動作、跟隨動作等...",
      color: "chart3" as const,
    },
    {
      id: "6",
      title: "遊戲平衡性設計",
      subject: "遊戲開發",
      date: "2024-10-22",
      preview: "研究如何設計公平且有趣的遊戲機制，避免某些策略過於強勢或弱勢...",
      color: "primary" as const,
    },
  ];

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
              <NoteCard key={note.id} {...note} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
