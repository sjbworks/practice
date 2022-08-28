/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import Counter from '../islands/Counter.tsx'
import { useState } from 'preact/hooks'
import { IS_BROWSER } from '$fresh/runtime.ts'

export default function Home() {
  const [count, setCount] = useState(3)
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p class={tw`my-6`}>Welcome to `fresh`. Try update this message in the ./routes/index.tsx file, and refresh.</p>
      <Counter start={3} />
      <div class={tw`flex gap-2 w-full`}>
        <p>routes counter</p>
        <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
        <button class={btn} onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
          -1
        </button>
        <button class={btn} onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
          +1
        </button>
      </div>
    </div>
  )
}
