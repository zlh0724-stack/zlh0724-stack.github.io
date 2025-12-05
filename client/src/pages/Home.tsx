import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiaryCard from "@/components/DiaryCard";
import GalleryGrid from "@/components/GalleryGrid";
import NoteCard from "@/components/NoteCard";
import VideoCard from "@/components/VideoCard";
import Footer from "@/components/Footer";
import { BookOpen, Image, FileText, Video } from "lucide-react";
import landscapeImage from "@assets/Anime_landscape_artwork_1_b0658bd3.png";
import characterImage from "@assets/Anime_character_artwork_2_162e081b.png";
import cityscapeImage from "@assets/Anime_cityscape_artwork_3_2b059dfb.png";
import foodImage from "@assets/Anime_food_artwork_4_1dc632f0.png";
import cherryImage from "@assets/Cherry_blossom_artwork_5_9395ba60.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const recentDiaries = [
    {
      id: "1",
      title: "今天打了一整天的遊戲",
      date: "2024-11-07",
      excerpt: "今天嘗試了一款新的 RPG 遊戲，畫面超級精美！故事劇情也很吸引人...",
      image: landscapeImage,
      tags: ["遊戲", "RPG"],
    },
    {
      id: "2",
      title: "週末畫圖時光",
      date: "2024-11-05",
      excerpt: "終於完成了新的角色設計！這次嘗試了不同的配色方案...",
      image: characterImage,
      tags: ["繪畫", "創作"],
    },
  ];

  const featuredArtwork = [
    { id: "1", src: landscapeImage, title: "夢幻夕陽" },
    { id: "2", src: characterImage, title: "原創角色" },
    { id: "3", src: cityscapeImage, title: "賽博城市" },
    { id: "4", src: foodImage, title: "美食插畫" },
    { id: "5", src: cherryImage, title: "櫻花之美" },
    { id: "6", src: landscapeImage, title: "風景速寫" },
  ];

  const recentNotes = [
    {
      id: "1",
      title: "JavaScript 異步編程",
      subject: "程式設計",
      date: "2024-11-05",
      preview: "學習了 Promise、async/await 的使用方法...",
      color: "primary" as const,
    },
    {
      id: "2",
      title: "遊戲設計原理",
      subject: "遊戲開發",
      date: "2024-11-03",
      preview: "探討了遊戲的核心機制、玩家動機和獎勵系統...",
      color: "accent" as const,
    },
  ];

  const featuredVideos = [
    {
      id: "1",
      title: "遊戲實況：探索新世界",
      thumbnail: cityscapeImage,
      duration: "15:30",
      category: "遊戲實況",
      description: "帶大家探索開放世界遊戲的隱藏區域",
    },
    {
      id: "2",
      title: "繪畫教學：如何畫可愛角色",
      thumbnail: characterImage,
      duration: "20:15",
      category: "繪畫教學",
      description: "分享我的角色設計流程和技巧",
    },
  ];

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
              <DiaryCard key={diary.id} {...diary} />
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
              <NoteCard key={note.id} {...note} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">最新影片</h2>
            </div>
            <Link href="/videos" data-testid="link-more-videos">
              <Button variant="ghost">查看全部</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
