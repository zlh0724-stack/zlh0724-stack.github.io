import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description?: string;
  videoUrl?: string;
}

export default function VideoCard({
  id,
  title,
  thumbnail,
  duration,
  category,
  description,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-video-${id}`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          data-testid={`img-thumbnail-${id}`}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span data-testid={`text-duration-${id}`}>{duration}</span>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" data-testid={`badge-category-${id}`}>{category}</Badge>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg line-clamp-2" data-testid={`text-title-${id}`}>{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${id}`}>
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}
