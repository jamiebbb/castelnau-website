'use client';

import React, { useState } from 'react';
import { Play, Video, Calendar, Eye, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHero from '@/components/common/PageHero';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  category: string;
  date: string;
  duration?: string;
  views?: number;
}

const MediaLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  // Media items with AGM content and provided Vimeo videos
  const mediaItems: MediaItem[] = [
    {
      id: 'video-1',
      title: 'Castelnau Group AGM 2025 - Full Recording',
      description: 'The Castelnau Group AGM was held at the Queen Elizabeth II Conference Centre on 6th March 2025, below are recordings of the full AGM and highlights.',
      embedUrl: 'https://player.vimeo.com/video/1072584382?h=66669444b2',
      thumbnailUrl: '/api/placeholder/640/360',
      category: 'AGM',
      date: '2025-03-06',
      duration: '1:24:30',
      views: 1850
    },
    {
      id: 'video-2',
      title: 'AGM Excerpt: Dignity CEO Discussion',
      description: 'AGM excerpt: Zillah Byng-Thorne, CEO of Dignity Funerals, and Richard Brown, CEO of the Castelnau Group, discuss Zillah\'s CEO role at Dignity (0h 34m).',
      embedUrl: 'https://player.vimeo.com/video/1072580398?h=a37340e6e5',
      thumbnailUrl: '/api/placeholder/640/360',
      category: 'AGM',
      date: '2025-03-06',
      duration: '8:15',
      views: 1240
    },
    {
      id: 'video-3',
      title: 'Investment Strategy Update 2024',
      description: 'Richard Brown presents the updated investment strategy and market outlook for 2024, highlighting key portfolio developments and strategic initiatives.',
      embedUrl: 'https://player.vimeo.com/video/1072584382?h=66669444b2',
      thumbnailUrl: '/api/placeholder/640/360',
      category: 'Investment Strategy',
      date: '2024-11-15',
      duration: '12:30',
      views: 980
    },
    {
      id: 'video-4',
      title: 'Portfolio Company Spotlight: Hornby',
      description: 'An in-depth look at Hornby\'s transformation journey under Castelnau ownership, featuring CEO Lyndon Davies discussing strategy and growth plans.',
      embedUrl: 'https://player.vimeo.com/video/1072580398?h=a37340e6e5',
      thumbnailUrl: '/api/placeholder/640/360',
      category: 'Portfolio Insights',
      date: '2024-09-20',
      duration: '15:45',
      views: 1150
    }
  ];

  const categories = ['all', 'AGM', 'Investment Strategy', 'Portfolio Insights', 'Market Commentary', 'Company Updates'];
  
  // Extract unique years from the media items
  const availableYears = ['all', ...Array.from(new Set(mediaItems.map(item => new Date(item.date).getFullYear().toString()))).sort().reverse()];

  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || new Date(item.date).getFullYear().toString() === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatViews = (views?: number) => {
    if (!views) return '0 views';
    return views >= 1000 ? `${(views / 1000).toFixed(1)}k views` : `${views} views`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Media Library"
        description="Explore our collection of videos, presentations, and insights showcasing the Castelnau Group story and investment philosophy."
        showButtons={false}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* AGM 2025 Featured Section */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="h-6 w-6 text-castelnau-green" />
            <h2 className="text-xl font-semibold text-gray-900">Featured: AGM 2025</h2>
          </div>
          <p className="text-gray-600 mb-4">
            The Castelnau Group AGM was held at the Queen Elizabeth II Conference Centre on 6th March 2025. 
            Watch the full recording and key highlights featuring discussions with our portfolio company CEOs 
            and strategic updates from the management team.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-castelnau-green border-castelnau-green">AGM 2025</Badge>
            <Badge variant="outline">Queen Elizabeth II Conference Centre</Badge>
            <Badge variant="outline">6th March 2025</Badge>
          </div>
        </div>
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">Category:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? 'bg-castelnau-green text-black hover:bg-castelnau-green/80' : ''}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Year Filter */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">Year:</span>
                <div className="flex flex-wrap gap-2">
                  {availableYears.map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedYear(year)}
                      className={`text-xs ${selectedYear === year ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-gray-300'}`}
                    >
                      {year === 'all' ? 'All Years' : year}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="relative aspect-video bg-gray-200 group"
                onClick={() => setSelectedVideo(item)}
              >
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 group-hover:bg-black/70 transition-colors">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
                {item.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{formatViews(item.views)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Video className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              
              <div className="aspect-video">
                <iframe
                  title="vimeo-player"
                  src={selectedVideo.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <Badge variant="outline">{selectedVideo.category}</Badge>
                  <div className="flex items-center gap-4">
                    <span>{formatDate(selectedVideo.date)}</span>
                    <span>{formatViews(selectedVideo.views)}</span>
                    {selectedVideo.duration && <span>{selectedVideo.duration}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaLibrary; 