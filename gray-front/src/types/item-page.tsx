export type ItemPage<T> = {
  total: number
  items: T[]
  page: number
  size: number
  nextPage: number
  lastPage: number
}
