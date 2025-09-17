/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'
import { BilingualNav } from '@/components/bilingual-nav'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}))

describe('BilingualNav', () => {
  test('renders navigation with logo and menu button', () => {
    render(<BilingualNav />)
    
    // Check if logo is present
    expect(screen.getByText('Gaelscoil na bhFál')).toBeInTheDocument()
    
    // Check if mobile menu button is present
    expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument()
  })

  test('mobile menu button has proper accessibility attributes', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-navigation')
  })

  test('mobile menu button meets touch target requirements', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    const computedStyle = window.getComputedStyle(menuButton)
    
    // Check minimum 44px touch target (accounting for padding)
    expect(menuButton).toHaveClass('min-h-[44px]')
    expect(menuButton).toHaveClass('min-w-[44px]')
  })

  test('opens and closes mobile menu correctly', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    
    // Initially closed
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation menu' })).toHaveClass('max-h-0', 'opacity-0')
    
    // Open menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation menu' })).toHaveClass('max-h-[calc(100vh-4rem)]', 'opacity-100')
    
    // Close menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-label', 'Open navigation menu')
  })

  test('handles keyboard navigation correctly', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    
    // Open menu
    fireEvent.click(menuButton)
    
    // Test Escape key closes menu
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  test('displays bilingual navigation items correctly', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    // Check for bilingual menu items in mobile menu
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation menu' })
    expect(mobileNav).toBeInTheDocument()
    
    // Check for bilingual text within mobile navigation
    expect(screen.getAllByText('Baile').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Ár Ranganna').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Our Classes').length).toBeGreaterThan(0)
  })

  test('submenu functionality works correctly', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    // Focus on mobile menu only to avoid Radix Navigation Menu issues
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation menu' })
    expect(mobileNav).toBeInTheDocument()
    
    // Look for the submenu button within mobile navigation
    const submenuButtons = screen.getAllByRole('button').filter(button => 
      button.getAttribute('aria-controls')?.startsWith('submenu-') &&
      button.textContent?.includes('Ár Ranganna')
    )
    
    expect(submenuButtons.length).toBeGreaterThan(0)
    const classesSubmenuButton = submenuButtons[0]
    expect(classesSubmenuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Open submenu
    fireEvent.click(classesSubmenuButton)
    expect(classesSubmenuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Check submenu items are visible
    expect(screen.getByText('Naí-Aonad')).toBeInTheDocument()
    expect(screen.getByText('Nursery Unit')).toBeInTheDocument()
  })

  test('menu items have minimum touch targets', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    // Check all menu items have minimum 44px height
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation menu' })
    const menuItems = screen.getAllByRole('menuitem')
    
    expect(menuItems.length).toBeGreaterThan(0)
    menuItems.forEach(item => {
      expect(item).toHaveClass('min-h-[44px]')
    })
    
    // Also check submenu buttons have proper touch targets
    const submenuButtons = screen.getAllByRole('button')
    const mobileSubmenuButtons = submenuButtons.filter(button => 
      mobileNav.contains(button) && button.getAttribute('aria-controls')?.startsWith('submenu-')
    )
    
    mobileSubmenuButtons.forEach(button => {
      expect(button).toHaveClass('min-h-[44px]')
    })
  })

  test('menu closes when clicking menu items', () => {
    render(<BilingualNav />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    // Get mobile navigation to focus on that section
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation menu' })
    
    // Look for direct menu items (not submenu items) with role menuitem
    const menuItems = screen.getAllByRole('menuitem')
    
    // Find the menu item that's a direct link (has href attribute)
    const directMenuItem = menuItems.find(item => 
      item.hasAttribute('href') && item.textContent?.includes('Baile')
    )
    
    if (!directMenuItem) {
      // If no direct menu item found, click on any submenu link
      const submenuButton = screen.getAllByRole('button').find(button => 
        button.getAttribute('aria-controls')?.startsWith('submenu-')
      )
      if (submenuButton) {
        fireEvent.click(submenuButton)
        const submenuItems = screen.getAllByRole('menuitem')
        const submenuItem = submenuItems.find(item => item.hasAttribute('href'))
        expect(submenuItem).toBeDefined()
        fireEvent.click(submenuItem!)
      }
    } else {
      fireEvent.click(directMenuItem)
    }
    
    // Menu should close
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})