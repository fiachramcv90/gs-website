import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Users, Calendar, ExternalLink, AlertCircle, Globe } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getClassBySlug, getAllClassSlugs } from "@/lib/class-data"

export async function generateStaticParams() {
  return getAllClassSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function ClassPage({ params }: { params: { slug: string } }) {
  const classInfo = getClassBySlug(params.slug)

  if (!classInfo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BilingualNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link href="/classes" className="hover:text-primary">
              Ár Ranganna / Our Classes
            </Link>
            <span>/</span>
            <span>{classInfo.className}</span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            {classInfo.className} / {classInfo.english}
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{classInfo.ageRange}</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Important Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Rudaí Tábhachtacha / Important Things to Remember</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Irish Information */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">As Gaeilge:</h4>
                    <ul className="space-y-2">
                      {classInfo.importantInfo.irish.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  {/* English Information */}
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3">In English:</h4>
                    <ul className="space-y-2">
                      {classInfo.importantInfo.english.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Term Topics */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Téamaí na dTéarmaí / Term Topics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {classInfo.terms.map((termInfo, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">Téarma {termInfo.term} / Term {termInfo.term}</h4>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-green-700">{termInfo.topic.irish}</p>
                      <p className="text-sm text-blue-600">{termInfo.topic.english}</p>
                    </div>
                    {index < classInfo.terms.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Useful Websites */}
            {classInfo.websites.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <CardTitle>Suíomhanna Úsáideacha / Useful Websites</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {classInfo.websites.map((website, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <h4 className="font-medium">{website.name}</h4>
                        {website.description && (
                          <p className="text-sm text-muted-foreground mt-1">{website.description}</p>
                        )}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={website.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Staff */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Foireann / Staff</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Teacher(s) */}
                <div className="space-y-2">
                  <h4 className="font-medium text-green-700">Múinteoir(í) / Teacher(s):</h4>
                  {classInfo.teacher && (
                    <p className="text-sm font-medium">{classInfo.teacher}</p>
                  )}
                  {classInfo.teachers && classInfo.teachers.map((teacher, index) => (
                    <p key={index} className="text-sm font-medium">{teacher}</p>
                  ))}
                </div>
                
                {/* Assistants */}
                {classInfo.assistants && classInfo.assistants.length > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-700">Cúntóir(í) / Classroom Assistant(s):</h4>
                      {classInfo.assistants.map((assistant, index) => (
                        <p key={index} className="text-sm font-medium">{assistant}</p>
                      ))}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gníomhartha Tapa / Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/calendar">Féilire / Calendar</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/virtual-office">Virtual Office</Link>
                </Button>
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