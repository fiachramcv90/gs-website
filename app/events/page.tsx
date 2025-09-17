import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    titleIrish: "Dráma na Nollag",
    titleEnglish: "Christmas Play",
    date: "2024-12-15",
    time: "14:00",
    location: "Halla na Scoile / School Hall",
    description: "Our annual Christmas performance featuring all classes",
    category: "Performance",
    audience: "Tuismitheoirí agus Teaghlaigh / Parents and Families",
  },
  {
    id: 2,
    titleIrish: "Geal sa Gheimhreadh",
    titleEnglish: "Ditch the Dark",
    date: "2024-11-20",
    time: "09:00",
    location: "Clós na Scoile / School Playground",
    description: "Outdoor activities to brighten up the winter months",
    category: "Wellness",
    audience: "Gach Rang / All Classes",
  },
  {
    id: 3,
    titleIrish: "Lá na Stocaí Corra",
    titleEnglish: "Odd Socks Day",
    date: "2024-11-25",
    time: "09:00",
    location: "Ar fud na Scoile / Throughout School",
    description: "Celebrating diversity and anti-bullying awareness",
    category: "Awareness",
    audience: "Gach Dalta / All Students",
  },
  {
    id: 4,
    titleIrish: "Iontas an Gheimhridh",
    titleEnglish: "Winter Wonderland",
    date: "2024-12-20",
    time: "10:00",
    location: "Seomraí Ranga / Classrooms",
    description: "Winter-themed activities and crafts for all classes",
    category: "Educational",
    audience: "Gach Rang / All Classes",
  },
]

const eventCategories = [
  { name: "Performance", color: "bg-purple-100 text-purple-800" },
  { name: "Educational", color: "bg-blue-100 text-blue-800" },
  { name: "Wellness", color: "bg-green-100 text-green-800" },
  { name: "Awareness", color: "bg-orange-100 text-orange-800" },
  { name: "Community", color: "bg-pink-100 text-pink-800" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Imeachtaí / Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with all the exciting events happening at Gaelscoil na bhFál throughout the school year.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Events List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Imeachtaí le Teacht / Upcoming Events</h2>
              <Button asChild>
                <Link href="/calendar">Féilire / Calendar View</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          <div>{event.titleIrish}</div>
                          <div className="text-lg font-normal text-muted-foreground">{event.titleEnglish}</div>
                        </CardTitle>
                        <CardDescription className="text-base">{event.description}</CardDescription>
                      </div>
                      <Badge className={eventCategories.find((cat) => cat.name === event.category)?.color}>
                        {event.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString("ga-IE")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{event.audience}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Catagóirí / Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {eventCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Badge variant="outline" className={category.color}>
                        {category.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Naisc Thapa / Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/calendar">Féilire / Calendar</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/news">Nuacht / News</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/virtual-office">Virtual Office</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact for Events */}
            <Card>
              <CardHeader>
                <CardTitle>Ceist faoi Imeacht? / Event Question?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have questions about any upcoming events, please don't hesitate to contact us.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Teagmháil / Contact</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
