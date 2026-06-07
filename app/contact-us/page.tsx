import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Spray Foam Insurance Call 844-967-5247",
  description: "At The Contractor's Choice Agency Inc., we're here to provide you with the best insurance solutions tailored to your needs.",
};

export default function ContactUs() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                At The Contractor&apos;s Choice Agency Inc., we&apos;re here to provide you with the best insurance solutions tailored to your needs. Whether you&apos;re looking for auto, home, life, or business insurance, our team of dedicated professionals is ready to assist you.
              </h4>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? We&apos;re here to help. Feel free to send us a message using the form below, and one of our experienced team members will get back to you promptly. Your inquiries are important to us, and we look forward to assisting you with any insurance-related needs or inquiries you may have.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Office Location
              </h2>
              <p className="text-gray-600 mb-4">
                You&apos;re always welcome to stop by our office during business hours, or if it&apos;s more convenient, feel free to give us a call or send us an email. We&apos;re happy to schedule a time that works best for you!
              </p>
              <p className="text-gray-600 mb-2">
                Your protection is our priority. We&apos;re committed to offering you the guidance and support you need to make informed decisions about your insurance coverage. Let us help you find peace of mind.
              </p>

              <div className="mt-8 space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-[#463dff] font-bold">Address:</span>
                  <span>2270 E Augusta Ave, Chandler, AZ 85249, United States</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#463dff] font-bold">Email:</span>
                  <div>
                    <a href="mailto:Josh@sprayfoaminsurance.com" className="block hover:text-[#463dff]">Josh@sprayfoaminsurance.com</a>
                    <a href="mailto:info@sprayfoaminsurance.com" className="block hover:text-[#463dff]">info@sprayfoaminsurance.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#463dff] font-bold">Hours:</span>
                  <div>
                    <p>Monday: 9:00 AM – 5:00 PM</p>
                    <p>Tuesday: 9:00 AM – 5:00 PM</p>
                    <p>Wednesday: 9:00 AM – 5:00 PM</p>
                    <p>Thursday: 9:00 AM – 5:00 PM</p>
                    <p>Friday: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-gray-50 rounded-lg p-8 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Send Us a Message
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#463dff] focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#463dff] text-white font-bold py-3 rounded-lg hover:bg-[#3a2fe0]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
