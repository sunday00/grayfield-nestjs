import { Media } from '../medias/share.tsx'
import { TagEntity } from './tag.type.tsx'
import { SeriesType } from './series.type.tsx'

export enum ArticleCategory {
  Child = 'Child',
  Mono = 'Mono',
  Mini = 'Mini',
  Other = 'Other',
  Essay = 'Essay',
}

export type ArticleType = {
  id: number
  seriesId?: number | null
  title: string
  content: string
  brief: string
  medias: Media[]
  slug: string
  type: ArticleCategory
  tags: { tag: TagEntity }[]
  createdAt: Date
  updateAt: Date
  prevNext?: {
    id: number
    title: string
    slug: string
    pn: 'prev' | 'next'
    createdAt: Date
  }[]
}

export type ArticleReqType = ArticleType & { series?: number | null }
export type ArticleResType = ArticleType & { series?: SeriesType | null }

export type ArticleForm = {
  title: { value: string }
  slug: { value: string }
  brief: { value: string }
}
