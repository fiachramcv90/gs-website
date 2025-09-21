"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

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
  const [expandedMenus, setExpandedMenus] = useState<Record<number, boolean>>({})
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setExpandedMenus({})
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Focus management - focus first menu item when opened
      const firstMenuItem = mobileMenuRef.current?.querySelector('a')
      firstMenuItem?.focus()
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Close menu when clicking outside (but not on the button itself)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const navContainer = document.getElementById('mobile-navigation')
      const menuButton = document.querySelector('[aria-controls="mobile-navigation"]')
      
      if (navContainer && !navContainer.contains(target) && !menuButton?.contains(target)) {
        setIsOpen(false)
        setExpandedMenus({})
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleSubmenu = (index: number) => {
    setExpandedMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logos/logo-40x40.png"
                  alt="Suaitheántas Gaelscoil na bhFál / Gaelscoil na bhFál Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-full"
                  priority
                />
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
              size="lg"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10 p-3 min-h-[44px] min-w-[44px]"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          id="mobile-navigation"
          ref={mobileMenuRef}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10">
            {navigationItems.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.subItems ? (
                  // Menu item with submenu
                  <div>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 transition-all duration-200 min-h-[44px]"
                      aria-expanded={expandedMenus[index] || false}
                      aria-controls={`submenu-${index}`}
                    >
                      <div className="text-left">
                        <div className="text-primary-foreground">{item.irish}</div>
                        <div className="text-xs text-primary-foreground/80">{item.english}</div>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        {expandedMenus[index] ? (
                          <ChevronUp className="h-4 w-4 text-primary-foreground/80" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-primary-foreground/80" aria-hidden="true" />
                        )}
                      </div>
                    </button>
                    
                    {/* Submenu with smooth animation */}
                    <div 
                      id={`submenu-${index}`}
                      className={`ml-4 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedMenus[index] ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                      role="menu"
                      aria-label={`${item.irish} submenu`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 rounded-md text-sm hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 transition-all duration-200 min-h-[44px] flex items-center"
                          onClick={() => {
                            setIsOpen(false)
                            setExpandedMenus({})
                          }}
                          role="menuitem"
                        >
                          <div>
                            <div className="text-primary-foreground">{subItem.irish}</div>
                            <div className="text-xs text-primary-foreground/70">{subItem.english}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular menu item
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 transition-all duration-200 min-h-[44px] flex items-center"
                    onClick={() => {
                      setIsOpen(false)
                      setExpandedMenus({})
                    }}
                    role="menuitem"
                  >
                    <div>
                      <div className="text-primary-foreground">{item.irish}</div>
                      <div className="text-xs text-primary-foreground/80">{item.english}</div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
