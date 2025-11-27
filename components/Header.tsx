"use client";

export default function Header() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Attractions", href: "/attractions" },
    { name: "Plan Your Trip", href: "/plan-your-trip" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">Bengaluru Tourism</h1>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
