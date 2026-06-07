import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inland Marine Application | Spray Foam Insurance Call 844-967-5247",
  description: "Apply for inland marine insurance to ensure you have coverage for your property that is in transit, movable, or used for specialized purposes.",
};

export default function InlandMarine() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Inland Marine Insurance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Apply for inland marine insurance to ensure you have coverage for your property that is in transit, movable, or used for specialized purposes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Protect Your Property on the Move
          </h2>
          <p className="text-gray-600 mb-6">
            Inland marine insurance provides coverage for your property that is in transit, movable, or used for specialized purposes. Whether you&apos;re transporting goods, equipment, or valuable materials, inland marine insurance ensures you&apos;re protected against loss or damage while on the go.
          </p>
          <p className="text-gray-600 mb-6">
            At Spray Foam Insurance, we understand that certain items don&apos;t stay in one place and need coverage that travels with them. Our inland marine policies are designed to safeguard your high-value assets, ensuring peace of mind wherever your business takes you.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>What Does Inland Marine Insurance Cover?</h3>
          <p className="text-gray-600 mb-4">Inland marine insurance covers a broad range of movable property, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Tools &amp; Equipment:</strong> Essential for contractors and businesses that frequently move equipment between job sites.</li>
            <li><strong>Goods in Transit:</strong> For businesses that ship products domestically, covering the transportation of goods via trucks, trains, or other land-based methods.</li>
            <li><strong>Fine Arts &amp; Antiques:</strong> For collectors and businesses that transport valuable artwork or antiques.</li>
            <li><strong>Electronics:</strong> Ideal for technology companies or individuals who transport high-value electronics such as laptops, cameras, or servers.</li>
            <li><strong>Construction Materials:</strong> Covers the raw materials and supplies used for building or infrastructure projects while they are being transported or stored temporarily off-site.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Inland Marine Insurance?</h3>
          <p className="text-gray-600 mb-4">Many assume that standard property insurance will cover these items, but property insurance generally protects stationary property. Inland marine insurance provides the extra layer of protection for:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Mobile or Movable Property</li>
            <li>Property in Transit</li>
            <li>Property Temporarily Stored Off-Site</li>
          </ul>
          <p className="text-gray-600 mb-8">
            If you regularly transport goods or equipment, rely on technology in different locations, or have other valuable assets on the move, inland marine insurance is an essential addition to your coverage plan.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Who Needs Inland Insurance?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li><strong>Contractors:</strong> Protect valuable equipment as you move from one job site to another.</li>
            <li><strong>Retailers &amp; Wholesalers:</strong> Ensure goods are covered while being transported to customers or between business locations.</li>
            <li><strong>Art Collectors &amp; Dealers:</strong> Secure coverage for high-value pieces while in transit or stored temporarily off-site.</li>
            <li><strong>IT Professionals:</strong> Safeguard servers, computers, and other technology equipment during transport or setup at client locations.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Tailored Solutions For Your Business</h3>
          <p className="text-gray-600 mb-8">
            At Spray Foam Insurance, we provide customized inland marine insurance policies based on your unique needs. Our expert team will work with you to assess your risks and design a policy that covers your property while in motion or storage.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Get a Quote Today!</h3>
            <p className="text-gray-600 mb-6">
              Don&apos;t leave your property unprotected while it&apos;s on the move. Contact Spray Foam Insurance today to learn more about inland marine insurance and get a personalized quote. Let us help you secure your assets, no matter where your business takes you.
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
