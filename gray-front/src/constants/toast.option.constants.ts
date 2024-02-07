export const toastOptionConstants = {
  success: (p?: {
    title?: string
    description?: string
  }): {
    title: string
    status: 'success'
    description: string
    duration: number
    isClosable: boolean
  } => ({
    title: p?.title ?? 'success',
    status: 'success',
    description: p?.description ?? 'Done!',
    duration: 9000,
    isClosable: true,
  }),
  failed: (p?: {
    title?: string
    description?: string
    error?: Error
  }): {
    title: string
    status: 'error'
    description: string
    duration: number
    isClosable: boolean
  } => ({
    title: p?.title ?? 'failed',
    status: 'error',
    description: p?.error
      ? p.error.message
      : JSON.stringify(p?.description ?? 'error'),
    duration: 9000,
    isClosable: true,
  }),
}
