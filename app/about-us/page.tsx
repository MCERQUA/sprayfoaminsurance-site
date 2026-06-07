import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Spray Foam Insurance Call 844-967-5247",
  description: "ABOUT US We Listen And Work Together To Provide You The Best Coverage. We like to listen to our customers because they know their business very well.",
};

export default function AboutUs() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/80 font-semibold mb-2">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            We Listen And Work Together To Provide You The Best Coverage.
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6">
                We like to listen to our customers because they know their business very well. Most of our clients have a lifetime of construction experience and they have tons of safety knowledge like work site safety training and applicator training. As much as you know about spray foam we know about spray foam contractors insurance. We try to ask only the questions we need in order to keep our time short on the phone. Once we have gathered your information we shop around for you. Our proprietary quote engine allows us to gather your information once and then shop your company with multiple carriers. We write thousands of contractors coast to coast every year.
              </p>
            </div>
            <div>
              <img
                src="/images/Josh_Cotner_the_contractors_choice_agency_insurance_az.webp"
                alt="Josh Cotner - The Contractor's Choice Agency"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#463dff]" style={{ fontFamily: "var(--font-heading)" }}>Josh Cotner</h3>
              <p className="text-gray-500 text-sm mt-2">Founder</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#463dff]" style={{ fontFamily: "var(--font-heading)" }}>Happy Customer</h3>
              <p className="text-gray-500 text-sm mt-2">Hundreds Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#463dff]" style={{ fontFamily: "var(--font-heading)" }}>Staff Members</h3>
              <p className="text-gray-500 text-sm mt-2">Dedicated Team</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#463dff]" style={{ fontFamily: "var(--font-heading)" }}>Work Hours</h3>
              <p className="text-gray-500 text-sm mt-2">24/7 Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#463dff] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to get started?
          </h2>
          <p className="mb-6 text-white/80">Contact us today for a free quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote/" className="bg-white text-[#463dff] font-bold px-8 py-3 rounded-lg hover:bg-gray-100">Get a Quote</Link>
            <a href="tel:8449675247" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10">Call 844-967-5247</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
