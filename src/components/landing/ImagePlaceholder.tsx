import { ReactNode } from "react";

interface Props {
  caption?: string;
  className?: string;
  aspectRatio?: string;
  children?: ReactNode;
}

const ImagePlaceholder = ({ caption = "Фото эксперта", className = "", aspectRatio = "aspect-[4/5]" }: Props) => (
  <div className={`image-placeholder ${aspectRatio} flex flex-col items-center justify-center gap-3 p-6 ${className}`}>
    <div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/30">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-caption">{caption}</span>
    </div>
  </div>
);

export default ImagePlaceholder;
