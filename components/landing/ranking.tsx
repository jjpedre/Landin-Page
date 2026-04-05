"use client"

import { Trophy, Medal, TrendingUp } from "lucide-react"
import { useTranslations } from "next-intl"

const leaderboard = [
  { rank: 1, name: "Carlos M.", totalLevel: 23, badgeKey: "eliteHybrid" },
  { rank: 2, name: "Ana R.", totalLevel: 21, badgeKey: "eliteHybrid" },
  { rank: 3, name: "Miguel T.", totalLevel: 19, badgeKey: "proAthlete" },
  { rank: 4, name: "Sofia H.", totalLevel: 18, badgeKey: "proAthlete" },
  { rank: 5, name: "David L.", totalLevel: 17, badgeKey: "proAthlete" },
]

const userProgress = {
  totalLevel: 15,
  rank: 127,
  categories: [
    { nameKey: "speed", level: 2 },
    { nameKey: "strength", level: 5 },
    { nameKey: "endurance", level: 3 },
    { nameKey: "gymnastics", level: 4 },
    { nameKey: "mobility", level: 1 },
  ]
}

export function Ranking() {
  const t = useTranslations('ranking')
  const tCat = useTranslations('categories')

  return (
    <section id="ranking" className="py-24 md:py-32 bg-card">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div className="bg-secondary/30 border border-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{t('globalRanking')}</h3>
            </div>

            <div className="space-y-3">
              {leaderboard.map((athlete) => (
                <div
                  key={athlete.rank}
                  className={`flex items-center gap-4 p-4 border ${
                    athlete.rank <= 3 ? "border-primary/30 bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center font-[family-name:var(--font-display)] font-bold ${
                    athlete.rank === 1 ? "bg-primary text-primary-foreground" :
                    athlete.rank === 2 ? "bg-muted-foreground/20 text-foreground" :
                    athlete.rank === 3 ? "bg-amber-900/30 text-amber-500" :
                    "bg-secondary text-muted-foreground"
                  }`}>
                    {athlete.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{athlete.name}</p>
                    <p className="text-xs text-muted-foreground">{t(`badges.${athlete.badgeKey}`)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">{athlete.totalLevel}</p>
                    <p className="text-xs text-muted-foreground">{t('totalLevel')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User progress */}
          <div className="bg-secondary/30 border border-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{t('yourProgress')}</h3>
            </div>

            {/* Total level */}
            <div className="text-center p-6 bg-card border border-border mb-6">
              <p className="text-muted-foreground text-sm mb-2">{t('totalLevel')}</p>
              <p className="font-[family-name:var(--font-display)] text-6xl font-bold text-primary">{userProgress.totalLevel}</p>
              <p className="text-muted-foreground text-sm mt-2">
                <span className="text-primary">#{userProgress.rank}</span> {t('globalRank')}
              </p>
            </div>

            {/* Category breakdown */}
            <div className="space-y-4">
              {userProgress.categories.map((category) => (
                <div key={category.nameKey}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{tCat(`${category.nameKey}.name`)}</span>
                    <span className="font-[family-name:var(--font-display)] font-bold text-foreground">
                      {category.level}/5
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`flex-1 h-2 ${
                          level <= category.level ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              {t('improveRanking')}
            </button>
          </div>
        </div>

        {/* Challenges preview */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/30 border border-border">
            <Medal className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{t('weeklyChallenges.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('weeklyChallenges.description')}</p>
          </div>
          <div className="p-6 bg-secondary/30 border border-border">
            <Trophy className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{t('levelRecords.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('levelRecords.description')}</p>
          </div>
          <div className="p-6 bg-secondary/30 border border-border">
            <TrendingUp className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{t('smartProgress.title')}</h4>
            <p className="text-sm text-muted-foreground">{t('smartProgress.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
