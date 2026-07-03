import { useState } from 'react'
import Navbar from './components/Navbar'

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null)

  const handleGenerate = () => {
    const n = Math.floor(Math.random() * 100) + 1 // 1..100
    setRandomNumber(n)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 ">
      <Navbar />

      <main className="mx-auto flex w-full max-w-4xl items-center px-4 py-10 ">
        <section className="w-full rounded-2xl border border-black/10  p-6 shadow-sm backdrop-blur bg-linear-to-r/srgb from-indigo-500 to-teal-400 ">
          <h1 className="text-xl font-semibold text-white">
            Generate a random number
          </h1>
          <p className="mt-1 text-sm text-black">
            Click the button to update the value instantly using state.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3">
                <div className="h-4 w-4 rounded-full bg-amber-300" />
              </div>

              <div>
                <div className="text-xs font-medium text-white">Result</div>
                {randomNumber === null ? (
                  <div className="text-2xl font-bold text-gray-900">
                    No number generated yet
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900">
                    {randomNumber}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Generate Random Number
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}


