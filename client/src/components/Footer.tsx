import { Heart, Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              遊戲迷的部落格
            </h3>
            <p className="text-muted-foreground">
              分享遊戲、生活、創作與學習的點點滴滴
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">快速連結</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">首頁</a></li>
              <li><a href="/diary" className="hover:text-foreground transition-colors">日記</a></li>
              <li><a href="/gallery" className="hover:text-foreground transition-colors">圖畫</a></li>
              <li><a href="/notes" className="hover:text-foreground transition-colors">筆記</a></li>
              <li><a href="/videos" className="hover:text-foreground transition-colors">影片</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">關於</h4>
            <p className="text-muted-foreground flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-primary" />
              我是一個開心的遊戲迷
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by 小明
          </p>
          <p className="mt-2 text-sm">© 2024 遊戲迷的部落格. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
