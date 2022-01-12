import Navbar from 'components/Navbar'
import Head from 'next/head'

const screes = () => {
  return (
    <div className='screen-layout'>
      <Head>
        <title>PM - Screens</title>
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default screes
