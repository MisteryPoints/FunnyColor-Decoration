import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/Funny.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FunnyColor Decoration</title>   
      </Head>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
