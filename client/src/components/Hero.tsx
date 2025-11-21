import { Gamepad2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import avatarImage from "@assets/generated_images/Anime_gamer_avatar_a4762245.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>歡迎來到我的世界</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              你好！我是
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                小明
              </span>
            </h1>
            
            <div className="flex items-center gap-3 text-xl md:text-2xl text-muted-foreground">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <p>我是一個開心的遊戲迷</p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              在這裡，我分享我的遊戲心得、日常生活、創作繪畫和學習筆記。
              歡迎一起探索這個充滿色彩的世界！
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/diary" data-testid="link-view-diary">
                <Button size="lg" className="gap-2">
                  查看日記
                  <Sparkles className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/gallery" data-testid="link-view-gallery">
                <Button size="lg" variant="outline">
                  探索圖畫
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20"></div>
              <img
                src={avatarImage}
                alt="遊戲迷頭像"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-xl"
                data-testid="img-avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
