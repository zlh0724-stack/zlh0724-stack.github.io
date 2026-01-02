import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Video } from "lucide-react";

export default function Videos() {
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

          <div className="text-center py-12">
            <p className="text-muted-foreground">影片功能尚未實現</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
