'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, Headphones, Trash2, Upload, Search, Filter, Calendar, ExternalLink, Eye, Play } from 'lucide-react';
import MediaUploadDialog from './MediaUploadDialog';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  category: string;
  date: string;
  duration?: string;
  views?: number;
  type: 'video' | 'podcast';
  host?: string;
  platform?: 'vimeo' | 'youtube' | 'spotify' | 'apple' | 'other';
  status: 'published' | 'draft' | 'archived';
}

interface MediaAdminPanelProps {
  className?: string;
}

const MediaAdminPanel: React.FC<MediaAdminPanelProps> = ({ className = '' }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    // Sample Videos
    {
      id: 'video-1',
      title: 'Castelnau Group AGM 2025 - Full Recording',
      description: 'The Castelnau Group AGM was held at the Queen Elizabeth II Conference Centre on 6th March 2025.',
      embedUrl: 'https://player.vimeo.com/video/1072584382?h=66669444b2',
      category: 'AGM',
      date: '2025-03-06',
      duration: '1:24:30',
      views: 1850,
      type: 'video',
      platform: 'vimeo',
      status: 'published'
    },
    {
      id: 'video-2',
      title: 'Investment Strategy Update 2024',
      description: 'Richard Brown presents the updated investment strategy and market outlook for 2024.',
      embedUrl: 'https://player.vimeo.com/video/1072584382?h=66669444b2',
      category: 'Investment Strategy',
      date: '2024-11-15',
      duration: '12:30',
      views: 980,
      type: 'video',
      platform: 'vimeo',
      status: 'published'
    },
    // Sample Podcasts
    {
      id: 'podcast-1',
      title: 'The Castelnau Perspective: Building Long-term Value',
      description: 'Richard Brown discusses the philosophy behind Castelnau\'s investment approach.',
      embedUrl: 'https://open.spotify.com/embed/episode/sample1',
      category: 'Investment Philosophy',
      date: '2024-11-01',
      duration: '45:20',
      views: 520,
      type: 'podcast',
      host: 'Richard Brown',
      platform: 'spotify',
      status: 'published'
    },
    {
      id: 'podcast-2',
      title: 'Market Insights: Q3 2024 Portfolio Review',
      description: 'A deep dive into the performance of Castelnau\'s portfolio companies during Q3 2024.',
      embedUrl: 'https://podcasts.apple.com/embed/sample2',
      category: 'Market Commentary',
      date: '2024-10-15',
      duration: '32:15',
      views: 380,
      type: 'podcast',
      host: 'Investment Team',
      platform: 'apple',
      status: 'draft'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaTypes = [
    { value: 'all', label: 'All Media' },
    { value: 'video', label: 'Videos' },
    { value: 'podcast', label: 'Podcasts' }
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ];

  const platforms = [
    { value: 'all', label: 'All Platforms' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'vimeo', label: 'Vimeo' },
    { value: 'spotify', label: 'Spotify' },
    { value: 'apple', label: 'Apple Podcasts' },
    { value: 'other', label: 'Other' }
  ];

  const filteredMediaItems = mediaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.host?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const matchesPlatform = filterPlatform === 'all' || item.platform === filterPlatform;
    
    return matchesSearch && matchesType && matchesStatus && matchesPlatform;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this media item?')) {
      setMediaItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleStatusChange = (id: string, newStatus: MediaItem['status']) => {
    setMediaItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const handleUploadSuccess = (newMedia: Omit<MediaItem, 'id'>) => {
    const media: MediaItem = {
      ...newMedia,
      id: Date.now().toString(),
      views: 0
    };
    setMediaItems(prev => [media, ...prev]);
    setIsUploadDialogOpen(false);
  };

  const getStatusBadgeVariant = (status: MediaItem['status']) => {
    switch (status) {
      case 'published': return 'default';
      case 'draft': return 'secondary';
      case 'archived': return 'outline';
      default: return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'video' ? Video : Headphones;
  };

  const getPlatformColor = (platform?: string) => {
    switch (platform) {
      case 'youtube': return 'bg-red-100 text-red-700';
      case 'vimeo': return 'bg-blue-100 text-blue-700';
      case 'spotify': return 'bg-green-100 text-green-700';
      case 'apple': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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

  // Stats
  const stats = {
    total: mediaItems.length,
    videos: mediaItems.filter(item => item.type === 'video').length,
    podcasts: mediaItems.filter(item => item.type === 'podcast').length,
    published: mediaItems.filter(item => item.status === 'published').length,
    draft: mediaItems.filter(item => item.status === 'draft').length,
    archived: mediaItems.filter(item => item.status === 'archived').length
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Media Library Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage videos and podcasts from YouTube, Vimeo, Spotify, and Apple Podcasts
          </p>
        </div>
        <Button 
          onClick={() => setIsUploadDialogOpen(true)}
          className="bg-castelnau-green text-black hover:bg-castelnau-green/80"
        >
          <Upload className="h-4 w-4 mr-2" />
          Add Media
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-xs text-blue-600">Total</div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.videos}</div>
          <div className="text-xs text-purple-600">Videos</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.podcasts}</div>
          <div className="text-xs text-green-600">Podcasts</div>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-emerald-600">{stats.published}</div>
          <div className="text-xs text-emerald-600">Published</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.draft}</div>
          <div className="text-xs text-orange-600">Drafts</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
          <div className="text-xs text-gray-600">Archived</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {mediaTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map(status => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              {platforms.map(platform => (
                <SelectItem key={platform.value} value={platform.value}>
                  {platform.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Media List */}
      <div className="space-y-4">
        {filteredMediaItems.length > 0 ? (
          filteredMediaItems.map((media) => {
            const TypeIcon = getTypeIcon(media.type);
            return (
              <div key={media.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <TypeIcon className="h-5 w-5 text-gray-500" />
                      <h3 className="font-medium text-gray-900">{media.title}</h3>
                      <Badge variant={getStatusBadgeVariant(media.status)} className="text-xs">
                        {media.status}
                      </Badge>
                      {media.platform && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getPlatformColor(media.platform)}`}>
                          {media.platform}
                        </span>
                      )}
                    </div>
                    
                    {media.description && (
                      <p className="text-sm text-gray-600 mb-2">{media.description}</p>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(media.date)}</span>
                      </span>
                      <span className="capitalize">{media.type}</span>
                      {media.duration && <span>{media.duration}</span>}
                      {media.host && <span>Host: {media.host}</span>}
                      <span className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{formatViews(media.views)}</span>
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                        {media.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <a
                      href={media.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-castelnau-green hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    
                    <Select
                      value={media.status}
                      onValueChange={(value: MediaItem['status']) => handleStatusChange(media.id, value)}
                    >
                      <SelectTrigger className="w-[100px] h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDelete(media.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Video className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p>No media found matching your criteria.</p>
          </div>
        )}
      </div>

      <MediaUploadDialog
        open={isUploadDialogOpen}
        onOpenChange={setIsUploadDialogOpen}
        onUploadSuccess={handleUploadSuccess}
      />
    </Card>
  );
};

export default MediaAdminPanel; 