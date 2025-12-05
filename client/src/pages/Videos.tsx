import Navigation from "@/components/Navigation";
import VideoCard from "@/components/VideoCard";
import Footer from "@/components/Footer";
import { Video } from "lucide-react";
import landscapeImage from "@assets/Anime_landscape_artwork_1_b0658bd3.png";
import characterImage from "@assets/Anime_character_artwork_2_162e081b.png";
import cityscapeImage from "@assets/Anime_cityscape_artwork_3_2b059dfb.png";
import foodImage from "@assets/Anime_food_artwork_4_1dc632f0.png";
import cherryImage from "@assets/Cherry_blossom_artwork_5_9395ba60.png";

export default function Videos() {
  const videos = [
    {
      id: "1",
      title: "遊戲實況：探索新世界",
      thumbnail: cityscapeImage,
      duration: "15:30",
      category: "遊戲實況",
      description: "帶大家一起探索這款開放世界遊戲的隱藏區域和彩蛋",
    },
    {
      id: "2",
      title: "繪畫教學：如何畫可愛角色",
      thumbnail: characterImage,
      duration: "20:15",
      category: "繪畫教學",
      description: "分享我的角色設計流程和配色技巧",
    },
    {
      id: "3",
      title: "遊戲評測：本月必玩遊戲",
      thumbnail: landscapeImage,
      duration: "12:45",
      category: "遊戲評測",
      description: "深度評測本月最受歡迎的幾款新遊戲",
    },
    {
      id: "4",
      title: "美食 Vlog：探店記錄",
      thumbnail: foodImage,
      duration: "8:20",
      category: "生活日常",
      description: "發現了一家超可愛的主題咖啡廳",
    },
    {
      id: "5",
      title: "速繪挑戰：一小時完成插畫",
      thumbnail: cherryImage,
      duration: "60:00",
      category: "繪畫教學",
      description: "挑戰在一小時內完成一幅完整的插畫作品",
    },
    {
      id: "6",
      title: "遊戲音樂欣賞",
      thumbnail: landscapeImage,
      duration: "25:30",
      category: "音樂分享",
      description: "分享我最喜歡的遊戲背景音樂",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">我的影片</h1>
            <p className="text-xl text-muted-foreground">用影像分享生活與創作</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
