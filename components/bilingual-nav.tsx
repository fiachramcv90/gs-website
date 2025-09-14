"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const navigationItems = [
  {
    irish: "Baile",
    english: "Home",
    href: "/",
    subItems: [
      { irish: "Fáilte", english: "Welcome", href: "/#welcome" },
      { irish: "Fís", english: "Vision", href: "/#vision" },
    ],
  },
  {
    irish: "Ár Ranganna",
    english: "Our Classes",
    href: "/classes",
    subItems: [
      { irish: "Naí-Aonad", english: "Nursery Unit", href: "/classes/nursery" },
      { irish: "Rang 1", english: "Year 1", href: "/classes/year-1" },
      { irish: "Rang 2", english: "Year 2", href: "/classes/year-2" },
      { irish: "Rang 3", english: "Year 3", href: "/classes/year-3" },
      { irish: "Rang 4", english: "Year 4", href: "/classes/year-4" },
      { irish: "Rang 5", english: "Year 5", href: "/classes/year-5" },
      { irish: "Rang 6", english: "Year 6", href: "/classes/year-6" },
      { irish: "Rang 7", english: "Year 7", href: "/classes/year-7" },
    ],
  },
  {
    irish: "Scoileanna Sínte",
    english: "Extended Schools",
    href: "/extended-schools",
    subItems: [
      { irish: "Cumann Bricfeasta", english: "Breakfast Club", href: "/extended-schools/breakfast-club" },
      { irish: "Peil", english: "Football", href: "/extended-schools/football" },
      { irish: "Cumann Ealaíne", english: "Art Club", href: "/extended-schools/art-club" },
      { irish: "Cumann TFC", english: "ICT Club", href: "/extended-schools/ict-club" },
      { irish: "Cumann Mata", english: "Maths Club", href: "/extended-schools/maths-club" },
      { irish: "Ionad Uíbh Eachach", english: "Iveagh Centre", href: "/extended-schools/iveagh-centre" },
    ],
  },
  {
    irish: "Imeachtaí",
    english: "Events",
    href: "/events",
  },
  {
    irish: "Féilire",
    english: "Calendar",
    href: "/calendar",
  },
  {
    irish: "Nuacht is Déanaí",
    english: "Latest News",
    href: "/news",
  },
  {
    irish: "Comhairle Scoile",
    english: "School Council",
    href: "/school-council",
    subItems: [
      { irish: "Cé muid", english: "Who we are", href: "/school-council/who-we-are" },
      { irish: "Obair", english: "Work", href: "/school-council/work" },
      { irish: "Spriocanna Gearrthéarmacha", english: "Short-term Goals", href: "/school-council/short-term-goals" },
      { irish: "Spriocanna Fadtéarmacha", english: "Long-term Goals", href: "/school-council/long-term-goals" },
    ],
  },
  {
    irish: "Virtual Office",
    english: "Virtual Office",
    href: "/virtual-office",
  },
  {
    irish: "Teagmháil",
    english: "Contact",
    href: "/contact",
  },
]

export function BilingualNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">G</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">Gaelscoil na bhFál</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground">
                          <div className="text-center">
                            <div className="text-xs">{item.irish}</div>
                            <div className="text-xs opacity-80">{item.english}</div>
                          </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {item.subItems.map((subItem, subIndex) => (
                              <NavigationMenuLink key={subIndex} asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.irish}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.english}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="text-center">
                            <div className="text-xs">{item.irish}</div>
                            <div className="text-xs opacity-80">{item.english}</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div>{item.irish}</div>
                    <div className="text-xs opacity-80">{item.english}</div>
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-1 rounded-md text-xs hover:bg-primary-foreground/10 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div>{subItem.irish}</div>
                          <div className="opacity-70">{subItem.english}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
