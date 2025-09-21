import { BilingualNav } from "@/components/bilingual-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, BookOpen, Award, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BilingualNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Fáilte go Gaelscoil na bhFál
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">Welcome to Gaelscoil na bhFál</p>
            <p className="text-lg text-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Fostering bilingual education and celebrating Irish culture in a nurturing environment where every child
              thrives academically, socially, and culturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#welcome">Tuilleadh Eolais / Learn More</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Déan Teagmháil / Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/hero-playground.jpg"
              alt="Páistí ag súgradh i gclós na scoile ag Gaelscoil na bhFál / Children playing in the school playground at Gaelscoil na bhFál"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Fáilte / Welcome</h2>
              <div className="space-y-4 text-foreground">
                <p className="text-lg">
                  Fáilte go dtí suíomh gréasáin Gaelscoil na bhFál. Is scoil lán-Ghaeilge muid atá suite i gcroílár na
                  pobal.
                </p>
                <p className="text-lg">
                  Welcome to the Gaelscoil na bhFál website. We are a full Irish-language school located at the heart of
                  our community.
                </p>
                <p>
                  Our school is a happy and hardworking environment where children are at the center of everything we
                  do. We provide high-quality bilingual education that celebrates Irish culture while preparing students
                  for their future.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Pobal / Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Strong community bonds and family involvement</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Oideachas / Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Excellence in bilingual learning and development</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Cultúr / Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Celebrating and preserving Irish heritage</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Cúram / Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Nurturing environment for every child</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Ár bhFís / Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating confident, bilingual citizens who are proud of their Irish heritage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Sármhaitheas / Excellence</CardTitle>
                <CardDescription>
                  Striving for the highest standards in education and personal development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We believe that each child can succeed through experiencing quality education that challenges and
                  supports them.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Dátheangachas / Bilingualism</CardTitle>
                <CardDescription>Developing fluency in both Irish and English languages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Our immersive Irish-language environment creates confident bilingual speakers ready for the modern
                  world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Comhpháirtíocht / Partnership</CardTitle>
                <CardDescription>Working together with families and the wider community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Strong partnerships between school, home, and community create the best outcomes for our children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Naisc Thapa / Quick Links</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Féilire / Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">View upcoming events and important dates</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/calendar">Féach / View</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Ranganna / Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Information about our class structure and curriculum
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/classes">Tuilleadh / More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Nuacht / News</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Latest news and updates from our school</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/news">Léigh / Read</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Virtual Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Access forms, policies, and important resources</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/virtual-office">Rochtain / Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Gaelscoil na bhFál</h3>
              <p className="text-sm opacity-90">Ag cothú oideachas dátheangach agus ag ceiliúradh cultúr na hÉireann</p>
              <p className="text-sm opacity-90 mt-2">Fostering bilingual education and celebrating Irish culture</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Naisc Thapa / Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/classes" className="block hover:text-secondary transition-colors">
                  Ár Ranganna / Our Classes
                </Link>
                <Link href="/events" className="block hover:text-secondary transition-colors">
                  Imeachtaí / Events
                </Link>
                <Link href="/news" className="block hover:text-secondary transition-colors">
                  Nuacht / News
                </Link>
                <Link href="/contact" className="block hover:text-secondary transition-colors">
                  Teagmháil / Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Teagmháil / Contact</h3>
              <div className="text-sm space-y-2 opacity-90">
                <p>Gaelscoil na bhFál</p>
                <p>Belfast, Northern Ireland</p>
                <p>Fón / Phone: [Phone Number]</p>
                <p>Ríomhphost / Email: [Email Address]</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 Gaelscoil na bhFál. Gach ceart ar cosaint / All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
