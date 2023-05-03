import 'raf/polyfill'
import 'setimmediate'

import React from 'react'

import { Provider } from '../../../packages/design-system/provider'
import Head from 'next/head'
import type { SolitoAppProps } from 'solito'

const MyApp = ({ Component, pageProps }: SolitoAppProps) => (
  <>
    <Head>
      <title>Design System Example</title>
      <meta name="description" content="An Queue App by Gabriel Taveira" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default MyApp
