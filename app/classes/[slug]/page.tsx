import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Users, Calendar, ExternalLink, AlertCircle, Globe } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const classData = {
  nursery: {
    irish: "Naí-Aonad",
    english: "Nursery Unit",
    ageRange: "3-4 years",
    description:
      "Our youngest learners begin their exciting journey with the Irish language through play-based learning and exploration.",
    importantThings: [
      "Bring a healthy snack and water bottle daily",
      "School uniform required - green polo shirt and grey trousers/skirt",
      "Collection time is 11:30am for morning session, 2:30pm for afternoon session",
      "Please label all belongings clearly",
    ],
    termThemes: {
      autumn: "Mé Féin agus Mo Theaghlach / Myself and My Family",
      spring: "An Nádúr / Nature",
      summer: "Ár bPobal / Our Community",
    },
    usefulWebsites: [
      { name: "Bua na Cainte", url: "https://www.buanacainte.ie", description: "Irish language learning games" },
      { name: "Cúla4", url: "https://www.cula4.com", description: "Irish language TV for children" },
      { name: "Gaeilge i mo Phóca", url: "https://gaeilgeimophoca.ie", description: "Irish phrases and vocabulary" },
    ],
    staff: [
      {
        name: "Múinteoir Áine",
        role: "Príomhmhúinteoir / Head Teacher",
        qualifications: "B.Ed, Diploma in Irish Medium Education",
      },
      {
        name: "Múinteoir Seán",
        role: "Cúntóir Ranga / Classroom Assistant",
        qualifications: "NNEB, Irish Language Certificate",
      },
    ],
  },
  "year-1": {
    irish: "Rang 1",
    english: "Year 1",
    ageRange: "4-5 years",
    description:
      "Foundation year where children build confidence in Irish while developing essential literacy and numeracy skills.",
    importantThings: [
      "School starts at 9:00am, collection at 3:00pm",
      "Reading books sent home weekly - please read with your child",
      "PE kit needed on Tuesdays and Thursdays",
      "Homework folder checked daily",
    ],
    termThemes: {
      autumn: "Ag Tosú ar Scoil / Starting School",
      spring: "Ainmhithe agus a nÁitreabh / Animals and Their Homes",
      summer: "Ag Fás agus ag Athrú / Growing and Changing",
    },
    usefulWebsites: [
      { name: "Phonics Play", url: "https://www.phonicsplay.co.uk", description: "Phonics games and activities" },
      { name: "Mata Meabhrach", url: "https://www.matameabhrach.ie", description: "Mental maths in Irish" },
      { name: "Scéalta", url: "https://www.scealta.ie", description: "Irish stories for children" },
    ],
    staff: [
      {
        name: "Múinteoir Máire",
        role: "Múinteoir Ranga / Class Teacher",
        qualifications: "B.Ed Primary, M.Ed Irish Medium Education",
      },
      {
        name: "Múinteoir Pádraig",
        role: "Múinteoir Tacaíochta / Support Teacher",
        qualifications: "B.Ed, SEN Diploma",
      },
    ],
  },
  // Add more class data as needed...
}

export default function ClassPage({ params }: { params: { slug: string } }) {
  const classInfo = classData[params.slug as keyof typeof classData]

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
            <span>{classInfo.irish}</span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            {classInfo.irish} / {classInfo.english}
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{classInfo.ageRange}</Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">{classInfo.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Important Things */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Rudaí Tábhachtacha / Important Things to Remember</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {classInfo.importantThings.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Term Themes */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Téamaí na dTéarmaí / Term Themes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Fómhar / Autumn Term</h4>
                  <p className="text-sm text-muted-foreground">{classInfo.termThemes.autumn}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Earrach / Spring Term</h4>
                  <p className="text-sm text-muted-foreground">{classInfo.termThemes.spring}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Samhradh / Summer Term</h4>
                  <p className="text-sm text-muted-foreground">{classInfo.termThemes.summer}</p>
                </div>
              </CardContent>
            </Card>

            {/* Useful Websites */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle>Suíomhanna Úsáideacha / Useful Websites</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {classInfo.usefulWebsites.map((website, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{website.name}</h4>
                      <p className="text-sm text-muted-foreground">{website.description}</p>
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
                {classInfo.staff.map((member, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.qualifications}</p>
                    {index < classInfo.staff.length - 1 && <Separator />}
                  </div>
                ))}
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
