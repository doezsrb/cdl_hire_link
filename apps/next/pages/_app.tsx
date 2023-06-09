import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import DesktopHeader from '../components/DesktopHeader/DesktopHeader'

function MyApp({ Component, pageProps }: SolitoAppProps) {
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

      <Provider>
        <DesktopHeader />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
