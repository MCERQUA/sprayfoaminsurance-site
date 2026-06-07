import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spray Foam Services | Spray Foam Insurance Call 844-967-5247",
  description: "General liability, workers' compensation, commercial auto, and more are all key protections for your contracting work and business.",
};

export default function Services() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            General liability, workers&apos; compensation, commercial auto, and more are all key protections for your contracting work and business.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">&#x1F6E1;</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  <strong>General Liability</strong>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the comprehensive coverage you need to safeguard your spray foam contracting business. Our General Liability insurance is designed to shield you from unforeseen risks and give you the confidence to build a brighter future.
                </p>
                <Link href="/services/general-liability-insurance/" className="text-[#463dff] font-semibold text-sm hover:underline">
                  More Details &gt;
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">&#x1F4AA;</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  <strong>Workers Compensation</strong>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Prioritize your team&apos;s well-being with our Workers&apos; Compensation coverage. We&apos;re here to ensure your employees are protected, and your business remains secure in the face of workplace injuries. Explore how we can help you create a safer work environment.
                </p>
                <Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="text-[#463dff] font-semibold text-sm hover:underline">
                  More Details &gt;
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">&#x1F697;</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  <strong>Commercial Auto</strong>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Your business relies on wheels, and so do we. Our Commercial Auto Insurance ensures your vehicles stay on the road, so you can focus on what matters most—serving your clients. Explore how we can drive your success with tailored coverage.
                </p>
                <Link href="/services/commercial-auto/" className="text-[#463dff] font-semibold text-sm hover:underline">
                  More Details &gt;
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Our Comprehensive Insurance Services for Spray Foam Contractors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Expertise in Spray Foam Insurance</h4>
              <p className="text-gray-600 text-sm">With many years of dedicated focus on the spray foam industry, we&apos;ve honed our expertise to understand the unique risks and needs of spray foam contractors. Our specialized knowledge allows us to provide tailored insurance solutions that truly protect your business.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Personalized Service</h4>
              <p className="text-gray-600 text-sm">We pride ourselves on delivering personalized service. We work closely with each client, taking the time to understand your specific requirements. This ensures you receive insurance solutions that match your business goals and preferences, with a personal touch you can trust.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Industry Partnerships</h4>
              <p className="text-gray-600 text-sm">We&apos;ve cultivated strong partnerships within the spray foam industry. These connections enable us to stay updated on industry trends, regulations, and emerging risks, so you can benefit from the latest insights and solutions when you choose us as your insurance partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#463dff] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            We&apos;re Here To Help Any-Time Any-Day
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>24</h3><p className="text-white/80 text-sm">Hours a Day</p></div>
            <div><h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>365</h3><p className="text-white/80 text-sm">Days A Year</p></div>
            <div><h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>8760</h3><p className="text-white/80 text-sm">Hours Per Year</p></div>
            <div><h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>1000+</h3><p className="text-white/80 text-sm">Happy Clients</p></div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
