import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3ksax8m8";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-10-03",
  // Never use CDN for portfolio content — always read latest published docs
  useCdn: false,
  perspective: "published",
});

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(
  source: SanityImageSource | undefined | null,
  width = 1200,
  height = 800
): string | undefined {
  if (!source) return undefined;
  try {
    return urlForImage(source).width(width).height(height).url();
  } catch {
    return undefined;
  }
}

export function getFileUrl(
  file: { asset?: { url?: string } } | undefined | null
): string | undefined {
  return file?.asset?.url;
}
