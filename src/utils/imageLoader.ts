export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/castelnau-website' : '';
  return `${basePath}${src}`;
} 