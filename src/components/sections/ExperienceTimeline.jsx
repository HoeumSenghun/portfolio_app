function isBulletList (highlights) {
  return highlights.some((item) => item.length > 35)
}

function ExperienceItem ({ item, isLast }) {
  const showBullets = item.highlights && isBulletList(item.highlights)

  return (
    <li className="relative pl-10 pb-10 last:pb-0">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[11px] top-7 bottom-0 w-px bg-border"
        />
      ) : null}

      <span
        aria-hidden="true"
        className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background shadow-sm"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>

      <article className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">{item.role}</h2>
            <p className="mt-0.5 text-sm font-medium text-accent">{item.company}</p>
          </div>
          <time className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {item.period}
          </time>
        </div>

        {item.highlights?.length ? (
          showBullets ? (
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )
        ) : null}
      </article>
    </li>
  )
}

export default function ExperienceTimeline ({ items }) {
  const sortedItems = [...items].sort((a, b) => Number(b.id) - Number(a.id))

  return (
    <ol className="relative mt-10">
      {sortedItems.map((item, index) => (
        <ExperienceItem
          key={item.id}
          item={item}
          isLast={index === sortedItems.length - 1}
        />
      ))}
    </ol>
  )
}
