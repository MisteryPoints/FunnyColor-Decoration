import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
    <Head>
      <title>FunnyColors Decoration</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
      
    <Layout>
      <h1 className='mt-5 text-6xl'>Pagina Inicial</h1>
    </Layout>
    </>
  )
}
