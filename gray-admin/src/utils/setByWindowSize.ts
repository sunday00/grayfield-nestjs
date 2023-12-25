import React from 'react'

export const setByWindowSize = <T>(
  size: number,
  setter: React.Dispatch<React.SetStateAction<T>>,
  value: T[],
) => {
  window.innerWidth > size ? setter(value[0]) : setter(value[1])
}
