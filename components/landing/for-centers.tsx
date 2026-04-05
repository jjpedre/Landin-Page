"use client"

import { Users, BarChart3, Settings, Zap, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const featureKeys = ["manageAthletes", "realTimeTracking", "customPrograms", "scaleYourBusiness"] as const

const featureIcons = {
  manageAthletes: Users,
  realTimeTracking: BarChart3,
  customPrograms: Settings,
  scaleYourBusiness: Zap,
}

export function ForCenters() {
  const t = useTranslations('forCenters')

  return (
    <section id="centers" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t('badge')}
            </div>
            
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span> {t('titleEnd')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-4 mb-8">
              {featureKeys.map((featureKey) => {
                const Icon = featureIcons[featureKey]
                return (
                  <div key={featureKey} className="flex gap-4">
                    <div className="p-3 bg-primary/10 h-fit">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-display)] font-bold mb-1">{t(`${featureKey}.title`)}</h4>
                      <p className="text-sm text-muted-foreground">{t(`${featureKey}.description`)}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-colors">
              {t('requestDemo')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card border border-border p-6 md:p-8">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground">{t('dashboard.title')}</p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-bold">CROSSFIT MADRID</p>
                </div>
                <div className="text-right">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">47</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.activeAthletes')}</p>
                </div>
              </div>

              {/* Mock athlete list */}
              <div className="space-y-3 mb-6">
                {[
                  { name: "Carlos Mendez", program: "Complete", progress: 78 },
                  { name: "Ana Rodriguez", program: "HYROX", progress: 92 },
                  { name: "Miguel Torres", program: "Focus: Strength", progress: 65 }
                ].map((athlete, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-secondary/50 border border-border">
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {athlete.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{athlete.name}</p>
                      <p className="text-xs text-muted-foreground">{athlete.program}</p>
                    </div>
                    <div className="w-20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">{t('dashboard.progress')}</span>
                        <span className="text-xs font-bold text-primary">{athlete.progress}%</span>
                      </div>
                      <div className="h-1 bg-border">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${athlete.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-secondary/50 border border-border text-center">
                  <p className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">94%</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.completion')}</p>
                </div>
                <div className="p-3 bg-secondary/50 border border-border text-center">
                  <p className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.programs')}</p>
                </div>
                <div className="p-3 bg-secondary/50 border border-border text-center">
                  <p className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">+23</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.thisMonth')}</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 border border-primary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 border border-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
