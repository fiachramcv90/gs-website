import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const documents = [
  {
    title: "Polasaí Freastail",
    titleEn: "Attendance Policy",
    type: "PDF",
    size: "245 KB",
    updated: "2024-03-01",
  },
  {
    title: "Foirm Chead Taistil",
    titleEn: "Permission Slip Form",
    type: "PDF",
    size: "180 KB",
    updated: "2024-02-15",
  },
  {
    title: "Treoir Éide Scoile",
    titleEn: "School Uniform Guidelines",
    type: "PDF",
    size: "320 KB",
    updated: "2024-01-20",
  },
  {
    title: "Clár Scoile 2024-2025",
    titleEn: "School Calendar 2024-2025",
    type: "PDF",
    size: "450 KB",
    updated: "2024-01-10",
  },
]

const quickLinks = [
  {
    title: "Íocaíochtaí Ar Líne",
    titleEn: "Online Payments",
    description: "Íoc as turais scoile agus gníomhaíochtaí",
    descriptionEn: "Pay for school trips and activities",
    icon: "💳",
    link: "/payments",
  },
  {
    title: "Tinreamh Daltaí",
    titleEn: "Student Attendance",
    description: "Seiceáil tinreamh do pháiste",
    descriptionEn: "Check your child's attendance",
    icon: "📊",
    link: "/attendance",
  },
  {
    title: "Dul Chun Cinn Acadúil",
    titleEn: "Academic Progress",
    description: "Féach ar thuairiscí agus grádanna",
    descriptionEn: "View reports and grades",
    icon: "📈",
    link: "/progress",
  },
  {
    title: "Imeachtaí na Scoile",
    titleEn: "School Events",
    description: "Clárú d'imeachtaí agus gníomhaíochtaí",
    descriptionEn: "Register for events and activities",
    icon: "🎉",
    link: "/events",
  },
]

export default function VirtualOfficePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Oifig Fhíorúil / Virtual Office</h1>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Rochtain ar gach rud atá uait ó oifig na scoile - 24/7 / Access everything you need from the school office -
            24/7
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              <Card className="border-border hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{link.icon}</div>
                  <CardTitle className="text-primary text-lg">{link.title}</CardTitle>
                  <p className="text-primary/80 font-medium text-sm">{link.titleEn}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-1">{link.description}</p>
                  <p className="text-gray-500 text-sm">{link.descriptionEn}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Cáipéisí / Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <FileText className="w-6 h-6 text-primary/80" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">{doc.title}</h3>
                        <p className="text-primary/80 text-sm mb-2">{doc.titleEn}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <Badge variant="outline" className="text-xs">
                            {doc.type}
                          </Badge>
                          <span>{doc.size}</span>
                          <span>Nuashonraithe / Updated: {doc.updated}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 text-primary/80 hover:bg-card rounded-lg transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Sonraí Teagmhála / Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary/80" />
                <div>
                  <p className="font-medium text-gray-800">028 9077 1234</p>
                  <p className="text-sm text-gray-500">Oifig Phríomhúil / Main Office</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary/80" />
                <div>
                  <p className="font-medium text-gray-800">info@gaelscoilnabhfal.ie</p>
                  <p className="text-sm text-gray-500">Ríomhphost Ginearálta / General Email</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary/80" />
                <div>
                  <p className="font-medium text-gray-800">123 Bóthar na Fáile</p>
                  <p className="text-sm text-gray-500">Béal Feirste, BT1 2AB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Uaireanta Oscailte / Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Luan - Aoine / Monday - Friday</span>
                <span className="text-primary/80 font-medium">8:30am - 4:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Am Lóin / Lunch Break</span>
                <span className="text-primary/80 font-medium">12:30pm - 1:30pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Deireadh Seachtaine / Weekend</span>
                <span className="text-gray-500">Dúnta / Closed</span>
              </div>
              <div className="mt-4 p-3 bg-card rounded-lg">
                <p className="text-sm text-primary">
                  <strong>Nóta:</strong> Déan teagmháil roimh ré le haghaidh coinní /<strong>Note:</strong> Please
                  contact in advance for appointments
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Information */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              Faisnéis Éigeandála / Emergency Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Uimhreacha Éigeandála / Emergency Numbers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Príomhoide / Principal:</span>
                    <span className="font-medium">028 9077 1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leas-Phríomhoide / Vice Principal:</span>
                    <span className="font-medium">028 9077 1235</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Altra Scoile / School Nurse:</span>
                    <span className="font-medium">028 9077 1236</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Nósanna Imeachta / Procedures</h4>
                <ul className="text-sm space-y-1">
                  <li>• Glaoch ar an scoil ar dtús / Call the school first</li>
                  <li>• Má tá gá le cúram leighis / If medical care needed</li>
                  <li>• Glaoigh 999 i gcás éigeandála / Call 999 in emergency</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
