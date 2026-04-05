"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { CheckCircle2, Lock, Dumbbell, Timer, Target, Flame, Zap, Trophy, Wind, Heart, Mountain, Sparkles } from "lucide-react"

const challengeIcons: Record<string, React.ReactNode> = {
  handstand: <Target className="w-8 h-8" />,
  benchPress: <Dumbbell className="w-8 h-8" />,
  run10k: <Wind className="w-8 h-8" />,
  pullUps: <Mountain className="w-8 h-8" />,
  pushUps: <Flame className="w-8 h-8" />,
  run5k: <Zap className="w-8 h-8" />,
  lSit: <Sparkles className="w-8 h-8" />,
  deadlift: <Trophy className="w-8 h-8" />,
  muscleUp: <Target className="w-8 h-8" />,
  plank: <Heart className="w-8 h-8" />,
}

const challengeKeys = [
  "handstand",
  "benchPress", 
  "run10k",
  "pullUps",
  "pushUps",
  "run5k",
  "lSit",
  "deadlift",
  "muscleUp",
  "plank",
] as const

const completionPercentages: Record<string, number> = {
  handstand: 18,
  benchPress: 34,
  run10k: 67,
  pullUps: 12,
  pushUps: 28,
  run5k: 8,
  lSit: 22,
  deadlift: 15,
  muscleUp: 9,
  plank: 54,
}

export function Challenges() {
  const t = useTranslations("challenges")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="challenges" className="py-24 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Challenge cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challengeKeys.map((key) => {
            const difficulty = t(`items.${key}.difficulty`) as "BEGINNER" | "ATHLETE" | "ELITE"
            const isHovered = hoveredCard === key
            
            return (
              <div
                key={key}
                className={`
                  relative bg-card border border-border p-6 transition-all duration-300 cursor-pointer group
                  ${isHovered ? "border-primary bg-primary/5 scale-[1.02]" : "hover:border-muted-foreground/50"}
                `}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Front content */}
                <div className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                  {/* Icon */}
                  <div className="text-primary mb-4">
                    {challengeIcons[key]}
                  </div>
                  
                  {/* Challenge name */}
                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold text-foreground mb-2">
                    {t(`items.${key}.name`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(`items.${key}.description`)}
                  </p>
                  
                  {/* Difficulty badge and checkbox */}
                  <div className="flex items-center justify-between">
                    <span className={`
                      text-xs font-bold px-3 py-1 tracking-wider
                      ${difficulty === "BEGINNER" ? "bg-green-500/20 text-green-400" : ""}
                      ${difficulty === "ATHLETE" ? "bg-primary/20 text-primary" : ""}
                      ${difficulty === "ELITE" ? "bg-red-500/20 text-red-400" : ""}
                    `}>
                      {difficulty}
                    </span>
                    <div className="text-muted-foreground">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Hover content */}
                <div className={`
                  absolute inset-0 flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground
                  transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}>
                  <div className="mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <p className="text-center font-bold text-lg">
                    {completionPercentages[key]}% {t("ofAthletes")}
                  </p>
                  <p className="text-center text-sm opacity-80 mt-1">
                    {t("completed")}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom stats and CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border p-6 md:p-8">
            <p className="text-muted-foreground mb-4">
              <span className="text-foreground font-bold">{t("yourCompleted")}</span>
              <span className="text-primary font-bold text-2xl mx-2">0</span>
              {t("of10")}
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              {t("averageAthlete")} <span className="text-foreground font-bold">3</span>. {t("top10")} <span className="text-foreground font-bold">8+</span>
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 font-bold tracking-wide hover:bg-primary/90 transition-colors">
              {t("trackProgress")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
