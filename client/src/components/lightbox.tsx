import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LightboxProps {
  image: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-lg font-semibold text-slate-900">{image.title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-slate-200">
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-auto">
          <div className="flex justify-center mb-4">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full h-auto rounded border border-slate-200 shadow-sm"
              style={{ maxHeight: '70vh' }}
            />
          </div>
          <p className="text-slate-600 text-center leading-relaxed">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
