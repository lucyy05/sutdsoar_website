/**
 * Resolves image filenames from src/static/ to their Vite-built URLs
 * so all pictures in static/ can be displayed on the website.
 * Glob path is relative to this file (src/app/shared/utils/ -> ../../../static).
 */
const imageModules = import.meta.glob('../../../static/*', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

const urlByFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const filename = path.replace(/^.*\//, '');
  urlByFilename[filename] = url;
}

/** Get the URL for an image in src/static/ by filename (e.g. "scrt.JPG", "beach.jpg") */
export function getStaticImageUrl(filename: string): string {
  if (!filename) return '';
  const exact = urlByFilename[filename];
  if (exact) return exact;
  const lower = filename.toLowerCase();
  const found = Object.keys(urlByFilename).find((k) => k.toLowerCase() === lower);
  return found ? urlByFilename[found] : '';
}
