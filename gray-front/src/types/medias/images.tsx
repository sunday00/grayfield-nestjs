import { MediaCategory } from './share.tsx'

export type crops = string[]

export type ImageForm = {
  title: { value: string }
  category: { value: MediaCategory }
  thx: { value: string }
  link: { value: string }
}

export type ImagePayload = {
  title: string
  category: MediaCategory
  thx: string
  link: string
}

export type ImageFile = {
  id: number
  createdAt: Date
  cache?: string | number
} & ImagePayload

export type ImagePage = {
  items: ImageFile[]
  lastPage: number
  nextPage: number
  page: number
  size: number
  total: number
}
