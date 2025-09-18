import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Image from "next/image"

const staffContacts = [
  {
    name: "Orla",
    role: "Príomhoide / Principal",
    email: "principal@gaelscoilnabhfal.ie",
    phone: "028 9077 1234",
    image: "/images/staff/principal-placeholder.svg",
  },
  {
    name: "Sean",
    role: "Leas-Phríomhoide / Vice Principal",
    email: "vicepricipal@gaelscoilnabhfal.ie",
    phone: "028 9077 1235",
    image: "/images/staff/vice-principal-placeholder.svg",
  },
  {
    name: "Anna",
    role: "Rúnaí / Secretary",
    email: "runai@gaelscoilnabhfal.ie",
    phone: "028 9077 1236",
    image: "/images/staff/secretary-placeholder.svg",
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Déan Teagmháil Linn / Contact Us</h1>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Táimid anseo chun cabhrú leat. Déan teagmháil linn ar bhealach ar bith is fearr leat. / We're here to help
            you. Contact us in whatever way works best for you.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Seol Teachtaireacht / Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ainm / Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="D'ainm iomlán / Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ríomhphost / Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="do.ríomhphost@sampla.ie"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Uimhir Ghutháin / Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="028 9077 1234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ábhar / Subject *</label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Roghnaigh ábhar / Choose subject</option>
                    <option value="general">Fiosrúchán Ginearálta / General Inquiry</option>
                    <option value="admissions">Iontrálaithe / Admissions</option>
                    <option value="academic">Ceisteanna Acadúla / Academic Questions</option>
                    <option value="events">Imeachtaí / Events</option>
                    <option value="other">Eile / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teachtaireacht / Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Scríobh do theachtaireacht anseo... / Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Seol Teachtaireacht / Send Message
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Ár Seoladh / Our Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-800">Gaelscoil na bhFál</p>
                  <p className="text-gray-600">
                    123 Bóthar na Fáile
                    <br />
                    Béal Feirste, BT1 2AB
                    <br />
                    Tuaisceart Éireann / Northern Ireland
                  </p>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-muted text-primary rounded-md hover:bg-card transition-colors">
                      Oscail i Google Maps / Open in Google Maps
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  Glaoigh Orainn / Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
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
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Uaireanta Oscailte / Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Luan - Aoine / Mon - Fri</span>
                    <span className="text-primary/80 font-medium">8:30am - 4:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Am Lóin / Lunch</span>
                    <span className="text-primary/80 font-medium">12:30pm - 1:30pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Satharn & Domhnach / Sat & Sun</span>
                    <span className="text-gray-500">Dúnta / Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Foireann na Scoile / School Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffContacts.map((staff, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    src={staff.image || "/images/staff/principal-placeholder.svg"}
                    alt={`${staff.name} - ${staff.role}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <CardTitle className="text-primary text-lg">{staff.name}</CardTitle>
                  <p className="text-primary/80 text-sm">{staff.role}</p>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-primary/80" />
                    <a href={`mailto:${staff.email}`} className="text-primary/80 hover:text-primary truncate">
                      {staff.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-primary/80" />
                    <a href={`tel:${staff.phone}`} className="text-primary/80 hover:text-primary">
                      {staff.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-primary text-center">
              Ceisteanna Coitianta / Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Conas is féidir liom mo pháiste a chlárú? / How can I register my child?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Déan teagmháil leis an oifig ag 028 9077 1234 nó seol ríomhphost chuig
                    admissions@gaelscoilnabhfal.ie
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Cad iad na huaireanta scoile? / What are the school hours?
                  </h4>
                  <p className="text-gray-600 text-sm">9:00am - 3:15pm, Luan go hAoine / Monday to Friday</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    An bhfuil seirbhís bus ann? / Is there a bus service?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tá, soláthraímid seirbhís bus do limistéir áirithe. Déan teagmháil linn le haghaidh sonraí.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Cad faoi bhéilí scoile? / What about school meals?
                  </h4>
                  <p className="text-gray-600 text-sm">Tairgeann ár gcistineach béilí blasta agus folláine gach lá.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
