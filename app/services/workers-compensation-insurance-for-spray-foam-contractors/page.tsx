import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers' Compensation | Spray Foam Insurance Call 844-967-5247",
  description: "Workers' compensation is crucial given the nature of your work, use of heavy equipment and chemicals means that ensuring the safety of your team is paramount.",
};

export default function WorkersCompensation() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Workers&apos; Compensation Insurance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Workers&apos; compensation is crucial given the nature of your work, use of heavy equipment and chemicals means that ensuring the safety of your team is paramount.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Protecting Your Team, Ensuring Your Success
          </h2>
          <p className="text-gray-600 mb-6">
            Spray foam contractors are the backbone of the construction industry, creating energy-efficient, moisture-resistant, and eco-friendly insulation solutions. The demanding nature of the work, often involving the use of heavy equipment and chemicals, means that ensuring the safety and well-being of your team is paramount. That&apos;s where Workers&apos; Compensation Insurance from Spray Foam Insurance steps in – to provide your employees with the protection they need while safeguarding the future of your business.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Understanding the Essentials</h3>
          <p className="text-gray-600 mb-6">
            Workers&apos; Compensation Insurance is more than just a legal requirement; it&apos;s a commitment to the people who make your business thrive. This vital coverage is designed to provide benefits to employees who suffer work-related injuries or illnesses. It not only protects your employees by covering their medical expenses and lost wages but also protects your business from costly lawsuits that can arise from workplace accidents.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Is It Essential for Spray Foam Contractors?</h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Caring for Your Team:</h4>
              <p className="text-gray-600">The health and safety of your employees should always be a top priority. Accidents can happen in any workplace, and the spray foam industry is no exception. Workers&apos; Compensation Insurance ensures that your team receives the care and support they need if they are injured on the job, helping them recover and return to work as quickly as possible.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Legal Compliance:</h4>
              <p className="text-gray-600">In many jurisdictions, carrying Workers&apos; Compensation Insurance is a legal requirement. Compliance with these regulations is not just about avoiding fines and penalties; it&apos;s about fulfilling your responsibility as an employer to provide a safe and supportive work environment.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Financial Security:</h4>
              <p className="text-gray-600">Workplace injuries can lead to substantial financial costs, including medical bills and lost wages. Without insurance, these expenses could be borne by your business. Workers&apos; Compensation Insurance from Spray Foam Insurance ensures that your business remains financially stable in the face of unexpected accidents.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Key Components of Coverage</h3>
          <p className="text-gray-600 mb-4">Workers&apos; Compensation Insurance from Spray Foam Insurance can be customized to meet your specific needs. Here are some key components of coverage:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Medical Expenses:</strong> Coverage for necessary medical treatment and rehabilitation services to help injured employees recover.</li>
            <li><strong>Lost Wages:</strong> Replacement of a portion of an employee&apos;s lost income due to a work-related injury or illness.</li>
            <li><strong>Disability Benefits:</strong> Compensation for permanent or temporary disability resulting from workplace accidents.</li>
            <li><strong>Death Benefits:</strong> Financial support to the family or dependents of an employee who loses their life in a work-related incident.</li>
            <li><strong>Legal Protection:</strong> Coverage for legal expenses in case of lawsuits related to workplace injuries.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>A Commitment to Safety</h3>
          <p className="text-gray-600 mb-8">
            At Spray Foam Insurance, we understand that prevention is the first step in creating a safe work environment. We provide resources and support to help you implement best practices in workplace safety. By working together, we can reduce the risk of accidents and ensure the well-being of your employees.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Choose Spray Foam Insurance for Your Workers&apos; Compensation Needs
            </h3>
            <p className="text-gray-600 mb-6">
              Your employees are your most valuable asset, and protecting them is crucial. At Spray Foam Insurance, we specialize in providing Workers&apos; Compensation Insurance tailored to the unique requirements of spray foam contractors. Our experienced team understands the intricacies of your industry, and we&apos;re committed to ensuring your employees have the coverage they need to thrive and succeed.
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
