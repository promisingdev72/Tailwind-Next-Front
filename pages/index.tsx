
import Head from 'next/head';
import Header from '~/components/header';
import Footer from '~/components/footer';
import Tutorial from '~/components/tutorial';
import Agenda from '~/components/agenda';
import Tout from '~/components/tout';
import Atherent from '~/components/atherent';
import News from '~/components/news';
import Education from '~/components/education';
import Contacts from '~/components/contact';
export default function HomePage(){
  return (
    <>
      <Head>
        <title>Dialogues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='lg:px-28 px-0'>
        <Tutorial/>
        <Agenda/>
        <Tout/>
        <Atherent/>
      </div>
      <News/>
      <Education/>
      <Contacts/>
      <Footer/>
    </>

  )
}
