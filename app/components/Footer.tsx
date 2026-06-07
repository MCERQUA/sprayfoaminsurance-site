import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Bar */}
      <div className="bg-[#7e3bd0] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Insurance Excellence
          </h2>
          <p className="text-lg md:text-xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Tailored Solutions And Peace Of Mind, For Your Spray Foam Business
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/services/general-liability-insurance/" className="text-white hover:underline font-semibold">
              General Liability Insurance
            </Link>
            <Link href="/services/commercial-auto/" className="text-white hover:underline font-semibold">
              Commercial Auto Insurance
            </Link>
            <Link href="/services/surety-bonds/" className="text-white hover:underline font-semibold">
              Surety Bonds
            </Link>
            <Link href="/services/environmental-liability/" className="text-white hover:underline font-semibold">
              Environmental Liability Insurance
            </Link>
            <Link href="/safety-and-compliance-support/" className="text-white hover:underline font-semibold">
              Safety and Compliance Support
            </Link>
            <Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="text-white hover:underline font-semibold">
              Workers&apos; Compensation Insurance
            </Link>
          </div>
          <a
            href="tel:8449675247"
            className="inline-block bg-white text-[#7e3bd0] font-bold text-xl px-8 py-4 rounded-lg hover:bg-gray-100"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CALL 844-967-5247 (844-WORK-247) FOR A QUICK QUOTE
          </a>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Service Pages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Spray Foam Insurance Service Pages
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services/" className="hover:text-white">Services</Link></li>
              <li><Link href="/services/general-liability-insurance/" className="hover:text-white">General Liability Insurance</Link></li>
              <li><Link href="/inland-marine/spray_foam_rig_insurance/" className="hover:text-white">Inland Marine</Link></li>
              <li><Link href="/services/commercial-auto/" className="hover:text-white">Commercial Auto</Link></li>
              <li><Link href="/services/surety-bonds/" className="hover:text-white">Surety Bonds</Link></li>
              <li><Link href="/services/environmental-liability/" className="hover:text-white">Environmental Liability</Link></li>
              <li><Link href="/safety-and-compliance-support/" className="hover:text-white">Safety and Compliance</Link></li>
              <li><Link href="/services/workers-compensation-insurance-for-spray-foam-contractors/" className="hover:text-white">Workers&apos; Compensation</Link></li>
            </ul>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/attic-insulation-certificate/" className="hover:text-white">Attic Insulation Certificate</Link></li>
              <li><Link href="/spf-resources/work-record-form/" className="hover:text-white">Work Record Form</Link></li>
              <li><Link href="/blog/" className="hover:text-white">Blog</Link></li>
              <li><Link href="/about-us/" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact-us/" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/quote/" className="hover:text-white">Quote</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h3>
            <div className="text-sm space-y-3">
              <p>
                <span className="font-semibold text-white">Address:</span><br />
                2270 E Augusta Ave, Chandler, AZ 85249
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span><br />
                <a href="mailto:Josh@sprayfoaminsurance.com" className="hover:text-white">Josh@sprayfoaminsurance.com</a><br />
                <a href="mailto:info@sprayfoaminsurance.com" className="hover:text-white">info@sprayfoaminsurance.com</a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span><br />
                <a href="tel:8449675247" className="hover:text-white">844-967-5247</a>
              </p>
              <p>
                <span className="font-semibold text-white">Hours:</span><br />
                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Spray Foam Insurance. All rights reserved. A service of The Contractor&apos;s Choice Agency Inc.</p>
        </div>
      </div>
    </footer>
  );
}
