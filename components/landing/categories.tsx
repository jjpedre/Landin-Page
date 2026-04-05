"use client"

import { useState } from "react"
import { Zap, Dumbbell, Heart, FlipVertical, Move } from "lucide-react"
import { useTranslations } from "next-intl"

const categoryKeys = ["speed", "strength", "endurance", "gymnastics", "mobility"] as const

const categoryIcons = {
  speed: Zap,
  strength: Dumbbell,
  endurance: Heart,
  gymnastics: FlipVertical,
  mobility: Move,
}

const categoryLevels = {
  speed: 2,
  strength: 5,
  endurance: 3,
  gymnastics: 4,
  mobility: 1,
}

export function Categories() {
  const t = useTranslations('categories')
  const [activeCategory, setActiveCategory] = useState<typeof categoryKeys[number]>("speed")

  const ActiveIcon = categoryIcons[activeCategory]

  return (
    <section id="categories" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Category list */}
          <div className="space-y-3">
            {categoryKeys.map((categoryKey) => {
              const Icon = categoryIcons[categoryKey]
              const level = categoryLevels[categoryKey]
              return (
                <button
                  key={categoryKey}
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`w-full flex items-center gap-4 p-4 md:p-6 text-left transition-all duration-300 border ${
                    activeCategory === categoryKey
                      ? "bg-primary/10 border-primary"
                      : "bg-secondary/50 border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`p-3 ${activeCategory === categoryKey ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold tracking-wide">
                      {t(`${categoryKey}.name`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t(`${categoryKey}.subtitle`)}</p>
                  </div>
                  {/* Level indicator */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div
                        key={lvl}
                        className={`w-2 h-8 ${
                          lvl <= level ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active category detail */}
          <div className="lg:sticky lg:top-24 bg-secondary/30 border border-border p-8 md:p-12">
            <div className="inline-flex p-4 mb-6 bg-primary text-primary-foreground">
              <ActiveIcon className="w-10 h-10" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-wide mb-2">
              {t(`${activeCategory}.name`)}
            </h3>
            <p className="text-primary text-lg mb-4">{t(`${activeCategory}.subtitle`)}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(`${activeCategory}.description`)}
            </p>
            
            {/* Level progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t('currentLevel')}</span>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">
                  {categoryLevels[activeCategory]}/5
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`flex-1 h-3 ${
                      level <= categoryLevels[activeCategory] ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button className="w-full py-4 font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              {t('startTraining')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
