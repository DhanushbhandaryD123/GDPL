import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export function LazySection({
  children,
  fallback = null,
  minHeight = '300px',
  rootMargin = '400px'
}: LazySectionProps) {
  // Always render immediately during prerendering so static HTML contains all content for SEO and Accessibility
  const isPrerender = typeof window === 'undefined' || Boolean((window as any).__PRERENDER__);
  const [shouldRender, setShouldRender] = useState(isPrerender);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldRender) return;

    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return (
    <div
      ref={containerRef}
      className="[content-visibility:auto]"
      style={{ minHeight: shouldRender ? undefined : minHeight }}
    >
      {shouldRender ? children : fallback}
    </div>
  );
}
