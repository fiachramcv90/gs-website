import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, Star } from "lucide-react"
import Link from "next/link"

const classes = [
  {
    irish: "Naí-Aonad",
    english: "Nursery Unit",
    slug: "nursery",
    description: "Our youngest learners begin their Irish language journey",
    ageRange: "3-4 years",
    color: "bg-red-50 border-red-200",
  },
  {
    irish: "Rang 1",
    english: "Year 1",
    slug: "year-1",
    description: "Foundation year building confidence in Irish",
    ageRange: "4-5 years",
    color: "bg-orange-50 border-orange-200",
  },
  {
    irish: "Rang 2",
    english: "Year 2",
    slug: "year-2",
    description: "Developing reading and writing skills",
    ageRange: "5-6 years",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    irish: "Rang 3",
    english: "Year 3",
    slug: "year-3",
    description: "Building fluency and confidence",
    ageRange: "6-7 years",
    color: "bg-green-50 border-green-200",
  },
  {
    irish: "Rang 4",
    english: "Year 4",
    slug: "year-4",
    description: "Expanding vocabulary and comprehension",
    ageRange: "7-8 years",
    color: "bg-blue-50 border-blue-200",
  },
  {
    irish: "Rang 5",
    english: "Year 5",
    slug: "year-5",
    description: "Advanced language skills development",
    ageRange: "8-9 years",
    color: "bg-indigo-50 border-indigo-200",
  },
  {
    irish: "Rang 6",
    english: "Year 6",
    slug: "year-6",
    description: "Preparing for transition to secondary school",
    ageRange: "9-10 years",
    color: "bg-purple-50 border-purple-200",
  },
  {
    irish: "Rang 7",
    english: "Year 7",
    slug: "year-7",
    description: "Final year with focus on independence",
    ageRange: "10-11 years",
    color: "bg-pink-50 border-pink-200",
  },
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Ár Ranganna / Our Classes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our class structure from Naí-Aonad through to Rang 7, where every child develops their Irish
            language skills in a supportive environment.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {classes.map((classInfo, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${classInfo.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">{classInfo.ageRange}</span>
                </div>
                <CardTitle className="text-lg">
                  <div>{classInfo.irish}</div>
                  <div className="text-sm font-normal text-muted-foreground">{classInfo.english}</div>
                </CardTitle>
                <CardDescription>{classInfo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/classes/${classInfo.slug}`}>Tuilleadh Eolais / Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Téamaí na dTéarmaí / Term Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Each class follows structured themes throughout the school year, integrating Irish culture and language
                learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Foireann / Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our dedicated teachers are qualified in Irish-medium education and passionate about bilingual learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Acmhainní / Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access useful websites, learning materials, and important information for each class level.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
