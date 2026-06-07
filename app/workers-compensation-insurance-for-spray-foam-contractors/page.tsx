import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Workers' Compensation | Spray Foam Insurance Call 844-967-5247",
  description: "Workers' compensation is crucial given the nature of your work, use of heavy equipment and chemicals means that ensuring the safety of your team is paramount.",
};

export default function WorkersCompTopLevel() {
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
          <p className="text-gray-600 mb-8">
            Spray foam contractors are the backbone of the construction industry, creating energy-efficient, moisture-resistant, and eco-friendly insulation solutions. The demanding nature of the work, often involving the use of heavy equipment and chemicals, means that ensuring the safety and well-being of your team is paramount.
          </p>
          <a href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="inline-block bg-[#463dff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#3a2fe0]">
            View Full Workers&apos; Compensation Details &rarr;
          </a>
        </div>
      </section>
    </PageShell>
  );
}
