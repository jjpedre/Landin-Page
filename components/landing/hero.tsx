"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,220,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,220,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
            <Zap className="w-4 h-4" />
            <span>{t('badge')}</span>
          </div>

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">{t('title1')}</span>
            <br />
            <span className="text-primary">{t('title2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              {t('ctaPrimary')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border text-foreground hover:bg-secondary">
              {t('ctaSecondary')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50">
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-primary">5</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{t('stat1Label')}</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground">{t('stat2Value')}</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{t('stat2Label')}</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground">5</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{t('stat3Label')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
