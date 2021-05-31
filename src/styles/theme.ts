import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    hightlight: {
      main: '#FFBA08',
    },
    dark: {
      black: '#000',
      heading: '#47585B',
      text: '#47585B',
      info: '#999',
    },
    light: {
      white: '#fff',
      heading: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.heading',
        color: 'dark.heading',
        fontFamily: 'fonts.body',
      },
    },
  },
})
