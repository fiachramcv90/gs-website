import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Phone, Activity } from "lucide-react"
import Link from "next/link"
import { extendedSchoolsData } from "@/lib/extended-schools-data"

export default function ExtendedSchoolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Scoileanna Sínte / Extended Schools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="block mb-2">
              Tairiscint ghníomhaíochtaí breise do pháistí na scoile chun a scileanna agus a suimeanna a fhorbairt.
            </span>
            <span className="block text-lg opacity-80">
              Offering additional activities for school children to develop their skills and interests.
            </span>
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {extendedSchoolsData.map((activity, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${activity.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Activity className="h-6 w-6 text-primary" />
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">
                  <div>{activity.name.irish}</div>
                  <div className="text-sm font-normal text-muted-foreground">{activity.name.english}</div>
                </CardTitle>
                <CardDescription className="text-sm">
                  <div className="mb-1">{activity.description.irish}</div>
                  <div className="text-xs opacity-80">{activity.description.english}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <div>
                      <div>{activity.schedule.irish}</div>
                      <div className="text-xs opacity-80">{activity.schedule.english}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <div>
                      <div>{activity.ageGroups.irish}</div>
                      <div className="text-xs opacity-80">{activity.ageGroups.english}</div>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/extended-schools/${activity.slug}`}>
                    Tuilleadh Eolais / Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Gníomhaíochtaí / Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Tá réimse leathan gníomhaíochtaí ar fáil do pháistí na scoile.
              </p>
              <p className="text-xs text-muted-foreground opacity-80">
                A wide range of activities are available for school children.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Cláru / Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Tá gá le clárú roimh ré do na gníomhaíochtaí go léir.
              </p>
              <p className="text-xs text-muted-foreground opacity-80">
                Pre-registration is required for all activities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Teagmháil / Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Déan teagmháil leis an oifig le haghaidh tuilleadh eolais.
              </p>
              <p className="text-xs text-muted-foreground opacity-80">
                Contact the office for more information.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Tuilleadh Eolais / More Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <span className="block mb-2">
                  Má tá suim agat i gceann ar bith de na gníomhaíochtaí seo, déan teagmháil leis an scoil.
                </span>
                <span className="block text-sm opacity-80">
                  If you are interested in any of these activities, please contact the school.
                </span>
              </p>
              <Button asChild>
                <Link href="/contact">
                  Teagmháil / Contact Us
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}