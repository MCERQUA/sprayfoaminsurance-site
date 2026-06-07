import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Auto | Spray Foam Insurance Call 844-967-5247",
  description: "Commercial auto insurance is essential as mobility and versatility is important for making sure that your insulation expertise reaches clients far and wide.",
};

export default function CommercialAuto() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Commercial Auto Insurance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Commercial auto insurance is essential as mobility and versatility is important for making sure that your insulation expertise reaches clients far and wide.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Protecting Your Business on the Move
          </h2>
          <p className="text-gray-600 mb-6">
            Spray foam contractors are known for their versatility and mobility, ensuring that their insulation expertise reaches clients far and wide. Whether it&apos;s transporting equipment to a job site or delivering finished projects, the road plays a vital role in your business operations. However, this mobility comes with its own set of risks and challenges, not only for your business but also for the environment. That&apos;s where Commercial Auto Insurance from Spray Foam Insurance becomes essential – it provides a protective shield for your business and ensures you can keep moving forward while safeguarding the environment.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Understanding the Essentials</h3>
          <p className="text-gray-600 mb-6">
            Commercial Auto Insurance is more than just a requirement; it&apos;s a smart investment for any business that relies on vehicles for its daily operations. This coverage is designed to protect your business in situations where your vehicles or employees are involved in accidents while on the job. It goes beyond protecting your assets; it&apos;s about protecting your reputation as a responsible and environmentally conscious contractor.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Is It Essential for Spray Foam Contractors?</h3>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Protecting Your Fleet:</h4>
              <p className="text-gray-600">Whether you have a single spray foam rig or a fleet of vehicles, they are vital assets to your business. Commercial Auto Insurance safeguards your investment by covering repairs or replacements in case of accidents, theft, or damage. This not only ensures business continuity but also minimizes the risk of environmental damage from spills during transportation.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Environmental Responsibility:</h4>
              <p className="text-gray-600">Spray foam contractors understand the environmental risks associated with their work. Transporting hazardous chemicals to job sites requires careful handling. In the unfortunate event of a spill, Commercial Auto Insurance can cover the costs of environmental cleanup, ensuring that the impact on the environment is minimized.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Key Components of Coverage</h3>
          <p className="text-gray-600 mb-4">Commercial Auto Insurance from Spray Foam Insurance can be customized to meet your specific needs. Here are some key components of coverage:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Collision Coverage:</strong> This covers the costs of repairing or replacing your vehicles if they are damaged in an accident.</li>
            <li><strong>Liability Coverage:</strong> Protection against claims of bodily injury or property damage that may result from an accident involving your vehicles.</li>
            <li><strong>Environmental Cleanup:</strong> Coverage for costs associated with environmental cleanup in the event of chemical spills.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ensuring Your Business Keeps Moving</h3>
          <p className="text-gray-600 mb-8">
            In the dynamic world of spray foam contracting, your mobility is a competitive advantage. Commercial Auto Insurance from Spray Foam Insurance ensures that you can keep your business on the move while fulfilling your responsibility to safeguard the environment. It&apos;s the safety net that provides peace of mind on the road and at the job site.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Choose Spray Foam Insurance For Your Commercial Auto Needs
            </h3>
            <p className="text-gray-600 mb-6">
              At Spray Foam Insurance, we specialize in providing Commercial Auto Insurance tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry, and we&apos;re committed to ensuring your vehicles have the coverage they need to keep your business moving forward while preserving the environment.
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
