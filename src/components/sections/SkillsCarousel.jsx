'use client'

import { useTranslations } from 'next-intl'
import { skills } from '@/data/mock'
import './skills-carousel.css'

export default function SkillsCarousel () {
  const t = useTranslations('pages.skills')
  const quantity = skills.length

  return (
    <div className="skills-carousel">
      <div className="skills-carousel__stage">
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
                <article className="skills-carousel__card">
                  <div className="skills-carousel__icon">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h2 className="skills-carousel__name">{name}</h2>
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
  )
}
