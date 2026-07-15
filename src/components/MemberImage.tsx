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
  const isVoiceActor = src.includes('/voice-actors/')

  return (
    <div
      className={`member-image-wrap${isVoiceActor ? ' member-image-wrap--no-zoom' : ''}${
        className ? ` ${className}` : ''
      }`}
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
