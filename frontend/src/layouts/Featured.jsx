import { useNavigate } from "react-router-dom"

 

const Featured = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured Schools</h2>
            <p className="text-sm text-zinc-400">A clean grid showcasing sample cards</p>
          </div>
          <button onClick={()=>navigate('/lost')} className="rounded-xl border border-zinc-600 px-4 py-2 text-sm hover:border-zinc-500">
            View All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900"
            >
              <div className="aspect-[4/3] w-full bg-zinc-800" />
              <div className="p-4">
                <h3 className="truncate text-lg font-semibold">
                  Greenwood High School #{i + 1}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  221B Baker Street, Central Park
                </p>
                <div className="mt-2 flex items-center justify-between text-sm text-zinc-400">
                  <span className="rounded-full bg-zinc-800 px-3 py-1">Bengaluru</span>
                  <button 
                  onClick={()=>navigate('/lost')}
                   className="rounded-lg bg-emerald-500 px-3 py-1 font-medium text-zinc-900">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
  )
}

export default Featured