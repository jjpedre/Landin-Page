"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const locales = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = locales.find(l => l.code === locale) || locales[0]

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-foreground">H</span>
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight hidden sm:block">
              HYBRID TOTAL TRAINING
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight sm:hidden">
              HTT
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('categories')}
            </Link>
            <Link href="#programs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('programs')}
            </Link>
            <Link href="#ranking" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('ranking')}
            </Link>
            <Link href="#centers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('forCenters')}
            </Link>
          </div>

          {/* CTA & Language */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                  <Globe className="w-4 h-4" />
                  <span>{currentLocale.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc.code}
                    onClick={() => switchLocale(loc.code)}
                    className={`cursor-pointer ${locale === loc.code ? 'bg-primary/10 text-primary' : 'text-foreground'}`}
                  >
                    <span className="mr-2">{loc.flag}</span>
                    {loc.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              {t('signIn')}
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              {t('startFreeTrial')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs">{currentLocale.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc.code}
                    onClick={() => switchLocale(loc.code)}
                    className={`cursor-pointer ${locale === loc.code ? 'bg-primary/10 text-primary' : 'text-foreground'}`}
                  >
                    <span className="mr-2">{loc.flag}</span>
                    {loc.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('categories')}
              </Link>
              <Link href="#programs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('programs')}
              </Link>
              <Link href="#ranking" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('ranking')}
              </Link>
              <Link href="#centers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('forCenters')}
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground">
                  {t('signIn')}
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  {t('startFreeTrial')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
