"use client"

import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function CTA() {
  const t = useTranslations('cta')

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,220,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,220,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Yellow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            {t('title')} <span className="text-primary">{t('titleHighlight')}</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg transition-colors">
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 px-10 py-5 border border-border text-foreground hover:bg-secondary font-semibold text-lg transition-colors">
              {t('ctaSecondary')}
            </button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {t('noCreditCard')}
          </p>
        </div>
      </div>
    </section>
  )
}
