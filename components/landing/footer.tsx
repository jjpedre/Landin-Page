"use client"

import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-foreground">H</span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                HTT
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-bold mb-4">{t('training')}</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('completeProgram')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('hyroxProgram')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('focusProgram')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('categories')}</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-bold mb-4">{t('platform')}</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('forAthletes')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('forTrainingCenters')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('globalRanking')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('challenges')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-bold mb-4">{t('company')}</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('aboutUs')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('contact')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('termsOfService')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('slogan')}
          </p>
        </div>
      </div>
    </footer>
  )
}
