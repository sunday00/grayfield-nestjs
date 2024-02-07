import { Media } from '../medias/share.tsx'
import { TagEntity } from './tag.type.tsx'

export type SeriesType = {
  id: number
  title: string
  medias: Pick<Media, 'id' | 'type'>[]
  brief: string
  tags: { tag: TagEntity }[]
  articleCnt?: number
}

export type SeriesForm = {
  title: { value: string }
  brief: { value: string }
}
