import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'

export default function Karten() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Karten</title>
      </Head>
    </Layout>
  )
}
