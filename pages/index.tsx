import type { GetServerSideProps} from 'next'

import Feed from '../components/Feed'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import { Toaster } from 'react-hot-toast'
import { Tweet } from '../typings'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import {useEffect} from 'react'
interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  useEffect(()=> {
    fetchTweets()
  },[tweets])
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter Clone 2.0</title>
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets()
  return {
    props: {
      tweets,
    },
  }
}
