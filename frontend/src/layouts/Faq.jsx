import React from "react";

const Faq = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h3 className="mb-6 text-2xl font-bold">FAQs</h3>
      <div className="space-y-3">
        {[
          {
            q: "What details are shown on cards?",
            a: "School name, address, city and image.",
          },
          {
            q: "Is this mobile friendly?",
            a: "Yes. The layout is responsive and adapts across screen sizes.",
          },
          {
            q: "Can I upload images?",
            a: "This UI is a static demo.",
          },
        ].map((item, i) => (
          <details
            key={i}
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 open:ring-1 open:ring-zinc-600"
          >
            <summary className="cursor-pointer select-none font-medium">
              {item.q}
            </summary>
            <p className="mt-2 text-sm text-zinc-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
