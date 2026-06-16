import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const DEFAULT_OVERLAY =
  'bg-gradient-to-t from-secondary/95 via-secondary/82 to-secondary/35 md:bg-gradient-to-r md:from-secondary/94 md:via-secondary/76 md:to-secondary/25';

export default function PageHero({
  image = undefined,
  imageAlt = '',
  eyebrow = undefined,
  badge = null,
  title = '',
  afterTitle = null,
  subtitle = undefined,
  children = null,
  footer = null,
  primaryCta = null,
  secondaryCta = null,
  align = 'left',
  contentClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  overlayClassName = undefined,
  imageClassName = '',
  className = '',
  loading = 'eager',
  fetchPriority = 'high',
}) {
  const isCentered = align === 'center';
  const renderCta = (cta, variant = 'primary') => {
    if (!cta) return null;
    const className =
      variant === 'primary'
        ? 'w-full gap-2 bg-primary font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto'
        : 'w-full gap-2 border-white/30 text-white hover:bg-white/10 sm:w-auto';
    const content = (
      <>
        {cta.icon === 'whatsapp' && <MessageCircle className="h-5 w-5" />}
        {cta.label}
        {variant === 'primary' && <ArrowRight className="h-5 w-5" />}
      </>
    );

    return (
      <Button asChild size="lg" variant={variant === 'primary' ? 'default' : 'outline'} className={className}>
        {cta.external ? (
          <a href={cta.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <Link to={cta.href}>
            {content}
          </Link>
        )}
      </Button>
    );
  };

  return (
    <section className={cn('relative overflow-hidden bg-secondary text-white', className)}>
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <ResponsiveImage
            src={image}
            alt={imageAlt}
            className={cn('h-full w-full object-cover', imageClassName)}
            sizes="100vw"
            loading={loading}
            fetchPriority={fetchPriority}
          />
          <div className={cn('absolute inset-0', overlayClassName || DEFAULT_OVERLAY)} />
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[clamp(420px,calc(100svh-88px),900px)] max-w-7xl items-center px-4 py-16 sm:px-6 md:py-20">
        <div
          className={cn(
            isCentered ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl',
            contentClassName
          )}
        >
          {badge}
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              'mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl',
              titleClassName
            )}
          >
            {title}
          </h1>
          {afterTitle && (
            <div className="mb-6">
              {afterTitle}
            </div>
          )}
          {subtitle && (
            <p
              className={cn(
                'mb-7 text-base leading-relaxed text-white/80 md:text-lg',
                isCentered && 'mx-auto max-w-2xl',
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}
          {children}
          {(primaryCta || secondaryCta) && (
            <div className={cn('flex flex-col gap-3 sm:flex-row', isCentered && 'justify-center')}>
              {renderCta(primaryCta, 'primary')}
              {renderCta(secondaryCta, 'secondary')}
            </div>
          )}
          {footer}
        </div>
      </div>
    </section>
  );
}