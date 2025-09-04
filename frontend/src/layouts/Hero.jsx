import { useNavigate } from "react-router-dom"

 

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Discover & showcase schools with a clean, modern dashboard.
            </h1>
            <p className="mt-4 max-w-prose text-zinc-300">
              A minimal platform to browse schools like products. Add details, upload images, and
              present everything beautifully, built with React & Tailwind.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={()=>navigate('/showSchool')} className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-zinc-900 hover:bg-emerald-400">
                Explore Schools
              </button>
              <button onClick={()=>navigate('/lost')} className="rounded-xl border border-zinc-600 px-5 py-3 hover:border-zinc-500">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 text-sm text-zinc-400">
              <div>
                <p className="text-2xl font-bold text-zinc-100">1,200+</p>
                <p>Listed Schools</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-100">95%</p>
                <p>Verified Profiles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-100">24/7</p>
                <p>Availability</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
            {/* Placeholder hero card */}
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-emerald-500/20 grid place-items-center">
                  <span className="text-emerald-400 font-bold">🏫</span>
                </div>
                <p className="text-zinc-300">Beautiful preview area</p>
                <p className="text-xs text-zinc-500">Drop screenshots of your grid/list UI here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero