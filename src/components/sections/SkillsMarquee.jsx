'use client'

import { useTranslations } from 'next-intl'
import { skills } from '@/data/mock'
import './skills-marquee.css'

export default function SkillsMarquee () {
  const t = useTranslations('pages.skills')
  const items = [...skills, ...skills]

  return (
    <section className="skills-marquee" aria-label={t('marqueeLabel')}>
      <div className="skills-marquee__track">
        {items.map(({ name, icon: Icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="skills-marquee__item"
            aria-hidden={index >= skills.length}
          >
            <span className="skills-marquee__icon">
              <Icon aria-hidden />
            </span>
            <span className="skills-marquee__name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
