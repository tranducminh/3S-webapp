import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import theme from '../theme/styles'
import '../theme/date-picker-custom.css'
import '../theme/font.css'
import 'leaflet/dist/leaflet.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/styles/pagination.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <CSSReset />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
