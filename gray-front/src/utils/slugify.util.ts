export const slugifyUtil = (v: string) => {
  return v
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}
