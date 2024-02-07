export enum MediaCategory {
  MainImage = 'MainImage',
  ContentImage = 'ContentImage',
  Meme = 'Meme',
  Other = 'Other',
}

export type Media = {
  id: number
  type: 'image' | 'video'
  category: MediaCategory
}
