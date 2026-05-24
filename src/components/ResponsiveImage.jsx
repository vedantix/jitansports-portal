import { resolveImageAsset } from '@/lib/imageAssets';

export default function ResponsiveImage({
  asset,
  src,
  alt,
  className,
  pictureClassName = 'contents',
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  width,
  height,
  ...props
}) {
  const resolvedAsset = asset || resolveImageAsset(src);

  if (!resolvedAsset) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
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
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={width || resolvedAsset.width}
        height={height || resolvedAsset.height}
        {...props}
      />
    </picture>
  );
}
