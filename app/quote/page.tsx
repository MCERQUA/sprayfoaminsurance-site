import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote | Spray Foam Insurance Call 844-967-5247",
  description: "Your journey with Spray Foam Insurance is more than just obtaining an insurance quote; it's an invitation to an exclusive community. By signing up, you're gaining entry into a close-knit circle of professionals.",
};

export default function Quote() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Get Your Quote
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 italic mb-6">
              Your journey with Spray Foam Insurance is more than just obtaining an insurance quote; it&apos;s an invitation to an exclusive community. By signing up, you&apos;re gaining entry into a close-knit circle of professionals who share your passion and dedication. Welcome to a space where support, expertise, and a sense of belonging come together. Let&apos;s start protecting your business together.
            </p>
            <p className="text-gray-600">
              At Spray Foam Insurance, we make it easy to get the insurance coverage you need. Whether you&apos;re looking for auto, home, life, business, or any specialized insurance, our team is here to provide you with a personalized quote that fits your needs and budget.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-[#463dff] mb-2">1. Submit Your Information</h3>
              <p className="text-gray-600 text-sm">Fill out the simple form below with your details and the type of insurance coverage you&apos;re looking for.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-[#463dff] mb-2">2. Receive Your Quote</h3>
              <p className="text-gray-600 text-sm">One of our experienced agents will review your information and provide you with a customized quote.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-bold text-[#463dff] mb-2">3. Review &amp; Decide</h3>
              <p className="text-gray-600 text-sm">We&apos;ll walk you through the options and help you choose the best coverage to protect what matters most.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-3">
              <span className="text-[#463dff] font-bold text-lg">Expert Guidance:</span>
              <span className="text-gray-600">Our knowledgeable agents are here to help you find the right coverage.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#463dff] font-bold text-lg">Customized Plans:</span>
              <span className="text-gray-600">We tailor each policy to meet your specific needs.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#463dff] font-bold text-lg">Competitive Rates:</span>
              <span className="text-gray-600">Get affordable coverage without compromising on protection.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#463dff] font-bold text-lg">Fast &amp; Easy Process:</span>
              <span className="text-gray-600">We make getting a quote simple and stress-free.</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>Get Your Quote Today!</h2>
            <p className="text-gray-600 text-center mb-8">
              To receive your free, no-obligation quote, please complete the form below or contact us directly at 844-967-5247 to speak with one of our agents. Our team will get back to you within 24 hours with your personalized insurance quote. We&apos;re here to help you every step of the way!
            </p>
            <form className="space-y-4 max-w-lg mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Coverage Needed</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent">
                  <option>General Liability Insurance</option>
                  <option>Workers&apos; Compensation</option>
                  <option>Commercial Auto</option>
                  <option>Surety Bonds</option>
                  <option>Environmental Liability</option>
                  <option>Inland Marine</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#463dff] text-white font-bold py-3 rounded-lg hover:bg-[#3a2fe0]">
                Submit for Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
