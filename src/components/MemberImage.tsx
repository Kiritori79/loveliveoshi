interface MemberImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function MemberImage({
  src,
  alt,
  className,
  width,
  height,
}: MemberImageProps) {
  return (
    <div
      className={`member-image-wrap ${className ?? ''}`}
      style={
        width && height
          ? { width: `${width}px`, height: `${height}px` }
          : undefined
      }
    >
      <img src={src} alt={alt} />
    </div>
  )
}
