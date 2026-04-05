"use client"

import { Brain, Target, MapPin, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"

const featureKeys = ["personalized", "adapted", "anywhere", "smart"] as const

const featureIcons = {
  personalized: Brain,
  adapted: Target,
  anywhere: MapPin,
  smart: BarChart3,
}

export function Features() {
  const t = useTranslations('features')

  return (
    <section className="py-24 md:py-32 bg-card">
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

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((featureKey) => {
            const Icon = featureIcons[featureKey]
            return (
              <div
                key={featureKey}
                className="group p-8 bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-4 bg-primary/10 w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide mb-3">
                  {t(`${featureKey}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`${featureKey}.description`)}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 md:p-12 bg-secondary/30 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-4">
                {t('totalPersonalization')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('totalPersonalizationDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-primary" />
                <span>{t('bullet1')}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-primary" />
                <span>{t('bullet2')}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-primary" />
                <span>{t('bullet3')}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-primary" />
                <span>{t('bullet4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
