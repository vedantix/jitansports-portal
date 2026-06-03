import { resolveImageAsset } from '@/lib/imageAssets';

export default function ResponsiveImage({
  asset = undefined,
  src = '',
  alt = '',
  className = '',
  pictureClassName = 'contents',
  sizes = undefined,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = undefined,
  width = undefined,
  height = undefined,
  style = undefined,
  ...props
}) {
  const resolvedAsset = asset || resolveImageAsset(src);
  const imageLoading = loading === 'eager' ? 'eager' : 'lazy';
  const imageDecoding = decoding === 'sync' || decoding === 'auto' ? decoding : 'async';
  const intrinsicWidth = width || resolvedAsset?.width;
  const intrinsicHeight = height || resolvedAsset?.height;
  const aspectRatioStyle =
    intrinsicWidth && intrinsicHeight
      ? { aspectRatio: `${intrinsicWidth} / ${intrinsicHeight}`, ...style }
      : style;

  if (!resolvedAsset) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        style={aspectRatioStyle}
        {...props}
      />
    );
  }

  const imageSizes = sizes || resolvedAsset.sizes;

  return (
    <picture className={pictureClassName}>
      {resolvedAsset.sources.map((source) => (
        <source
          key={`${source.type}-${source.media || 'default'}`}
          media={source.media}
          type={source.type}
          srcSet={source.srcSet}
          sizes={source.sizes || imageSizes}
        />
      ))}
      <img
        src={resolvedAsset.fallback}
        srcSet={resolvedAsset.fallbackSrcSet}
        sizes={imageSizes}
        alt={alt}
        className={className}
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={fetchPriority}
        width={intrinsicWidth}
        height={intrinsicHeight}
        style={aspectRatioStyle}
        {...props}
      />
    </picture>
  );
}
