export const imgPath = `${import.meta.env.VITE_FILE}/${
  import.meta.env.VITE_FILE_VERSION
}/file`

export const fileMimeTypesUpper = ['JPG', 'JPEG', 'PNG', 'GIF']
export const fileMimeTypes = [
  ...fileMimeTypesUpper,
  ...fileMimeTypesUpper.map((f) => f.toLowerCase()),
]
