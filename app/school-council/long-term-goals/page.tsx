import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Eye, Building2, Heart } from "lucide-react"
import Link from "next/link"
import { getCouncilPageBySlug } from "@/lib/school-council-data"
import { notFound } from "next/navigation"

export default function LongTermGoalsPage() {
  const pageData = getCouncilPageBySlug("long-term-goals")
  
  if (!pageData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/school-council" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ar Ais / Back
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            <div>{pageData.title.irish}</div>
            <div className="text-2xl text-muted-foreground">{pageData.title.english}</div>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-base mb-2">{pageData.description.irish}</p>
            <p className="text-sm text-muted-foreground">{pageData.description.english}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {pageData.sections.map((section, index) => {
            const icons = [Eye, Building2, Heart];
            const IconComponent = icons[index] || Eye;
            
            return (
              <Card key={index} className={pageData.color}>
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <IconComponent className="h-6 w-6 mr-3" />
                    <div>
                      <div>{section.heading.irish}</div>
                      <div className="text-base font-normal text-muted-foreground">
                        {section.heading.english}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {section.content.irish.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-1">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-base">{item}</p>
                            <p className="text-sm text-muted-foreground">
                              {section.content.english[itemIndex]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Navigation to Other Council Pages */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Tuilleadh Eolais / More Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link href="/school-council/who-we-are" className="text-center">
                    <div className="space-y-1">
                      <div className="font-medium">Cé muid</div>
                      <div className="text-xs text-muted-foreground">Who we are</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link href="/school-council/work" className="text-center">
                    <div className="space-y-1">
                      <div className="font-medium">Obair</div>
                      <div className="text-xs text-muted-foreground">Work</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4">
                  <Link href="/school-council/short-term-goals" className="text-center">
                    <div className="space-y-1">
                      <div className="font-medium">Spriocanna Gearrthéarmacha</div>
                      <div className="text-xs text-muted-foreground">Short-term Goals</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Main Council Page */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/school-council">
              Ar Ais chuig Príomhleathanach na Comhairle / Back to Main Council Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}