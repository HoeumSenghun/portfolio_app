'use client'

import { useTranslations } from 'next-intl'
import { skills } from '@/data/mock'
import './skills-carousel.css'

export default function SkillsCarousel () {
  const t = useTranslations('pages.skills')
  const quantity = skills.length

  return (
    <div className="skills-carousel-wrap w-full">
      <div className="skills-carousel w-full">
      <div className="skills-carousel__stage relative w-full overflow-visible pt-4 pb-16 text-center sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
        <div className="skills-carousel__fit">
          <div
            className="skills-carousel__slider"
            style={{ '--quantity': quantity }}
            role="list"
            aria-label={t('title')}
          >
            {skills.map(({ name, icon: Icon }, index) => (
              <div
                key={name}
                className="skills-carousel__item"
                style={{ '--position': index + 1 }}
                role="listitem"
              >
                <article className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg border border-border/80 bg-card/90 p-2 shadow-[0_6px_18px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:gap-2.5 sm:rounded-xl sm:p-3.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent/35 bg-muted/60 text-accent sm:h-10 sm:w-10">
                    <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden />
                  </div>
                  <h2 className="max-w-full px-0.5 text-center text-[0.575rem] font-semibold leading-tight text-foreground sm:text-xs">
                    {name}
                  </h2>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-carousel__floor" aria-hidden />
        <p className="skills-carousel__title" data-content={t('watermark')}>
          {t('watermark')}
        </p>
      </div>
    </div>
    </div>
  )
}
