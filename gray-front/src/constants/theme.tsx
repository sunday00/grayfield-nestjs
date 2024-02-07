import { extendTheme, theme } from '@chakra-ui/react'

const isDark = false

export const extendedTheme = isDark
  ? extendTheme({
      colors: {
        primary: {
          ...theme.colors.blue,
        },
        natural: {
          font: {
            ...theme.colors.whiteAlpha,
          },
          bg: {
            ...theme.colors.gray,
          },
        },
        success: {
          500: theme.colors.green['400'],
          600: theme.colors.green['500'],
        },
        danger: {
          500: theme.colors.red['400'],
          600: theme.colors.red['500'],
        },
      },
    })
  : extendTheme({
      colors: {
        primary: {
          ...theme.colors.blue,
        },
        natural: {
          font: {
            ...theme.colors.gray,
          },
          bg: {
            ...theme.colors.whiteAlpha,
          },
        },
        success: {
          500: theme.colors.green['600'],
          600: theme.colors.green['700'],
        },
        danger: {
          500: theme.colors.red['600'],
          600: theme.colors.red['700'],
        },
      },
    })
