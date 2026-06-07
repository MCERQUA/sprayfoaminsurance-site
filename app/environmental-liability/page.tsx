import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Environmental Liability | Spray Foam Insurance Call 844-967-5247",
  description: "Environmental liability insurance is important given a spray foam contractor's nature of work. By using hazardous materials, you face unique environmental risks.",
};

export default function EnvironmentalLiability() {
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
          <p className="text-gray-600 mb-6">
            In the world of spray foam insulation, your commitment extends beyond your clients and projects—it includes safeguarding the environment. Spray foam contractors, by nature of their work with hazardous chemicals, face unique environmental risks. That&apos;s where Environmental Liability Insurance from Spray Foam Insurance comes into play. We provide specialized coverage designed to protect your business from the financial and environmental repercussions of unforeseen incidents.
          </p>
          <p className="text-gray-600 mb-8">
            For complete details about our environmental liability coverage, visit our dedicated service page.
          </p>
          <a href="/services/environmental-liability/" className="inline-block bg-[#463dff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#3a2fe0]">
            View Environmental Liability Details &rarr;
          </a>
        </div>
      </section>
    </PageShell>
  );
}
