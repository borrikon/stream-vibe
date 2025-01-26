type IconComponentProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

function IconComponent({ src, alt, width, height }: IconComponentProps) {
  return (
    <figure className="flex items-center justify-center">
      <img src={src} alt={alt ?? "icon"} width={width} height={height} />
      <figcaption className="absolute -top-96 -left-96">
        {alt ?? "icon"}
      </figcaption>
    </figure>
  );
}

export default IconComponent;
