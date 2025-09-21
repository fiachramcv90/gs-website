import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Phone, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { getActivityBySlug } from "@/lib/extended-schools-data"
import { notFound } from "next/navigation"

export default function IctClubPage() {
  const activity = getActivityBySlug("ict-club")
  
  if (!activity) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/extended-schools" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ar Ais / Back
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            <div>{activity.name.irish}</div>
            <div className="text-2xl text-muted-foreground">{activity.name.english}</div>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Description Card */}
          <div className="lg:col-span-2">
            <Card className={activity.color}>
              <CardHeader>
                <CardTitle>Cur Síos / Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-base mb-2">{activity.description.irish}</p>
                  <p className="text-sm text-muted-foreground">{activity.description.english}</p>
                </div>
                
                {activity.additionalInfo && (
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Eolas Breise / Additional Information</h3>
                    <div className="space-y-3">
                      {activity.additionalInfo.irish.map((info, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm">{info}</div>
                            <div className="text-xs text-muted-foreground">
                              {activity.additionalInfo?.english[index]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6">
            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Amchlár / Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-medium">{activity.schedule.irish}</p>
                  <p className="text-sm text-muted-foreground">{activity.schedule.english}</p>
                </div>
              </CardContent>
            </Card>

            {/* Age Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Aosgrúpaí / Age Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-medium">{activity.ageGroups.irish}</p>
                  <p className="text-sm text-muted-foreground">{activity.ageGroups.english}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Teagmháil / Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">{activity.contact.irish}</p>
                    <p className="text-sm text-muted-foreground">{activity.contact.english}</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Téigh i dTeagmháil / Get in Touch
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Activities */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/extended-schools">
              Féach ar Ghníomhaíochtaí Eile / View Other Activities
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}