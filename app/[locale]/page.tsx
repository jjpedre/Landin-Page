import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Categories } from "@/components/landing/categories"
import { Challenges } from "@/components/landing/challenges"
import { Programs } from "@/components/landing/programs"
import { Ranking } from "@/components/landing/ranking"
import { Features } from "@/components/landing/features"
import { ForCenters } from "@/components/landing/for-centers"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Challenges />
      <Programs />
      <Ranking />
      <Features />
      <ForCenters />
      <CTA />
      <Footer />
    </main>
  )
}
