import React from 'react'

const Working = () => {
  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-center p-6">
      {/* Icon */}
      {/* <h1 className="w-16 h-16 text-emerald-400 mb-4" ></h1> */}

      {/* Title */}
      <h1 className="text-3xl font-bold text-emerald-400 mb-2">
        Page Under Construction
      </h1>

      {/* Message */}
      <p className="text-zinc-300 text-center max-w-md">
        This page is currently being built. Please check back later <br /> we’re
        working hard to bring it to life!
      </p>

      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 rounded-lg bg-emerald-500 px-6 py-2 font-semibold text-white hover:bg-emerald-400"
      >
        Go Back
      </button>
    </div>
  )
}

export default Working