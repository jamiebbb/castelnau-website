import { Metadata } from 'next';
import MediaLibrary from '@/components/media-library/MediaLibrary';

export const metadata: Metadata = {
  title: 'Media Library | Castelnau Group',
  description: 'Explore our collection of videos, presentations, and multimedia content showcasing the Castelnau Group story.',
  keywords: 'Castelnau Group, media, videos, presentations, insights, investment',
};

export default function MediaLibraryPage() {
  return <MediaLibrary />;
} 