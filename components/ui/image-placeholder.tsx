import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Stand-in for a real photo. The dashed border and label make it obvious
 * that content is still needed until a real <Image /> replaces it.
 */
export function ImagePlaceholder({
  label = "Image coming soon",
  aspect = "video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-surface text-body-light",
        aspectClasses[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-6 w-6 opacity-40" strokeWidth={1.5} />
      <span className="font-mono px-4 text-center text-[11px] font-medium uppercase tracking-wide opacity-50">
        {label}
      </span>
    </div>
  );
}
