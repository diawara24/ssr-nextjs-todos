import Head from 'next/head'
import '../styles/global.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  <Fragment>
    <Head>
      <title>Todos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}
