import type { Metadata } from "next";
import { Clock3, Mail, Trash2 } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/constants/site";
import { LegalCard, LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";

const DATA_DELETION_EFFECTIVE_DATE = "June 1, 2025";
const deletionItems = [
  "Account profile details such as your name, email address, phone number, and profile photo.",
  "Course enrollment history, learning progress records, quiz responses, assignment submissions, and learner feedback.",
  "Marketing preferences, communication subscription records, support tickets, and chat history.",
  "Session and activity logs stored in active operational systems.",
  "Professional profile details you voluntarily shared, including LinkedIn URL, work experience, and skills.",
];

export const metadata: Metadata = {
  title: "User Data Deletion",
  description:
    "Learn how to request deletion of your personal data from Threemates through the account dashboard or by email under DPDP Act 2023.",
  alternates: { canonical: "/user-data-deletion" },
  openGraph: {
    title: "User Data Deletion | Threemates",
    description:
      "The verified process, timelines, retention carve-outs, and grievance path for requesting deletion of personal data held by Threemates.",
    url: "/user-data-deletion",
    type: "website",
  },
  twitter: {
    title: "User Data Deletion | Threemates",
    description:
      "How to request deletion of your personal data from Threemates, including email instructions and legal retention exceptions.",
  },
};

export default function UserDataDeletionPage() {
  return (
    <LegalPageShell
      eyebrow="User Data Deletion"
      title="How to request erasure of your personal data from Threemates."
      description="If you want Threemates to permanently delete your personal data, email us from your registered email address and we will process the request within 14 days."
      currentPath="/user-data-deletion"
      meta={[
        { label: "Effective date", value: DATA_DELETION_EFFECTIVE_DATE },
        { label: "Request method", value: "Email only" },
        { label: "Deletion request contact", value: COMPANY_EMAIL },
        { label: "Standard completion window", value: "Within 14 days" },
      ]}
      highlights={[
        {
          title: "Your right to erasure",
          description:
            "You can request permanent deletion of your personal data by emailing us from your registered email address.",
        },
        {
          title: "Single request method",
          description:
            "For now, all deletion requests are handled by email only through info@threemates.tech.",
        },
        {
          title: "Processing timeline",
          description:
            "Once we verify the request from your registered email address, we aim to complete deletion within 14 days.",
        },
        {
          title: "What this covers",
          description:
            "This page covers permanent deletion of the personal data you shared directly with Threemates through your account and related services.",
        },
      ]}
    >
      <LegalSection
        eyebrow="Right to erasure"
        title="What this right means for you"
        description={`${COMPANY_NAME} will permanently remove your personal data from our active systems once we verify your deletion request. Deletion is irreversible, so you should keep any information you may need before sending the request.`}
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <LegalCard title="What happens after approval" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Trash2 className="mt-1 h-5 w-5 text-blue-600" />
              <p>Your personal data is removed from active product, support, and communication systems after the verification and grace-period steps are complete.</p>
            </div>
            <p>After we confirm the request, we permanently delete the personal data associated with your account and related service use.</p>
            <p>For now, this page only covers how to request permanent deletion by email.</p>
          </LegalCard>

          <LegalCard title="How to request deletion">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>Email <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> from your registered email address and clearly ask for permanent deletion of your personal data.</p>
            </div>
            <p>Please include your registered email address, your username or phone number, and a short request for permanent account and data deletion.</p>
            <p>We use your registered email address to verify that the request is coming from the correct person.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Deletion scope"
        title="What gets deleted"
        description="When your request is approved, we permanently remove the personal data you shared with Threemates through your account and service interactions."
      >
        <div className="space-y-3">
          {deletionItems.map((item) => (
            <div key={item} className="rounded-[1.25rem] border border-slate-200/80 bg-white/85 p-4 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Request by email"
        title="How to send the deletion request"
        description="For now, email is the only supported way to request permanent deletion of your personal data."
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <LegalCard title="Send your request to" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>
                Email <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> with the subject line Data Deletion Request - [your registered email].
              </p>
            </div>
            <p>Please include your registered email address, your username or phone number, and a short statement asking us to permanently delete your account data.</p>
          </LegalCard>

          <LegalCard title="Sample email template">
            <div className="rounded-[1.35rem] border border-slate-900/90 bg-slate-950 p-5 text-slate-100 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)]">
              <pre className="whitespace-pre-wrap font-mono text-xs leading-6 sm:text-sm">{`Subject: Data Deletion Request - [your@email.com]

Hi ${COMPANY_NAME} Team,

I would like to request the permanent deletion of my personal data and my ${COMPANY_NAME} account.

Registered email: [your@email.com]
Username / Phone: [your username or +91-XXXXXXXXXX]

Please confirm once my data has been deleted.

Thank you,
[Your Name]`}</pre>
            </div>
            <p>We will review the request received at {COMPANY_EMAIL} and complete the deletion within 14 days.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Timeline"
        title="When deletion is completed"
        description="We currently handle deletion requests by email and aim to complete permanent deletion within 14 days of receiving a verifiable request."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Standard processing window" className="pastel-sky">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-blue-600" />
              <p>Once you email us from your registered email address with the required details, we aim to permanently delete your personal data within 14 days.</p>
            </div>
          </LegalCard>
          <LegalCard title="Contact for deletion requests">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>For all current data-deletion requests, contact <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a>.</p>
            </div>
            <p>This page intentionally reflects the current process only and does not include additional request channels.</p>
          </LegalCard>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}