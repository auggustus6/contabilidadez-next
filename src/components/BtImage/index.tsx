import Image from "next/image";

type BtImageProps = {
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  quality?: number;
  cover?: boolean;
};

const BtImage = ({
  src,
  alt = "",
  priority = false,
  fill = false,
  width,
  height,
  className,
  style,
  quality,
  cover,
}: BtImageProps) => {
  return (
    <Image
      src={src || "/svg/nocontent.svg"}
      alt={alt}
      priority={priority}
      fill={fill}
      className={className}
      width={width}
      height={height}
      style={{ ...style, objectFit: cover ? "cover" : "contain", objectPosition: "center" }}
      quality={quality || 75}
      blurDataURL={"/gif/loading_gif.gif"}
      placeholder={"blur"}
    />
  );
};

export { BtImage };
