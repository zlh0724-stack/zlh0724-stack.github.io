import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";
import landscapeImage from "@assets/generated_images/Anime_landscape_artwork_1_b0658bd3.png";
import characterImage from "@assets/generated_images/Anime_character_artwork_2_162e081b.png";
import cityscapeImage from "@assets/generated_images/Anime_cityscape_artwork_3_2b059dfb.png";
import foodImage from "@assets/generated_images/Anime_food_artwork_4_1dc632f0.png";
import cherryImage from "@assets/generated_images/Cherry_blossom_artwork_5_9395ba60.png";

export default function Gallery() {
  const artworks = [
    { id: "1", src: landscapeImage, title: "夢幻夕陽", description: "我最喜歡的風景畫作品" },
    { id: "2", src: characterImage, title: "原創角色設計", description: "為遊戲設計的主角形象" },
    { id: "3", src: cityscapeImage, title: "賽博城市夜景", description: "未來都市的想像" },
    { id: "4", src: foodImage, title: "可愛美食插畫", description: "萌系風格的食物繪畫" },
    { id: "5", src: cherryImage, title: "櫻花之美", description: "春天的櫻花季節" },
    { id: "6", src: landscapeImage, title: "山水風景", description: "寧靜的自然風光" },
    { id: "7", src: characterImage, title: "Q版角色", description: "可愛的迷你角色" },
    { id: "8", src: cityscapeImage, title: "都市印象", description: "現代城市的一角" },
    { id: "9", src: foodImage, title: "甜點時光", description: "午後的甜蜜時刻" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Image className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">我的圖畫作品</h1>
            <p className="text-xl text-muted-foreground">用色彩與線條記錄想像的世界</p>
          </div>

          <GalleryGrid images={artworks} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
