import * as React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  position?: "full" | "center" | "left" | "right";
}

const Image: React.FC<ImageProps> = ({
  src,
  position = "center",
  className = "",
  alt = ""
}) => (
  <img
    className={`zn-image zn-image-${position} ${className}`.trim()}
    src={src}
    alt={alt}
  />
);

export default Image;
