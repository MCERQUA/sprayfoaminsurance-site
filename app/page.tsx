import type { Metadata } from "next";
import PageShell from "./components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Spray Foam Insurance Call 844-967-5247",
  description:
    "Spray Foam Insurance - Supporting Your Success, Beyond the Policy. Protect your business from unexpected accidents and claims with comprehensive insurance.",
};

const services = [
  {
    title: "General Liability Insurance",
    desc: "Protect your business from unexpected accidents and claims with comprehensive general liability insurance.",
    href: "/services/general-liability-insurance/",
  },
  {
    title: "Environmental Liability Insurance",
    desc: "You care about the environment, and so do we. Our Environmental Liability Insurance covers the risks tied to hazardous chemicals. This way, you’re not only protecting your business but also safeguarding the world around you.",
    href: "/services/environmental-liability/",
  },
  {
    title: "Commercial Auto Insurance",
    desc: "Ensure your vehicles are adequately insured for your spray foam business operations.",
    href: "/services/commercial-auto/",
  },
  {
    title: "Safety and Compliance Support",
    desc: "Safety is paramount, and compliance can be tricky. Our Safety and Compliance Support isn’t just a service; it’s your path to excellence. We offer the resources and guidance you need to maintain industry standards and ensure the safety of your operations.",
    href: "/safety-and-compliance-support/",
  },
  {
    title: "Surety Bonds",
    desc: "Obtain essential surety bonds for licenses, permits, and performance to instill confidence in your clients.",
    href: "/services/surety-bonds/",
  },
  {
    title: "Workers’ Compensation Insurance",
    desc: "Your team is your backbone. Our Workers’ Compensation Insurance shows them you’ve got their backs. In case of workplace mishaps, we ensure they receive the care and support they deserve, so they can bounce back quickly.",
    href: "/services/workers-compensation-insurance-for-spray-foam-contractors/",
  },
];

const features = [
  {
    title: "Insurance with a Personal Touch:",
    desc: "We don’t just offer insurance; we understand the spray foam industry inside out. With years of experience, we’ve gained a competitive edge in serving your specific needs.",
  },
  {
    title: "Decades of Expertise:",
    desc: "Experience matters. Our seasoned team specializes in spray foam contractor insurance, ensuring your business is always in good hands.",
  },
  {
    title: "WORK 24/7 Support ANYTIME",
    desc: "It’s not just a tagline; it’s a commitment that’s even in our phone number. Whether it’s the middle of the night, a weekend, or a holiday, we’re here to support you whenever you need us. Our 24/7 availability ensures that you have the peace of mind you deserve, knowing that we’ve got your back around the clock.",
  },
  {
    title: "Tailored Coverage Plans",
    desc: "Experience peace of mind with our customized insurance plans designed specifically for spray foam insulation contractors. Our policies are crafted to address the unique risks and challenges that come with your profession, ensuring you have the right coverage in place to protect your business and assets.",
  },
  {
    title: "Claims Assistance",
    desc: "When the unexpected happens, you can count on us for prompt and efficient claims assistance. Our dedicated team understands the intricacies of your industry and will work tirelessly to ensure your claims are processed swiftly and fairly, so you can get back to what you do best.",
  },
  {
    title: "Risk Management Resources",
    desc: "Stay ahead of potential pitfalls and hazards with our comprehensive risk management resources. We offer expert guidance, safety training materials, and best practices to help you navigate the complex world of spray foam insulation. Minimize accidents and maximize your safety with our support.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#463dff]/80 to-[#7e3bd0]/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/Spray_Foam_Insurance.webp')" }}
        />
        <div className="relative z-20 text-center px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Spray Foam Insurance
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-white/90" style={{ fontFamily: "var(--font-heading)" }}>
            <Link href="/quote/" className="text-white hover:text-white/80 underline">
              Supporting Your Success, Beyond the Policy
            </Link>
          </h2>
          <a
            href="tel:8449675247"
            className="inline-block bg-white text-[#463dff] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100"
          >
            CALL 844-967-5247 FOR A QUICK QUOTE
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#463dff] font-semibold mb-2">
                <Link href="/about-us/" className="hover:underline">About Us</Link>
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                More Than Insurance:
              </h2>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Your Industry&apos;s Trusted Ally
              </h2>
              <p className="text-gray-600 mb-6">
                Are you in need of comprehensive and affordable insurance coverage for your spray foam business? Look no further. At Spray Foam Insurance, we specialize in providing top-notch <Link href="/services/" className="text-[#463dff] hover:underline">insurance solutions</Link> tailored to your industry&apos;s unique needs.
              </p>
              <blockquote className="border-l-4 border-[#463dff] pl-4 italic text-gray-500 mb-6">
                &ldquo;I know it is hard to find insurance for your spray foam business but I want to make it easier and cheaper. Of course, I know you have many options when choosing insurance coverage. I like to make myself available for any questions or concerns you have along the way. If you have any information or recommendations please share those with me. I&apos;m here for you. Finding you a better quote motivates me. Hundreds of clients are already enjoying the benefits. It doesn&apos;t matter if you are a small one-truck operation or a large company with many rigs; we can save you money. Call us, I think you will be happy you did.&rdquo;
              </blockquote>
              <p className="text-gray-500 text-sm">&mdash; Josh Cotner</p>
            </div>
            <div className="text-center">
              <img
                src="/images/Josh_Cotner_the_contractors_choice_agency_insurance_az.webp"
                alt="Josh Cotner - The Contractor's Choice Agency Insurance"
                className="rounded-lg shadow-lg max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#463dff] font-semibold mb-2">We&apos;re Here For You</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Beyond Policies: Your Industry&apos;s True Support
            </h2>
            <p className="text-gray-600 mb-4">
              Don&apos;t hesitate, contact us for better help and services.{" "}
              <Link href="/services/" className="text-[#463dff] font-semibold hover:underline">
                <strong><u>Explore All Services</u></strong>
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.href} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <Link href={s.href} className="text-[#463dff] font-semibold text-sm hover:underline">
                  Read More &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#7e3bd0] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-white/80 font-semibold mb-2">Insurance Excellence</p>
            <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Tailored Solutions And Peace Of Mind, For Your Spray Foam Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h4>
                <p className="text-white/80 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
