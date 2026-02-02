export const MediaTypes = {
  Images: 'images',
  Videos: 'videos',
  LivePhotos: 'livePhotos',
} as const;  

export type MediaType = (typeof MediaTypes)[keyof typeof MediaTypes];