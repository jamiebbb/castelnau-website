export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/castelnau-website' : '';
  return `${basePath}${path}`;
}; 