import { useState } from 'react'
import { Outlet } from 'react-router'

export default function MainLayout() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Trang chủ', href: '#home' },
    { 
      name: 'Khái niệm', 
      href: '#services',
    },
    { 
      name: 'Phân tích', 
      href: '#products',
    },
    { name: 'Bài báo', href: '#about' },
  ];
  return (
    <div>
      <nav className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-white font-bold text-2xl tracking-wide">
              <span className="bg-white text-[#740A03] px-3 py-1 rounded">Group5</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className="text-white hover:bg-white hover:text-[#740A03] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1"
                >
                  {item.name}
                </a>
              </div>
            ))}
            
            {/* CTA Button */}
            {/* <button className="ml-4 bg-white text-[#740A03] hover:bg-black hover:text-white px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Get Started
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white hover:text-[#740A03] p-2 rounded-md transition-all duration-300"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#280905] border-t-2 border-[#740A03]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="text-white hover:bg-[#740A03] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => item.dropdown && setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.dropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href="#"
                        className="text-white hover:bg-[#740A03] block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                      >
                        {dropItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* <button className="w-full mt-4 bg-white text-[#740A03] hover:bg-black hover:text-white px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300">
              Get Started
            </button> */}
          </div>
        </div>
      )}
    </nav>
      <div>
            <Outlet/>
      </div>
      <footer></footer>
    </div>
  )
}
