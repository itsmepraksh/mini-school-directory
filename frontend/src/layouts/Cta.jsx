import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cta = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Have a school to showcase?</h3>
            <p className="mt-1 text-zinc-400">
              Add details, upload an image, and make it discoverable in minutes.
            </p>
          </div>
          <div className="mt-5 flex gap-3 md:mt-0">
            <button onClick={()=>navigate('/addSchool')} className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-zinc-900 hover:bg-emerald-400">
              Add School
            </button>
            <button onClick={()=>navigate('/lost')} className="rounded-xl border border-zinc-600 px-5 py-3 hover:border-zinc-500">
              Docs
            </button>
          </div>
        </div>
      </section>
  )
}

export default Cta