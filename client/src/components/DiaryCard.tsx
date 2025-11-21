import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface DiaryCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  tags?: string[];
}

export default function DiaryCard({ id, title, date, excerpt, image, tags = [] }: DiaryCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl" data-testid={`card-diary-${id}`}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            data-testid={`img-diary-${id}`}
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <time data-testid={`text-date-${id}`}>{date}</time>
        </div>
        
        <h3 className="text-2xl font-bold" data-testid={`text-title-${id}`}>{title}</h3>
        
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-excerpt-${id}`}>
          {excerpt}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Link href={`/diary/${id}`} data-testid={`link-read-more-${id}`}>
          <Button variant="ghost" className="gap-2 w-full md:w-auto">
            閱讀更多
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
