import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const newsArticles = [
  {
    id: 1,
    title: "Seachtain na Gaeilge 2024",
    titleEn: "Irish Language Week 2024",
    excerpt: "Bhí seachtain iontach againn ag ceiliúradh ár dteanga dhúchais...",
    excerptEn: "We had a wonderful week celebrating our native language...",
    date: "2024-03-15",
    author: "Múinteoir Ní Dhomhnaill",
    category: "Cultúr",
    categoryEn: "Culture",
    image: "/images/events/irish-language-week-celebration.svg",
  },
  {
    id: 2,
    title: "Comórtas Peile na Scoileanna",
    titleEn: "Schools Football Competition",
    excerpt: "D'éirigh go hiontach lenár bhfoireann peile sa chomórtas...",
    excerptEn: "Our football team performed excellently in the competition...",
    date: "2024-03-10",
    author: "Múinteoir Ó Súilleabháin",
    category: "Spórt",
    categoryEn: "Sports",
    image: "/images/events/school-sports-football.svg",
  },
  {
    id: 3,
    title: "Tionscadal Eolaíochta na Rang 6",
    titleEn: "6th Class Science Project",
    excerpt: "Taispeáin na daltaí a gcuid tionscadal eolaíochta iontacha...",
    excerptEn: "Students showcased their amazing science projects...",
    date: "2024-03-05",
    author: "Múinteoir Mac Gearailt",
    category: "Eolaíocht",
    categoryEn: "Science",
    image: "/images/events/science-experiments-stem.svg",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <BilingualNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Nuacht na Scoile / School News</h1>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Coinnigh suas le dáta leis na scéalta is déanaí ón scoil / Stay up to date with the latest stories from our
            school
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden border-border shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={newsArticles[0].image || "/images/events/irish-language-week-celebration.svg"}
                  alt={`${newsArticles[0].title} / ${newsArticles[0].titleEn}`}
                  width={600}
                  height={300}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <Badge className="bg-muted text-primary mb-3">
                  {newsArticles[0].category} / {newsArticles[0].categoryEn}
                </Badge>
                <h2 className="text-2xl font-bold text-primary mb-3">{newsArticles[0].title}</h2>
                <h3 className="text-xl text-primary/80 mb-4">{newsArticles[0].titleEn}</h3>
                <p className="text-gray-600 mb-4">{newsArticles[0].excerpt}</p>
                <p className="text-gray-500 mb-4">{newsArticles[0].excerptEn}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsArticles[0].date}
                    <User className="w-4 h-4 ml-4 mr-2" />
                    {newsArticles[0].author}
                  </div>
                  <Link
                    href={`/news/${newsArticles[0].id}`}
                    className="flex items-center text-primary/80 hover:text-primary font-medium"
                  >
                    Léigh Tuilleadh / Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <Image 
                src={article.image || "/images/events/irish-language-week-celebration.svg"} 
                alt={`${article.title} / ${article.titleEn}`} 
                width={600} 
                height={300} 
                className="w-full h-48 object-cover" 
              />
              <CardHeader>
                <Badge className="bg-muted text-primary w-fit mb-2">
                  {article.category} / {article.categoryEn}
                </Badge>
                <CardTitle className="text-primary text-lg">{article.title}</CardTitle>
                <p className="text-primary/80 font-medium">{article.titleEn}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                <p className="text-gray-500 text-sm mb-4">{article.excerptEn}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <Link href={`/news/${article.id}`} className="text-primary/80 hover:text-primary font-medium">
                    Léigh / Read
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-primary">Liostáil Nuachta / Newsletter</CardTitle>
              <p className="text-primary/80">
                Faigh na nuachtáin is déanaí díreach chuig do ríomhphost / Get the latest news directly to your email
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Do sheoladh ríomhphoist / Your email"
                  className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Cláraigh / Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
