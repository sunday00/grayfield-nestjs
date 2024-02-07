import { AnyObjectStruct } from '../types/anyObject.struct.ts'

export const handleQueryStringUtil = () => {
  if (!location.search) return {}

  const qs = location.search.replace('?', '').split('&')

  const qsO: AnyObjectStruct = {}
  for (const kv of qs) {
    const [k, v] = kv.split('=')
    qsO[k] = v
  }

  return qsO
}
