"use client"

import { BilingualNav } from "@/components/bilingual-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const months = [
  { irish: "Eanáir", english: "January", number: 0 },
  { irish: "Feabhra", english: "February", number: 1 },
  { irish: "Márta", english: "March", number: 2 },
  { irish: "Aibreán", english: "April", number: 3 },
  { irish: "Bealtaine", english: "May", number: 4 },
  { irish: "Meitheamh", english: "June", number: 5 },
  { irish: "Iúil", english: "July", number: 6 },
  { irish: "Lúnasa", english: "August", number: 7 },
  { irish: "Meán Fómhair", english: "September", number: 8 },
  { irish: "Deireadh Fómhair", english: "October", number: 9 },
  { irish: "Samhain", english: "November", number: 10 },
  { irish: "Nollaig", english: "December", number: 11 },
]

const sampleEvents: { [key: string]: { title: string; time: string; type: string; }[] } = {
  "2024-11-20": [
    {
      title: "Geal sa Gheimhreadh / Ditch the Dark",
      time: "09:00",
      type: "wellness",
    },
  ],
  "2024-11-25": [
    {
      title: "Lá na Stocaí Corra / Odd Socks Day",
      time: "09:00",
      type: "awareness",
    },
  ],
  "2024-12-15": [
    {
      title: "Dráma na Nollag / Christmas Play",
      time: "14:00",
      type: "performance",
    },
  ],
  "2024-12-20": [
    {
      title: "Iontas an Gheimhridh / Winter Wonderland",
      time: "10:00",
      type: "educational",
    },
  ],
}

export default function CalendarPage() {
  const currentDate = new Date()
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth())
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "performance":
        return "bg-purple-100 text-purple-800"
      case "educational":
        return "bg-blue-100 text-blue-800"
      case "wellness":
        return "bg-green-100 text-green-800"
      case "awareness":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (selectedMonth === 0) {
        setSelectedMonth(11)
        setSelectedYear(selectedYear - 1)
      } else {
        setSelectedMonth(selectedMonth - 1)
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0)
        setSelectedYear(selectedYear + 1)
      } else {
        setSelectedMonth(selectedMonth + 1)
      }
    }
  }

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="min-h-screen bg-background">
      <BilingualNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Féilire / Calendar</h1>
          <p className="text-xl text-muted-foreground">
            View all school events and important dates throughout the year
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {months[selectedMonth].irish} / {months[selectedMonth].english} {selectedYear}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {/* Day Headers */}
                  {["Dom", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"].map((day, index) => (
                    <div key={index} className="p-2 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}

                  {/* Empty days */}
                  {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="p-2 h-24"></div>
                  ))}

                  {/* Calendar days */}
                  {days.map((day) => {
                    const dateString = formatDate(selectedYear, selectedMonth, day)
                    const dayEvents = sampleEvents[dateString as keyof typeof sampleEvents] || []
                    const isToday =
                      day === currentDate.getDate() &&
                      selectedMonth === currentDate.getMonth() &&
                      selectedYear === currentDate.getFullYear()

                    return (
                      <div
                        key={day}
                        className={`p-2 h-24 border rounded-lg ${
                          isToday ? "bg-primary/10 border-primary" : "border-border hover:bg-muted/50"
                        } transition-colors`}
                      >
                        <div className={`text-sm font-medium mb-1 ${isToday ? "text-primary" : "text-foreground"}`}>
                          {day}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event, index) => (
                            <div
                              key={index}
                              className={`text-xs p-1 rounded text-center ${getEventTypeColor(event.type)}`}
                            >
                              {event.title.split(" / ")[0]}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-muted-foreground text-center">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Month Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Míonna / Months</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {months.map((month, index) => (
                    <Button
                      key={index}
                      variant={selectedMonth === index ? "default" : "outline"}
                      size="sm"
                      className="justify-start bg-transparent"
                      onClick={() => setSelectedMonth(index)}
                    >
                      <div className="text-left">
                        <div className="text-xs">{month.irish}</div>
                        <div className="text-xs opacity-70">{month.english}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Inniu / Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {currentDate.toLocaleDateString("ga-IE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="mt-4">
                  {sampleEvents[
                    formatDate(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
                  ] ? (
                    <div className="space-y-2">
                      {sampleEvents[
                        formatDate(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          currentDate.getDate(),
                        ) as keyof typeof sampleEvents
                      ]?.map((event, index) => (
                        <div key={index} className="p-2 border rounded-lg">
                          <div className="font-medium text-sm">{event.title}</div>
                          <div className="text-xs text-muted-foreground">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Gan imeachtaí / No events today</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Gníomhartha / Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/events">Gach Imeacht / All Events</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Cuir Imeacht Leis / Add Event</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
