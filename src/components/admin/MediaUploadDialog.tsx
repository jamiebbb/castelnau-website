'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Video, Headphones, AlertCircle, CheckCircle, ExternalLink, Play } from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  category: string;
  date: string;
  duration?: string;
  type: 'video' | 'podcast';
  host?: string;
  platform?: 'vimeo' | 'youtube' | 'spotify' | 'apple' | 'other';
  status: 'published' | 'draft' | 'archived';
}

interface MediaUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUploadSuccess: (media: Omit<MediaItem, 'id'>) => void;
}

const MediaUploadDialog: React.FC<MediaUploadDialogProps> = ({
  open,
  onOpenChange,
  onUploadSuccess,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: '',
    type: 'video' as 'video' | 'podcast',
    host: '',
    duration: '',
    status: 'draft' as MediaItem['status']
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [previewData, setPreviewData] = useState<{
    platform?: string;
    embedUrl?: string;
    isValid?: boolean;
  }>({});

  const videoCategories = [
    { value: 'AGM', label: 'AGM' },
    { value: 'Investment Strategy', label: 'Investment Strategy' },
    { value: 'Portfolio Insights', label: 'Portfolio Insights' },
    { value: 'Market Commentary', label: 'Market Commentary' },
    { value: 'Company Updates', label: 'Company Updates' }
  ];

  const podcastCategories = [
    { value: 'Investment Philosophy', label: 'Investment Philosophy' },
    { value: 'Market Commentary', label: 'Market Commentary' },
    { value: 'Portfolio Insights', label: 'Portfolio Insights' },
    { value: 'Industry Trends', label: 'Industry Trends' }
  ];

  const categories = formData.type === 'video' ? videoCategories : podcastCategories;

  const detectPlatformAndGenerateEmbed = (url: string) => {
    setPreviewData({});
    
    if (!url) return;

    // YouTube URL patterns
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    
    // Vimeo URL patterns
    const vimeoRegex = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const vimeoMatch = url.match(vimeoRegex);
    
    // Spotify URL patterns
    const spotifyRegex = /spotify\.com\/(?:episode|show)\/([a-zA-Z0-9]+)/;
    const spotifyMatch = url.match(spotifyRegex);
    
    // Apple Podcasts URL patterns
    const appleRegex = /podcasts\.apple\.com\/.*\/podcast\/.*\/id(\d+)/;
    const appleMatch = url.match(appleRegex);

    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      setPreviewData({
        platform: 'youtube',
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        isValid: true
      });
    } else if (vimeoMatch) {
      const videoId = vimeoMatch[3];
      setPreviewData({
        platform: 'vimeo',
        embedUrl: `https://player.vimeo.com/video/${videoId}`,
        isValid: true
      });
    } else if (spotifyMatch) {
      const episodeId = spotifyMatch[1];
      setPreviewData({
        platform: 'spotify',
        embedUrl: `https://open.spotify.com/embed/episode/${episodeId}`,
        isValid: true
      });
    } else if (appleMatch) {
      const podcastId = appleMatch[1];
      setPreviewData({
        platform: 'apple',
        embedUrl: url, // Apple podcasts use the original URL
        isValid: true
      });
    } else {
      setPreviewData({
        platform: 'other',
        embedUrl: url,
        isValid: false
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
    
    if (field === 'url') {
      detectPlatformAndGenerateEmbed(value);
    }
  };

  const handleTypeChange = (type: 'video' | 'podcast') => {
    setFormData(prev => ({ 
      ...prev, 
      type,
      category: '', // Reset category when changing type
      host: type === 'video' ? '' : prev.host // Clear host for videos
    }));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Please enter a title');
      return false;
    }
    
    if (!formData.url.trim()) {
      setError('Please enter a valid URL');
      return false;
    }
    
    if (!previewData.isValid) {
      setError('Please enter a valid YouTube, Vimeo, Spotify, or Apple Podcasts URL');
      return false;
    }
    
    if (!formData.category) {
      setError('Please select a category');
      return false;
    }
    
    if (formData.type === 'podcast' && !formData.host.trim()) {
      setError('Please enter the host name for the podcast');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setUploading(true);
    setError(null);

    try {
      // Simulate API call - in real implementation, this would save to database
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mediaData: Omit<MediaItem, 'id'> = {
        title: formData.title,
        description: formData.description,
        embedUrl: previewData.embedUrl!,
        category: formData.category,
        date: new Date().toISOString().split('T')[0],
        duration: formData.duration || undefined,
        type: formData.type,
        host: formData.type === 'podcast' ? formData.host : undefined,
        platform: previewData.platform as any,
        status: formData.status
      };
      
      setSuccess(true);
      onUploadSuccess(mediaData);
      
      // Reset form after successful upload
      setTimeout(() => {
        handleClose();
      }, 2000);
      
    } catch (error) {
      console.error('Upload error:', error);
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
      url: '',
      category: '',
      type: 'video',
      host: '',
      duration: '',
      status: 'draft'
    });
    setError(null);
    setSuccess(false);
    setPreviewData({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {formData.type === 'video' ? (
              <Video className="h-5 w-5 text-blue-600" />
            ) : (
              <Headphones className="h-5 w-5 text-purple-600" />
            )}
            <span>Add {formData.type === 'video' ? 'Video' : 'Podcast'} to Media Library</span>
          </DialogTitle>
          <DialogDescription>
            Add YouTube, Vimeo videos or Spotify, Apple Podcasts episodes to your media library.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Upload Successful!</h3>
            <p className="text-gray-600">Your {formData.type} has been added to the media library.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Media Type Selection */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Media Type <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={formData.type === 'video' ? 'default' : 'outline'}
                  onClick={() => handleTypeChange('video')}
                  className="flex items-center space-x-2"
                >
                  <Video className="h-4 w-4" />
                  <span>Video</span>
                </Button>
                <Button
                  type="button"
                  variant={formData.type === 'podcast' ? 'default' : 'outline'}
                  onClick={() => handleTypeChange('podcast')}
                  className="flex items-center space-x-2"
                >
                  <Headphones className="h-4 w-4" />
                  <span>Podcast</span>
                </Button>
              </div>
            </div>

            {/* URL Input */}
            <div className="space-y-2">
              <Label htmlFor="url" className="text-sm font-medium">
                {formData.type === 'video' ? 'YouTube/Vimeo URL' : 'Spotify/Apple Podcasts URL'} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="url"
                type="url"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                placeholder={formData.type === 'video' 
                  ? 'https://www.youtube.com/watch?v=... or https://vimeo.com/...'
                  : 'https://open.spotify.com/episode/... or https://podcasts.apple.com/...'
                }
                disabled={uploading}
                required
              />
              {previewData.platform && (
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant={previewData.isValid ? 'default' : 'destructive'} className="capitalize">
                    {previewData.platform}
                  </Badge>
                  {previewData.isValid ? (
                    <span className="text-sm text-green-600">✓ Valid URL detected</span>
                  ) : (
                    <span className="text-sm text-red-600">⚠ URL format not recognized</span>
                  )}
                </div>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder={`Enter ${formData.type} title`}
                disabled={uploading}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Host (for podcasts only) */}
            {formData.type === 'podcast' && (
              <div className="space-y-2">
                <Label htmlFor="host" className="text-sm font-medium">
                  Host <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="host"
                  type="text"
                  value={formData.host}
                  onChange={(e) => handleInputChange('host', e.target.value)}
                  placeholder="Enter host name"
                  disabled={uploading}
                  required
                />
              </div>
            )}

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium">
                Duration (Optional)
              </Label>
              <Input
                id="duration"
                type="text"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="e.g., 15:30 or 1:24:30"
                disabled={uploading}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder={`Brief description of the ${formData.type} content...`}
                rows={3}
                disabled={uploading}
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status" className="text-sm font-medium">
                Publication Status
              </Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value as MediaItem['status'])}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft - Not visible to visitors</SelectItem>
                  <SelectItem value="published">Published - Visible in media library</SelectItem>
                  <SelectItem value="archived">Archived - Hidden from main view</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preview */}
            {previewData.isValid && previewData.embedUrl && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Preview</Label>
                <div className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center space-x-2 mb-2">
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {formData.type === 'video' ? 'Video' : 'Podcast'} will be embedded from {previewData.platform}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono bg-white p-2 rounded border">
                    {previewData.embedUrl}
                  </div>
                </div>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose} disabled={uploading}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-castelnau-green text-black hover:bg-castelnau-green/80"
                disabled={uploading || !previewData.isValid}
              >
                {uploading ? 'Adding...' : `Add ${formData.type === 'video' ? 'Video' : 'Podcast'}`}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MediaUploadDialog; 