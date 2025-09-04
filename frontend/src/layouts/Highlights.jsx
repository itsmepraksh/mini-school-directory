import React from 'react'

const Highlights = () => {
  return (
     <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Fast Search", desc: "Find schools by city/state with instant filtering." },
            { title: "Clean Cards", desc: "Show name, address, city & image like ecommerce." },
            { title: "Responsive", desc: "Looks great on phones, tablets & desktops." }
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 hover:border-zinc-600"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Highlights