import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme's Portfolio</title>
      </Head>
      <div>
        <Navbar/>
        <LanguageSelector/>
      </div>
    </>
  )
}
