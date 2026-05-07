import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, BadgeIndianRupee, Gavel, KeyRound, LifeBuoy, ShieldCheck, UserCircle2, Wrench } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_WEBSITE } from "@/constants/site";
import { LegalCard, LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";

const TERMS_EFFECTIVE_DATE = "June 1, 2025";

const useRules = [
  "Provide accurate registration, billing, and contact details, and keep them current.",
  "Use the website, products, and training services only for lawful purposes and in a way that does not disrupt others.",
  "Do not share account credentials, paid course access, session links, downloads, recordings, or private community spaces with another person.",
  "Do not reverse engineer, scrape, copy at scale, redistribute, or commercially exploit site content or course materials without written permission.",
  "Do not upload malware, unlawful content, abusive communications, or anything that interferes with platform security or availability.",
];

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the rules governing your access to the Threemates website, digital services, training programs, and support channels.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Threemates",
    description:
      "The core contractual terms for using the Threemates website, software services, training programs, and related support.",
    url: "/terms-of-service",
    type: "website",
  },
  twitter: {
    title: "Terms of Service | Threemates",
    description:
      "The core rules, payment terms, intellectual-property limits, and liability boundaries for using Threemates services.",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      eyebrow="Terms of Service"
      title="The core rules for using the Threemates website, services, and learning products."
      description="These Terms of Service govern your use of the Threemates website, consultations, software services, training programs, AI skilling offerings, support channels, and any related digital experiences. By accessing or using the services, you agree to these terms."
      currentPath="/terms-of-service"
      meta={[
        { label: "Effective date", value: TERMS_EFFECTIVE_DATE },
        { label: "Applies to", value: "Website, products, services, programs, and support interactions" },
        { label: "Primary contact", value: COMPANY_EMAIL },
        { label: "Website", value: COMPANY_WEBSITE },
      ]}
      highlights={[
        {
          title: "Contract scope",
          description:
            "These terms apply when you browse the site, submit a form, sign up for a program, buy a service, or use any Threemates-managed account or portal.",
        },
        {
          title: "Payments and refunds",
          description:
            "Commercial terms for paid offerings are supplemented by the refund policy and any offer-specific terms shown at checkout or on the proposal.",
        },
        {
          title: "Content and access",
          description:
            "Course materials, software assets, and site content remain protected intellectual property and may only be used in the limited way these terms allow.",
        },
        {
          title: "Liability boundary",
          description:
            "The services are provided on an as-available basis with commercially reasonable care, but there are clear limits on warranties and liability.",
        },
      ]}
    >
      <LegalSection
        eyebrow="Acceptance"
        title="When these terms apply"
        description={`${COMPANY_NAME} offers software services, implementation work, consulting, web experiences, cohort-based training, AI skilling, workshops, and related support. These terms become binding when you access the site, submit a request, create an account, make a payment, or continue using the services after the terms are published.`}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Eligibility" className="pastel-blue">
            <div className="flex items-start gap-3">
              <UserCircle2 className="mt-1 h-5 w-5 text-blue-600" />
              <p>You must be legally capable of entering into a binding agreement or have the involvement of a parent, guardian, or authorized representative where required.</p>
            </div>
          </LegalCard>
          <LegalCard title="Accurate information">
            <div className="flex items-start gap-3">
              <KeyRound className="mt-1 h-5 w-5 text-blue-600" />
              <p>You are responsible for providing truthful registration and billing details and for maintaining the confidentiality of any login credentials issued to you.</p>
            </div>
          </LegalCard>
          <LegalCard title="Supplemental terms" className="pastel-sky">
            <p>Offer pages, statements of work, invoices, scholarship rules, refund policies, or proposal documents may add specific terms for a particular service. Where there is a conflict, the more specific written document controls for that service.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Services"
        title="Access to the site and service availability"
        description="We aim to keep the website and service workflows accurate and available, but some parts of the service may evolve over time."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Operational changes" className="pastel-sky">
            <div className="flex items-start gap-3">
              <Wrench className="mt-1 h-5 w-5 text-blue-600" />
              <p>We may modify features, instructors, schedules, tools, integrations, formats, or service descriptions where operationally necessary, provided the core value of the purchased service is preserved where reasonably possible.</p>
            </div>
          </LegalCard>
          <LegalCard title="Availability and maintenance">
            <div className="flex items-start gap-3">
              <LifeBuoy className="mt-1 h-5 w-5 text-blue-600" />
              <p>Planned maintenance, security work, hosting incidents, or third-party outages may occasionally affect access. We do not guarantee uninterrupted or error-free operation at all times.</p>
            </div>
          </LegalCard>
          <LegalCard title="Professional judgement">
            <p>Any implementation advice, training roadmap, or project recommendation we provide is based on the information available at the time. You remain responsible for business, technical, legal, and procurement decisions taken on your side.</p>
          </LegalCard>
          <LegalCard title="Third-party tools" className="pastel-blue">
            <p>Some workflows depend on third-party providers such as hosting, payment, analytics, communication, or collaboration services. Their own terms and privacy practices continue to apply to the parts they control directly.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Payments"
        title="Fees, billing, and refund handling"
        description="Paid services may carry one-time, milestone-based, recurring, or program fees. Unless another written commercial document applies, the following default rules govern."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Payment obligations" className="pastel-blue">
            <div className="flex items-start gap-3">
              <BadgeIndianRupee className="mt-1 h-5 w-5 text-blue-600" />
              <p>Fees are due according to the invoice, checkout page, proposal, or subscription terms shown at the time of purchase. Taxes, gateway fees, and government levies may apply where required by law.</p>
            </div>
          </LegalCard>
          <LegalCard title="Refund policy">
            <p>
              Refund eligibility depends on the type of service or program and the timing of the request. The governing commercial rules are described on <Link href="/refund-terms" className="font-medium text-blue-700 hover:text-blue-800">the refund policy page</Link> and in any program-specific offer terms.
            </p>
          </LegalCard>
          <LegalCard title="Suspension for non-payment" className="pastel-sky">
            <p>We may suspend access, withhold deliverables, pause support, or cancel reserved capacity if an undisputed invoice remains unpaid after the applicable due date and any written cure period we choose to provide.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Use rules"
        title="Acceptable use and account conduct"
        description="Use of the site and services must remain lawful, respectful, and consistent with the intended business or learning purpose of the offering."
      >
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <LegalCard title="Your responsibilities">
            <div className="space-y-3">
              {useRules.map((rule) => (
                <div key={rule} className="rounded-[1.25rem] border border-slate-200/80 bg-white/85 p-4 text-sm leading-7 text-slate-600">
                  {rule}
                </div>
              ))}
            </div>
          </LegalCard>

          <LegalCard title="What we may do if rules are broken" className="pastel-sky">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
              <p>We may investigate abuse, restrict access, suspend accounts, remove content, reject submissions, or terminate service relationships where necessary to protect the platform, other users, or our legitimate interests.</p>
            </div>
            <p>Serious misconduct, intellectual-property infringement, payment fraud, harassment, or security abuse may result in immediate suspension without refund where permitted by law.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Intellectual property"
        title="Ownership of content, materials, and submissions"
        description="The services combine proprietary site content, branded materials, technical know-how, and user-submitted information. Ownership remains with the relevant rightsholder."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Our materials" className="pastel-blue">
            <p>Unless a signed agreement says otherwise, all website content, designs, source assets, proposals, slides, templates, course videos, notes, and training materials remain the property of Threemates or its licensors.</p>
          </LegalCard>
          <LegalCard title="Limited licence">
            <p>You receive a limited, revocable, non-exclusive, non-transferable licence to access and use the materials only for the internal business or learning purpose for which they were provided.</p>
          </LegalCard>
          <LegalCard title="Your submissions" className="pastel-sky">
            <p>You retain ownership of the content you lawfully submit, but you grant Threemates the limited rights needed to host, review, process, reproduce, and communicate that content for service delivery, support, and internal operations.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Legal limits"
        title="Disclaimers, liability, and termination"
        description="These terms set practical limits around warranties, damages, and when either side may end the relationship."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Warranty disclaimer" className="pastel-sky">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 text-blue-600" />
              <p>Except to the extent required by law or expressly stated in writing, the site and services are provided on an as-available and as-provided basis without implied warranties of uninterrupted availability, merchantability, fitness for a particular purpose, or guaranteed commercial outcome.</p>
            </div>
          </LegalCard>
          <LegalCard title="Liability cap">
            <div className="flex items-start gap-3">
              <Gavel className="mt-1 h-5 w-5 text-blue-600" />
              <p>To the maximum extent permitted by law, Threemates&apos; aggregate liability for a claim arising from a paid service is limited to the amount actually paid for that specific service during the 12 months preceding the claim.</p>
            </div>
            <p>We are not liable for indirect, incidental, special, consequential, or punitive losses, including lost profits, lost data, reputational damage, or lost business opportunities arising from platform use or service delays.</p>
          </LegalCard>
          <LegalCard title="Termination rights" className="pastel-blue">
            <p>Either side may stop using or providing a service if the underlying term expires, the engagement completes, a material breach is not cured within a reasonable time, or continued service becomes unlawful or unsafe.</p>
            <p>On termination, outstanding payment obligations and clauses that naturally survive termination will continue to apply.</p>
          </LegalCard>
          <LegalCard title="Governing law and contact">
            <p>These terms are governed by the laws of India. Courts in Thane, Maharashtra have exclusive jurisdiction, subject to any non-waivable rights under applicable law.</p>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a>. Privacy and data-rights details are available on <Link href="/privacy-policy" className="font-medium text-blue-700 hover:text-blue-800">the privacy policy</Link>, <Link href="/user-data-deletion" className="font-medium text-blue-700 hover:text-blue-800">the user data deletion page</Link>, and <Link href="/dpdp-compliance" className="font-medium text-blue-700 hover:text-blue-800">the DPDP compliance page</Link>.
            </p>
          </LegalCard>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}