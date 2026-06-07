import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spray Foam Insurance Blog | Spray Foam Insurance Call 844-967-5247",
  description: "Spray Foam Insurance Blog General Liability Insurance Commercial Auto Insurance Surety Bonds Call Or Text For a Free Quote (844)-967-5247",
};

const posts = [
  {
    title: "Retrofitting Insurance",
    excerpt: "As spray foam contractors, you're well aware of the dynamic nature of the construction industry. Technology advances, regulations evolve, and your clients' needs change. To stay competitive and meet these shifting demands...",
  },
  {
    title: "Insurance Requirements",
    excerpt: "As a spray foam contractor, taking on large commercial projects can be both a significant opportunity and a complex undertaking. These projects often come with heightened responsibilities and specific requirements...",
  },
  {
    title: "Coverage for Roofing Projects",
    excerpt: "Spray foam insulation contractors often find themselves working in collaboration with roofing companies, Spray Foam insulation solutions. These collaborative efforts are essential for ensuring a well-insulated...",
  },
  {
    title: "Mold and Mildew Claims",
    excerpt: "A Critical Consideration for Spray Foam Insulation Contractors Mold and mildew are persistent issues that can plague buildings, causing health concerns and property damage. For spray foam insulation contractors, who...",
  },
  {
    title: "Insurance for Overspray",
    excerpt: "Protecting Your Business from Unintended Consequences In the dynamic world of spray foam insulation, where precision meets innovation, overspray—unintentional dispersion of foam material—can sometimes become an...",
  },
  {
    title: "Spray Foam Equipment Coverage",
    excerpt: "If you're a spray foam insulation contractor, you're well aware of the importance of your equipment. Your machines, tools, and materials are the lifeblood of your business, allowing you to provide efficient and...",
  },
  {
    title: "Insurance Premium Factors",
    excerpt: "Insurance is a financial safety net that provides protection and peace of mind when unexpected events occur. Whether you're insuring your car, home, business, or even your life, understanding the factors that influence...",
  },
  {
    title: "Subcontracting & Insurance",
    excerpt: "Today, we're going to address a common question in the world of contracting: Do I need insurance if I subcontract work? Whether you're a general contractor considering subcontracting some aspects of your project or a...",
  },
  {
    title: "Protecting Your Clients",
    excerpt: "How Does Insurance Protect Construction Clients? Welcome, everyone! I'm here to delve into an important topic today: how insurance safeguards the interests of clients in the construction industry. As someone...",
  },
];

export default function Blog() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Spray Foam Insurance Blog
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="text-[#463dff]">Blog</span> Spray Foam Insurance Blog
                </p>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#463dff] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Call Or Text For a Free Quote
          </h4>
          <a href="tel:8449675247" className="inline-block bg-white text-[#463dff] font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
            (844) 967-5247
          </a>
        </div>
      </section>
    </PageShell>
  );
}
