"use client";

import Image, { ImageProps } from "next/image";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  /** Extra wrapper class for the shimmer/placeholder container */
  wrapperClassName?: string;
  /** Show a blur-up shimmer placeholder while loading (default: true) */
  showLoader?: boolean;
}

/**
 * A wrapper around next/image that adds:
 * - A shimmer/skeleton placeholder while loading
 * - Graceful error handling with a subtle fallback
 * - Fade-in animation on load
 * - All next/image optimisation (lazy, webp, srcset) by default
 */
export function OptimizedImage({
  className,
  wrapperClassName,
  showLoader = true,
  alt,
  quality = 80,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted/50 text-muted-foreground text-xs",
          wrapperClassName
        )}
        aria-label={alt}
      >
        <svg
          className="w-8 h-8 opacity-30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
      </div>
    );
  }

  return (
    <>
      {/* Shimmer placeholder */}
      {showLoader && isLoading && (
        <div
          className={cn(
            "absolute inset-0 z-10 bg-gradient-to-r from-muted/60 via-muted/30 to-muted/60 bg-[length:200%_100%]",
            wrapperClassName
          )}
          style={{
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
      )}
      <Image
        alt={alt}
        quality={quality}
        className={cn(
          "transition-opacity duration-500 ease-out",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
}

/**
 * Shared image defaults for consistent optimization across SSR pages.
 * Use these as spread props with next/image in Server Components.
 */
export const imageDefaults = {
  quality: 80,
  loading: "lazy" as const,
};

export const imageDefaultsPriority = {
  quality: 85,
  priority: true,
};