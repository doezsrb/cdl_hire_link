import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import type { SolitoAppProps } from 'solito'
import DesktopHeader from '../components/DesktopHeader/DesktopHeader'
import { LoadingProvider } from '../context/loadingContext'
import { useRouter } from 'next/router'
import { View } from 'react-native'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const changeStart = () => {
    setLoading(true)
  }
  const changeComplete = () => {
    setLoading(false)
  }
  useEffect(() => {
    router.events.on('routeChangeStart', changeStart)
    router.events.on('routeChangeComplete', changeComplete)

    return () => {
      router.events.off('routeChangeStart', changeStart)
      router.events.off('routeChangeComplete', changeComplete)
    }
  }, [router])
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
  return (
    <>
      <Head>
        <title>CDL HIRE LINK</title>
        <meta name="description" content="CDL HIRE LINK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingProvider value={{ loading: loading, setLoading: setLoading }}>
        <Provider>
          <DesktopHeader />
          <View style={{ height: 80 }} />
          <Component {...pageProps} />
        </Provider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
