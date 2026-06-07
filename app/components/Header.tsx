"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "General Liability Insurance", href: "/services/general-liability-insurance/" },
  { label: "Inland Marine", href: "/inland-marine/spray_foam_rig_insurance/" },
  { label: "Commercial Auto", href: "/services/commercial-auto/" },
  { label: "Surety Bonds", href: "/services/surety-bonds/" },
  { label: "Environmental Liability", href: "/services/environmental-liability/" },
  { label: "Safety and Compliance", href: "/safety-and-compliance-support/" },
  { label: "Workers' Compensation", href: "/services/workers-compensation-insurance-for-spray-foam-contractors/" },
];

const resources = [
  { label: "Attic Insulation Certificate", href: "/attic-insulation-certificate/" },
  { label: "Work Record Form", href: "/spf-resources/work-record-form/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#463dff] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <a href="tel:8449675247" className="hover:underline font-semibold">
            CALL 844-967-5247 (844-WORK-247)
          </a>
          <a href="mailto:Josh@sprayfoaminsurance.com" className="hover:underline">
            Josh@sprayfoaminsurance.com
          </a>
          <div className="flex gap-3">
            <Link href="/quote/" className="bg-white text-[#463dff] px-4 py-1 rounded font-semibold hover:bg-gray-100 text-sm">
              Get Quote
            </Link>
            <a href="tel:8449675247" className="border border-white px-4 py-1 rounded font-semibold hover:bg-white/10 text-sm">
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/Spray_Foam_Insurance.webp"
              alt="Spray Foam Insurance"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-[#463dff]">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link href="/services/" className="text-gray-700 hover:text-[#463dff] flex items-center gap-1">
                Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-gray-700 hover:bg-[#463dff]/10 hover:text-[#463dff] text-sm">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources dropdown */}
            <div className="relative group">
              <Link href="/spf-resources/" className="text-gray-700 hover:text-[#463dff] flex items-center gap-1">
                Resources
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {resources.map((r) => (
                  <Link key={r.href} href={r.href} className="block px-4 py-2 text-gray-700 hover:bg-[#463dff]/10 hover:text-[#463dff] text-sm">
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog/" className="text-gray-700 hover:text-[#463dff]">Blog</Link>
            <Link href="/about-us/" className="text-gray-700 hover:text-[#463dff]">About Us</Link>
            <Link href="/contact-us/" className="text-gray-700 hover:text-[#463dff]">Contact Us</Link>
            <Link href="/quote/" className="bg-[#463dff] text-white px-5 py-2 rounded font-semibold hover:bg-[#3a2fe0]">
              Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>Home</Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left py-2 text-gray-700 hover:text-[#463dff] flex items-center justify-between">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-1 text-sm text-gray-600 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>{s.label}</Link>
                ))}
              </div>
            )}

            <button onClick={() => setResourcesOpen(!resourcesOpen)} className="w-full text-left py-2 text-gray-700 hover:text-[#463dff] flex items-center justify-between">
              Resources
              <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {resourcesOpen && (
              <div className="pl-4 space-y-1">
                {resources.map((r) => (
                  <Link key={r.href} href={r.href} className="block py-1 text-sm text-gray-600 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>{r.label}</Link>
                ))}
              </div>
            )}

            <Link href="/blog/" className="block py-2 text-gray-700 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/about-us/" className="block py-2 text-gray-700 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/contact-us/" className="block py-2 text-gray-700 hover:text-[#463dff]" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link href="/quote/" className="block py-2 text-[#463dff] font-semibold" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </div>
        )}
      </header>
    </>
  );
}
