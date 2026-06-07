import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Record Form | Spray Foam Insurance Call 844-967-5247",
  description: "Our Work Record Form is an essential tool for accurately documenting all critical jobsite data during spray foam insulation projects.",
};

export default function WorkRecordForm() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#463dff] to-[#7e3bd0] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Work Record Form
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 mb-8">
            Our <strong>Work Record Form</strong> is an essential tool for accurately documenting all critical jobsite data during spray foam insulation projects. This form is designed to capture environmental and material conditions to ensure the optimal application of spray foam insulation. By recording atmospheric and substrate information, we guarantee that each project meets industry standards for safety, performance, and quality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>What the Form Captures:</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
            <li>
              <strong>Jobsite:</strong> Record the data, time, location, and jobsite conditions to create a comprehensive log for each project.
            </li>
            <li>
              <strong>Atmospheric Conditions:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Ambient Temperature:</strong> This tracks the air temperature at the jobsite to ensure that the foam is applied under optimal conditions.</li>
                <li><strong>Substrate Temperature:</strong> Recording the temperature of the surface where spray foam is applied is crucial for adhesion and overall insulation performance.</li>
                <li><strong>Moisture Content:</strong> Monitoring the moisture levels in the substrate helps prevent foam from absorbing water, which can affect both application and long-term performance.</li>
              </ul>
            </li>
            <li>
              <strong>Spray Foam Application Data:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Starting Temperatures:</strong> Measure the initial temperatures of the foam material components before application to ensure the correct chemical reaction during spraying.</li>
                <li><strong>Initial Pressures:</strong> Document the pressure levels in the spray foam equipment to ensure the proper mix and delivery of materials.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why It&apos;s Important:</h2>
          <p className="text-gray-600 mb-4">
            Proper documentation of these environmental and material conditions helps to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Ensure the foam is applied in compliance with manufacturer and industry guidelines.</li>
            <li>Minimize the risk of product failure due to environmental factors.</li>
            <li>Provide a record for quality control and troubleshooting if issues arise.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>How to Use the Form:</h2>
          <p className="text-gray-600 mb-8">
            Our form is straightforward and easy to use. Simply enter the required data during the job, and our system will store the information for easy access and review. This documentation helps maintain a professional standard and ensures the best performance for every spray foam insulation project.
          </p>

          <div className="text-center">
            <Link href="/quote/" className="inline-block bg-[#463dff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#3a2fe0] mr-4">
              Get Insurance Quote
            </Link>
            <a href="tel:8449675247" className="inline-block border-2 border-[#463dff] text-[#463dff] font-bold px-8 py-3 rounded-lg hover:bg-[#463dff]/10">
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
