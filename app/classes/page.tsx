import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, Star } from "lucide-react"
import Link from "next/link"
import { classesData } from "@/lib/class-data"

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
          {classesData.map((classInfo, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${classInfo.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">{classInfo.ageRange}</span>
                </div>
                <CardTitle className="text-lg">
                  <div>{classInfo.className}</div>
                  <div className="text-sm font-normal text-muted-foreground">{classInfo.english}</div>
                </CardTitle>
                <CardDescription>
                  {classInfo.teacher && `Múinteoir: ${classInfo.teacher}`}
                  {classInfo.teachers && `Múinteoirí: ${classInfo.teachers.join(', ')}`}
                </CardDescription>
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
