import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Spray Foam Insurance Call 844-967-5247",
  description: "Spray Foam Insurance resources for spray foam contractors including attic insulation certificates and work record forms.",
};

export default function SpfResources() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Resources
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Spray Foam Insurance Service Pages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link href="/attic-insulation-certificate/" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Attic Insulation Certificate</h3>
              <p className="text-gray-600 text-sm">Access your attic insulation certificate resources.</p>
            </Link>
            <Link href="/spf-resources/work-record-form/" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Work Record Form</h3>
              <p className="text-gray-600 text-sm">Essential tool for accurately documenting all critical jobsite data.</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/services/general-liability-insurance/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900">&ndash; <strong>General Liability Insurance</strong></h4>
            </Link>
            <Link href="/services/commercial-auto/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900"><strong>&ndash; Commercial Auto Insurance</strong></h4>
            </Link>
            <Link href="/services/surety-bonds/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900"><strong>&ndash; Surety Bonds</strong></h4>
            </Link>
            <Link href="/services/environmental-liability/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900"><strong>&ndash; Environmental Liability Insurance</strong></h4>
            </Link>
            <Link href="/safety-and-compliance-support/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900"><strong>&ndash; Safety and Compliance Support</strong></h4>
            </Link>
            <Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900"><strong>&ndash; Workers&apos; Compensation Insurance</strong></h4>
            </Link>
          </div>

          <div className="text-center">
            <a href="tel:8449675247" className="inline-block bg-[#463dff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#3a2fe0]">
              CALL 844-967-5247 FOR A QUICK QUOTE
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
