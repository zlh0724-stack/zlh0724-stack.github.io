import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden cursor-pointer hover-elevate transition-all duration-300 hover:shadow-xl group"
            onClick={() => setSelectedImage(image)}
            data-testid={`card-gallery-${image.id}`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`img-gallery-${image.id}`}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg" data-testid={`text-title-${image.id}`}>{image.title}</h3>
              {image.description && (
                <p className="text-sm text-muted-foreground mt-1" data-testid={`text-description-${image.id}`}>
                  {image.description}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl shadow-2xl"
              data-testid="img-lightbox"
            />
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold" data-testid="text-lightbox-title">{selectedImage.title}</h2>
              {selectedImage.description && (
                <p className="text-muted-foreground mt-2" data-testid="text-lightbox-description">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
