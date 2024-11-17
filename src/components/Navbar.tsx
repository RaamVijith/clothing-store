import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, Search } from "lucide-react";
import img from '../assets/productzoom/logo_dark.png';

interface NavItem {
  title: string;
  href: string;
  dropdownContent?: {
    sections: {
      title: string;
      items: { name: string; href: string }[];
    }[];
  };
}

const navItems: NavItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PAGES",
    href: "/pages",
  },
  {
    title: "SHOP",
    href: "/shop",
    dropdownContent: {
      sections: [
        {
          title: "Shop Lists",
          items: [
            { name: "Right Sidebar", href: "/shop/right-sidebar" },
            { name: "Left Sidebar", href: "/shop/left-sidebar" },
            { name: "Shop Slider", href: "/shop/slider" },
            { name: "Info On Image", href: "/shop/info-on-image" },
            { name: "Info Below", href: "/shop/info-below" },
            { name: "Alternating List", href: "/shop/alternating" },
            { name: "Gallery List", href: "/shop/gallery" },
            { name: "One Category List", href: "/shop/one-category" },
          ],
        },
        {
          title: "Shop Layouts",
          items: [
            { name: "Two Columns", href: "/shop/two-columns" },
            { name: "Three Columns", href: "/shop/three-columns" },
            { name: "Three Columns Wide", href: "/shop/three-columns-wide" },
            { name: "Four Columns", href: "/shop/four-columns" },
            { name: "Five Columns Wide", href: "/shop/five-columns-wide" },
            { name: "Four Columns Wide", href: "/shop/four-columns-wide" },
            { name: "Six Columns Wide", href: "/shop/six-columns-wide" },
          ],
        },
        {
          title: "Product Types",
          items: [
            { name: "Huge Images", href: "/products/huge-images" },
            { name: "Gallery Product", href: "/products/gallery" },
            { name: "Variable Product", href: "/products/variable" },
            { name: "Big Images", href: "/products/big-images" },
            { name: "Standard Product", href: "/products/standard" },
            { name: "Grouped Product", href: "/products/grouped" },
            { name: "Downloadable Product", href: "/products/downloadable" },
            { name: "Virtual Product", href: "/products/virtual" },
            { name: "External Product", href: "/products/external" },
            { name: "Sale Product", href: "/products/sale" },
            { name: "New Product", href: "/products/new" },
            { name: "Sold Product", href: "/products/sold" },
          ],
        },
        {
          title: "Shop Pages",
          items: [
            { name: "My Account", href: "/account" },
            { name: "Wishlist", href: "/wishlist" },
            { name: "Cart", href: "/cart" },
            { name: "Checkout", href: "/checkout" },
            { name: "Order Tracking", href: "/order-tracking" },
          ],
        },
      ],
    },
  },
  {
    title: "BLOG",
    href: "/blog",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center pl-8 py-4 border-b">
        <div className="flex flex-row items-center">
              <img src={img} alt="Logo" className="w-[8vw] mr-[5vw]"/>

          <div className="flex items-center space-x-12">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-xl tracking-wider hover:underline transition-colors"
                >
                  {item.title}
                </a>

                {item.dropdownContent && hoveredItem === item.title && (
                  <div className="absolute left-0 top-14 w-screen bg-[#111111]">
                    <div className="fixed left-0 right-0 bg-[#111111] text-white">
                      <div className="max-w-7xl mx-auto py-12 px-8">
                        <div className="grid grid-cols-4 gap-16">
                          {item.dropdownContent.sections.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-white font-normal mb-6 text-base">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.href}
                                      className="text-gray-400 hover:text-white transition-colors text-lg"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <Heart className="w-6 h-6 pr-1" />
            <span className="text-xl">WISHLIST</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShoppingCart className="w-6 h-6 pr-1" />
            <span className="text-xl">CART (0)</span>
          </div>
          <Search className="w-5 h-5" />
          <button className="bg-black p-4" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 border-b">
        <div className="text-2xl font-light tracking-wider">ESMÉE</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5" />
            <span className="ml-1">(0)</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="bg-black p-2">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          {navItems.map((item) => (
            <div key={item.title} className="border-b">
              <a
                href={item.href}
                className="block px-4 py-3 text-sm tracking-wider hover:bg-gray-50"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
