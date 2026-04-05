"use client"

import { Check, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const programKeys = ["complete", "hyrox", "focus"] as const

export function Programs() {
  const t = useTranslations('programs')

  return (
    <section id="programs" className="py-24 md:py-32">
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

        {/* Programs grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programKeys.map((programKey) => {
            const isPopular = programKey === "complete"
            return (
              <div
                key={programKey}
                className={`relative p-8 border transition-all duration-300 hover:border-primary/50 ${
                  isPopular
                    ? "bg-primary/5 border-primary"
                    : "bg-card border-border"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-8 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-wider">
                    {t('mostPopular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wide mb-1">
                    {t(`${programKey}.name`)}
                  </h3>
                  <p className="text-primary text-sm">{t(`${programKey}.subtitle`)}</p>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t(`${programKey}.description`)}
                </p>

                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4].map((featureNum) => (
                    <li key={featureNum} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t(`${programKey}.feature${featureNum}`)}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t('startProgram')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
