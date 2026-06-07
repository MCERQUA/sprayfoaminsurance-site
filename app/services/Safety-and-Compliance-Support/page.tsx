import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety and Compliance Support | Spray Foam Insurance Call 844-967-5247",
  description: "In spray foam insulation, safety and compliance are cornerstones of your success. Adherence to safety standards and regulatory compliance is paramount.",
};

export default function SafetyComplianceService() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Safety and Compliance Support
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            In spray foam insulation, safety and compliance are cornerstones of your success. Adherence to safety standards and regulatory compliance is paramount.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Guiding Your Path to Excellence and Responsibility
          </h2>
          <p className="text-gray-600 mb-6">
            In the intricate world of spray foam insulation, safety and compliance are not just buzzwords – they are the cornerstones of your success. Spray foam contractors operate in an environment where adherence to safety standards and regulatory compliance is paramount. That&apos;s why Spray Foam Insurance offers dedicated Safety and Compliance Support services to guide you on the path to excellence, ensuring your operations are not only efficient but also safe and responsible.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Understanding the Essentials</h3>
          <p className="text-gray-600 mb-6">
            Safety and Compliance Support is more than just a service; it&apos;s a partnership in your journey towards excellence. It&apos;s about providing you with the resources, guidance, and expertise you need to navigate the complex landscape of safety protocols and industry regulations.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Is Safety and Compliance Support Essential?</h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Safety First:</h4>
              <p className="text-gray-600">Your team&apos;s well-being is your top priority. Our support helps you establish robust safety protocols, creating a secure work environment that minimizes accidents and hazards.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Regulatory Adherence:</h4>
              <p className="text-gray-600">Navigating the myriad of industry regulations, permits, and compliance requirements can be daunting. Our experts are here to simplify the process, ensuring you meet all legal obligations.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Client Confidence:</h4>
              <p className="text-gray-600">Clients and partners seek professionals who prioritize safety and compliance. By demonstrating your commitment to these principles, you gain the trust of your clients and build a stellar reputation.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Services We Offer</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Medical Expenses:</strong> Coverage for necessary medical treatment and rehabilitation services to help injured employees recover.</li>
            <li><strong>Lost Wages:</strong> Replacement of a portion of an employee&apos;s lost income due to a work-related injury or illness.</li>
            <li><strong>Disability Benefits:</strong> Compensation for permanent or temporary disability resulting from workplace accidents.</li>
            <li><strong>Death Benefits:</strong> Financial support to the family or dependents of an employee who loses their life in a work-related incident.</li>
            <li><strong>Legal Protection:</strong> Coverage for legal expenses in case of lawsuits related to workplace injuries.</li>
          </ul>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Choose Spray Foam Insurance for Your Safety and Compliance Needs
            </h3>
            <p className="text-gray-600 mb-6">
              Our team specializes in providing Safety and Compliance Support tailored to the unique requirements of spray foam contractors. We&apos;re committed to helping you maintain safety, uphold compliance, and build a reputation for excellence in the spray foam industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote/" className="bg-[#463dff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#3a2fe0]">Get a Quote</Link>
              <a href="tel:8449675247" className="border-2 border-[#463dff] text-[#463dff] font-bold px-8 py-3 rounded-lg hover:bg-[#463dff]/10">Call 844-967-5247</a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
