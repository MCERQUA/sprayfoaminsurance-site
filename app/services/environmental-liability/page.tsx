import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Environmental Liability | Spray Foam Insurance Call 844-967-5247",
  description: "Environmental liability insurance is important given a spray foam contractor's nature of work. By using hazardous materials, you face unique environmental risks.",
};

export default function EnvironmentalLiabilityService() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Environmental Liability Insurance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Environmental liability insurance is important given a spray foam contractor&apos;s nature of work. By using hazardous materials, you face unique environmental risks.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Protecting Your Business and the Environment
          </h2>
          <p className="text-gray-600 mb-6">
            In the world of spray foam insulation, your commitment extends beyond your clients and projects—it includes safeguarding the environment. Spray foam contractors, by nature of their work with hazardous chemicals, face unique environmental risks. That&apos;s where Environmental Liability Insurance from Spray Foam Insurance comes into play. We provide specialized coverage designed to protect your business from the financial and environmental repercussions of unforeseen incidents.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Understanding the Essentials</h3>
          <p className="text-gray-600 mb-6">
            Environmental Liability Insurance is more than just an added layer of protection; it&apos;s a testament to your dedication to responsible and sustainable practices. This coverage is crucial in mitigating the risks associated with handling hazardous materials and protecting the environment from potential harm.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Is Environmental Liability Insurance Essential?</h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Protection from Environmental Incidents:</h4>
              <p className="text-gray-600">In the event of accidents, spills, or other environmental incidents involving hazardous spray foam chemicals, our insurance steps in to cover the costs of environmental cleanup and restoration.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Legal Compliance:</h4>
              <p className="text-gray-600">Regulatory authorities have strict standards for handling and disposing of hazardous materials. Environmental Liability Insurance ensures you have the resources to meet these standards and avoid legal consequences.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Client Confidence:</h4>
              <p className="text-gray-600">Clients today are environmentally conscious. By having Environmental Liability Insurance, you not only protect your business but also instill confidence in your clients, demonstrating your commitment to ethical and environmentally responsible practices.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Key Components of Coverage</h3>
          <p className="text-gray-600 mb-4">Our Environmental Liability Insurance can be tailored to meet the specific needs of spray foam contractors. Here are some key components of coverage:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Environmental Cleanup:</strong> Coverage for the costs associated with environmental cleanup, restoration, and remediation in the event of chemical spills or incidents.</li>
            <li><strong>Legal Expenses:</strong> Protection against legal expenses related to environmental claims and regulatory compliance.</li>
            <li><strong>Property Damage:</strong> Coverage for property damage caused by environmental incidents, ensuring you can rectify the situation swiftly.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Preserving Your Reputation and the Environment</h3>
          <p className="text-gray-600 mb-8">
            At Spray Foam Insurance, we understand that environmental responsibility is part of your mission. Our Environmental Liability Insurance goes beyond safeguarding your business; it upholds your commitment to protecting the environment. With our support, you can confidently pursue your projects, knowing you have a financial safety net in place should the unexpected occur.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Choose Spray Foam Insurance for Your Environmental Liability Needs
            </h3>
            <p className="text-gray-600 mb-6">
              Our team specializes in providing Environmental Liability Insurance tailored to the unique requirements of spray foam contractors. We&apos;re committed to helping you navigate the world of environmental risk, ensuring that your business thrives while upholding environmental responsibility.
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
