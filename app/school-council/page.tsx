import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Calendar } from "lucide-react"

const councilMembers = [
  {
    name: "Aoife Ní Mhurchú",
    role: "Cathaoirleach / Chairperson",
    class: "Rang 6",
    image: "/irish-school-girl-student-council-member.jpg",
  },
  {
    name: "Cian Ó Briain",
    role: "Leas-Chathaoirleach / Vice-Chairperson",
    class: "Rang 6",
    image: "/irish-school-boy-student-council-member.jpg",
  },
  {
    name: "Síle Ní Dhomhnaill",
    role: "Rúnaí / Secretary",
    class: "Rang 5",
    image: "/irish-school-girl-student-council-secretary.jpg",
  },
  {
    name: "Tadhg Mac Gearailt",
    role: "Cisteoir / Treasurer",
    class: "Rang 5",
    image: "/irish-school-boy-student-council-treasurer.jpg",
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Comhairle na Scoile / School Council</h1>
          <p className="text-lg text-emerald-600 max-w-3xl mx-auto">
            Tugann ár gComhairle Scoile guth do na daltaí agus cabhrann siad le cinntí tábhachtacha a dhéanamh. / Our
            School Council gives students a voice and helps make important decisions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 border-emerald-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-emerald-800 mb-4">Ár Misean / Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 mb-4">"Ag obair le chéile chun ár scoil a fheabhsú do gach duine"</p>
            <p className="text-lg text-emerald-600">"Working together to improve our school for everyone"</p>
          </CardContent>
        </Card>

        {/* Council Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-8">Baill na Comhairle / Council Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, index) => (
              <Card key={index} className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-emerald-800 text-lg">{member.name}</CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-800 mx-auto">{member.class}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-8">
            Tionscnaimh Reatha / Current Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">{initiative.icon}</div>
                  <CardTitle className="text-emerald-800 text-center">{initiative.title}</CardTitle>
                  <p className="text-emerald-600 text-center font-medium">{initiative.titleEn}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-2">{initiative.description}</p>
                  <p className="text-gray-500 mb-4">{initiative.descriptionEn}</p>
                  <Badge className="bg-emerald-100 text-emerald-800">{initiative.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Get Involved */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
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

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Cruinnithe / Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cruinniú Míosúil / Monthly Meeting</span>
                  <Badge className="bg-emerald-100 text-emerald-800">Céadaoin 1ú / 1st Wednesday</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Am / Time</span>
                  <span className="text-emerald-600">12:30 - 1:00pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Áit / Location</span>
                  <span className="text-emerald-600">Seomra na Comhairle / Council Room</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="border-emerald-200 text-center">
          <CardHeader>
            <CardTitle className="text-emerald-800">Déan Teagmháil / Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              An bhfuil smaoineamh agat don scoil? Déan teagmháil linn! / Do you have an idea for the school? Contact
              us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                Seol Ríomhphost / Send Email
              </button>
              <button className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors">
                Bosca Moltaí / Suggestion Box
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
