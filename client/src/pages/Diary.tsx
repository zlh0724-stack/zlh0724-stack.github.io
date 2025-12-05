import Navigation from "@/components/Navigation";
import DiaryCard from "@/components/DiaryCard";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";
import landscapeImage from "@assets/Anime_landscape_artwork_1_b0658bd3.png";
import characterImage from "@assets/Anime_character_artwork_2_162e081b.png";
import cityscapeImage from "@assets/Anime_cityscape_artwork_3_2b059dfb.png";
import foodImage from "@assets/Anime_food_artwork_4_1dc632f0.png";

export default function Diary() {
  const diaries = [
    {
      id: "1",
      title: "今天打了一整天的遊戲",
      date: "2024-11-07",
      excerpt: "今天嘗試了一款新的 RPG 遊戲，畫面超級精美！故事劇情也很吸引人，讓我一口氣玩了五個小時。主角的技能設計很有趣，戰鬥系統也很流暢...",
      image: landscapeImage,
      tags: ["遊戲", "RPG", "日常"],
    },
    {
      id: "2",
      title: "週末畫圖時光",
      date: "2024-11-05",
      excerpt: "終於完成了新的角色設計！這次嘗試了不同的配色方案，使用了更鮮豔的顏色。畫畫真的很療癒，可以讓我完全沉浸在創作的世界裡...",
      image: characterImage,
      tags: ["繪畫", "創作", "週末"],
    },
    {
      id: "3",
      title: "深夜的城市探險",
      date: "2024-11-03",
      excerpt: "晚上和朋友一起去了市區，看到好多霓虹燈和高樓大廈。這種賽博龐克的感覺太酷了！拍了很多照片，準備之後當作繪畫的參考...",
      image: cityscapeImage,
      tags: ["生活", "攝影", "靈感"],
    },
    {
      id: "4",
      title: "美食與畫作的完美結合",
      date: "2024-11-01",
      excerpt: "今天去了一家很可愛的咖啡廳，點了一份超精緻的甜點。忍不住把它畫下來，感覺食物也可以成為很棒的創作題材...",
      image: foodImage,
      tags: ["美食", "繪畫", "日常"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">我的日記</h1>
            <p className="text-xl text-muted-foreground">記錄生活中的每一個精彩瞬間</p>
          </div>

          <div className="space-y-8">
            {diaries.map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
