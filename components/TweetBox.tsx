import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from 'react'
import { Tweet, TweetBody } from '../typings'

import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}
const TweetBox = ({ setTweets }: Props) => {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addImageToTweet = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) {
      return
    }
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setImageUrlBoxIsOpen(false)
  }
  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
      image: image,
    }
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST',
    })
    const json = await result.json()
    const newTweets = await fetchTweets()
    setTweets(newTweets)
    toast('Tweet Posted')
    return json
  }
  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    postTweet()
    setInput('')
    setImage('')
    setImageUrlBoxIsOpen(false)
  }
  return (
    <div className="flex space-x-2 p-5">
      <img
        src={session?.user?.image || 'https://links.papareact.com/gll'}
        className="mt-4 h-14 w-14 rounded-full object-cover"
        alt="Profile"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            placeholder="What's Happening"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              type="submit"
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
              disabled={!input || !session}
              onClick={handleSubmit}
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="mt-5 rounded-lg  bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image Url"
              />
              <button
                type="submit"
                onClick={(e) => addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img
              src={image}
              alt=""
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
