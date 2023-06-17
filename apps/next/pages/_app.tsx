import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import type { SolitoAppProps } from 'solito'
import DesktopHeader from '../components/DesktopHeader/DesktopHeader'
import { LoadingProvider } from '../context/loadingContext'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const changeStart = () => {
    setLoading(true)
  }
  const changeComplete = () => {
    setLoading(false)
    console.log('dasd')
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
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingProvider value={{ loading: loading, setLoading: setLoading }}>
        <Provider>
          <DesktopHeader />
          <Component {...pageProps} />
        </Provider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
