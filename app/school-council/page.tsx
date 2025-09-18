import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Calendar } from "lucide-react"
import { BilingualNav } from "@/components/bilingual-nav"
import Image from "next/image"

const councilMembers = [
  {
    name: "Aoife Ní Mhurchú",
    role: "Cathaoirleach / Chairperson",
    class: "Rang 6",
    image: "/images/staff/student-council-chairperson.svg",
  },
  {
    name: "Cian Ó Briain",
    role: "Leas-Chathaoirleach / Vice-Chairperson",
    class: "Rang 6",
    image: "/images/staff/student-council-vice-chair.svg",
  },
  {
    name: "Síle Ní Dhomhnaill",
    role: "Rúnaí / Secretary",
    class: "Rang 5",
    image: "/images/staff/student-council-secretary.svg",
  },
  {
    name: "Tadhg Mac Gearailt",
    role: "Cisteoir / Treasurer",
    class: "Rang 5",
    image: "/images/staff/student-council-treasurer.svg",
  },
]

const initiatives = [
  {
    title: "Tionscnamh Timpeallachta",
    titleEn: "Environmental Initiative",
    description: "Ag obair chun ár scoil a dhéanamh níos glaise",
    descriptionEn: "Working to make our school greener",
    icon: "🌱",
    status: "Ar siúl / Ongoing",
  },
  {
    title: "Clós Súgartha Nua",
    titleEn: "New Playground Equipment",
    description: "Ag bailiú airgid do threalamh súgartha nua",
    descriptionEn: "Fundraising for new playground equipment",
    icon: "🎪",
    status: "Ag pleanáil / Planning",
  },
  {
    title: "Lá Cultúrtha",
    titleEn: "Cultural Day",
    description: "Ag eagrú lá speisialta chun ár gcultúr a cheiliúradh",
    descriptionEn: "Organizing a special day to celebrate our culture",
    icon: "🎭",
    status: "Críochnaithe / Completed",
  },
]

export default function SchoolCouncilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Comhairle na Scoile / School Council</h1>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Tugann ár gComhairle Scoile guth do na daltaí agus cabhrann siad le cinntí tábhachtacha a dhéanamh. / Our
            School Council gives students a voice and helps make important decisions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-border shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary mb-4">Ár Misean / Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 mb-4">"Ag obair le chéile chun ár scoil a fheabhsú do gach duine"</p>
            <p className="text-lg text-primary/80">"Working together to improve our school for everyone"</p>
          </CardContent>
        </Card>

        {/* Council Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Baill na Comhairle / Council Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/images/staff/student-council-chairperson.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-primary text-lg">{member.name}</CardTitle>
                  <Badge className="bg-muted text-primary mx-auto">{member.class}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-primary/80 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Tionscnaimh Reatha / Current Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{initiative.icon}</div>
                  <CardTitle className="text-primary text-center">{initiative.title}</CardTitle>
                  <p className="text-primary/80 text-center font-medium">{initiative.titleEn}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-2">{initiative.description}</p>
                  <p className="text-gray-500 mb-4">{initiative.descriptionEn}</p>
                  <Badge className="bg-muted text-primary">{initiative.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Get Involved */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Conas Páirt a Ghlacadh / How to Get Involved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Labhair le ball den chomhairle / Speak to a council member</li>
                <li>• Cuir do chuid smaointe isteach sa bhosca moltaí / Submit ideas to the suggestion box</li>
                <li>• Freastail ar chruinnithe poiblí / Attend public meetings</li>
                <li>• Seas san toghchán / Stand in elections</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Cruinnithe / Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cruinniú Míosúil / Monthly Meeting</span>
                  <Badge className="bg-muted text-primary">Céadaoin 1ú / 1st Wednesday</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Am / Time</span>
                  <span className="text-primary/80">12:30 - 1:00pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Áit / Location</span>
                  <span className="text-primary/80">Seomra na Comhairle / Council Room</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="border-border text-center">
          <CardHeader>
            <CardTitle className="text-primary">Déan Teagmháil / Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              An bhfuil smaoineamh agat don scoil? Déan teagmháil linn! / Do you have an idea for the school? Contact
              us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Seol Ríomhphost / Send Email
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-card transition-colors">
                Bosca Moltaí / Suggestion Box
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
