import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import { MouseEvent, useRef } from "react"
import { NextRouter, useRouter } from "next/router"

import Footer from "../components/Footer"
import Head from "next/head"
import Header from "../components/Header"
import Image from "next/image"

export default function Home(): JSX.Element {
  const router: NextRouter = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return
    router.push(`/search?term=${term.trim()}`)
  }

  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          objectFit="cover"
          width={300}
          height={100}
          alt="logo"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I&apos;m feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
