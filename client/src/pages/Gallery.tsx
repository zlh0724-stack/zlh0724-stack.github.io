import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";
import { drawings } from "@/data/content";

export default function Gallery() {

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

          <GalleryGrid images={drawings} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
