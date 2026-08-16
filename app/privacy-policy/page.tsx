import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zandrelix",
  description:
    "Learn how Zandrelix collects, uses, protects, and handles information submitted through our website and services.",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Zandrelix. We respect your privacy and are committed to
          protecting the information you share with us.
        </p>

        <p>
          This Privacy Policy explains what information we may collect when
          you visit our website, contact us, or use our services, how we use
          that information, and the choices available to you.
        </p>

        <p>
          By using the Zandrelix website, you acknowledge the practices
          described in this Privacy Policy.
        </p>
      </>
    ),
  },

  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          contact us, request a service, or discuss a project with our team.
        </p>

        <h3>Information you may provide includes:</h3>

        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number or WhatsApp contact information</li>
          <li>Company or organization name</li>
          <li>Project requirements and business information</li>
          <li>Messages, questions, or other information you send to us</li>
        </ul>

        <p>
          We only request information that is reasonably necessary to
          understand your requirements, respond to your inquiry, or provide
          the requested service.
        </p>
      </>
    ),
  },

  {
    title: "3. Information Collected Automatically",
    content: (
      <>
        <p>
          When you visit our website, certain technical information may be
          automatically processed by the hosting platform or other technical
          services used to operate the website.
        </p>

        <p>
          Depending on the technologies enabled on our website, this may
          include information such as your browser type, device type,
          operating system, approximate location, IP address, pages visited,
          and technical information about your interaction with the website.
        </p>

        <p>
          We do not intentionally collect sensitive personal information
          through the website unless it is voluntarily provided and necessary
          for a specific purpose.
        </p>
      </>
    ),
  },

  {
    title: "4. How We Use Your Information",
    content: (
      <>
        <p>Information provided to Zandrelix may be used to:</p>

        <ul>
          <li>Respond to your questions and project inquiries</li>
          <li>Understand your business and project requirements</li>
          <li>Prepare proposals, estimates, or project discussions</li>
          <li>Provide and manage our services</li>
          <li>Communicate with you about an ongoing project</li>
          <li>Improve our website, services, and user experience</li>
          <li>Maintain website security and prevent misuse</li>
          <li>Meet applicable legal or contractual obligations</li>
        </ul>

        <p>
          We do not sell your personal information to third parties.
        </p>
      </>
    ),
  },

  {
    title: "5. Project and Client Information",
    content: (
      <>
        <p>
          If you engage Zandrelix for a project, you may provide information
          related to your business, website, application, users, products,
          content, or technical requirements.
        </p>

        <p>
          We use such information only as reasonably necessary to discuss,
          develop, maintain, or deliver the agreed services.
        </p>

        <p>
          Clients should avoid sending passwords, payment card information,
          private authentication credentials, or other highly sensitive
          information through ordinary website forms or email unless a secure
          method has been specifically agreed upon.
        </p>
      </>
    ),
  },

  {
    title: "6. AI and Third-Party Services",
    content: (
      <>
        <p>
          Some Zandrelix projects may use third-party technologies,
          application programming interfaces, cloud services, artificial
          intelligence models, analytics tools, hosting providers, or other
          external services.
        </p>

        <p>
          Where such services are required for a particular project, relevant
          information may be processed by those providers according to their
          own privacy policies and terms.
        </p>

        <p>
          We aim to use reputable services and only share information that is
          reasonably necessary for the relevant purpose.
        </p>
      </>
    ),
  },

  {
    title: "7. Data Security",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures to protect
          information against unauthorized access, misuse, alteration,
          disclosure, or loss.
        </p>

        <p>
          However, no website, online transmission, or electronic storage
          system can be guaranteed to be completely secure. Therefore, we
          cannot guarantee absolute security of information transmitted over
          the internet.
        </p>
      </>
    ),
  },

  {
    title: "8. Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purpose for which it was collected, including
          responding to inquiries, providing services, maintaining business
          records, resolving disputes, and satisfying applicable legal or
          contractual requirements.
        </p>
      </>
    ),
  },

  {
    title: "9. Your Choices and Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights relating to your
          personal information, including the ability to request access,
          correction, deletion, or clarification regarding how your
          information is handled.
        </p>

        <p>
          To make a privacy-related request, contact us using the details
          provided below. We may need to verify your identity before
          processing certain requests.
        </p>
      </>
    ),
  },

  {
    title: "10. Children&apos;s Privacy",
    content: (
      <>
        <p>
          Our website and services are intended for businesses, organizations,
          entrepreneurs, and general users. We do not knowingly collect
          personal information from children for the purpose of providing
          services.
        </p>
      </>
    ),
  },

  {
    title: "11. External Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services. Zandrelix is not responsible for the privacy practices,
          security, or content of those third-party websites.
        </p>

        <p>
          We recommend reviewing the privacy policy of any external website
          before providing personal information.
        </p>
      </>
    ),
  },

  {
    title: "12. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, technology, legal requirements, or business
          practices.
        </p>

        <p>
          Updated version will be published on this page with a revised
          &quot;Last Updated&quot; date.
        </p>
      </>
    ),
  },

  {
    title: "13. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how Zandrelix
          handles information, you can contact us at:
        </p>

        <p>
          <strong>Zandrelix</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:hello@zandrelix.tech"
            className="text-brand-400 hover:text-brand-300 transition-colors"
          >
            hello@zandrelix.tech
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[15%] top-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute right-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-6 py-24 max-md:py-16">
          <div className="mb-5">
            <span className="text-[12px] font-semibold uppercase tracking-[3px] text-blue-400">
              Legal
            </span>
          </div>

          <h1 className="max-w-[800px] text-5xl font-bold tracking-[-0.04em] max-md:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-[700px] text-base leading-7 text-white/55">
            Your privacy matters to us. This policy explains how Zandrelix
            handles information when you visit our website, contact us, or
            work with our team.
          </p>

          <p className="mt-5 text-sm text-white/35">
            Last Updated: August 14, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1100px] px-6 py-16 max-md:py-10">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-white/35">
                On this page
              </p>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${section.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    className="block text-sm leading-6 text-white/40 transition-colors hover:text-white"
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="max-w-[760px]">
            <div className="space-y-12">
              {sections.map((section) => {
                const id = section.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");

                return (
                  <article
                    key={section.title}
                    id={id}
                    className="scroll-mt-10"
                  >
                    <h2 className="text-2xl font-semibold tracking-[-0.02em] max-md:text-xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-[15px] leading-8 text-white/55">
                      {section.content}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1100px] px-6 py-14">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 max-md:p-6">
            <h2 className="text-xl font-semibold">
              Have a question about your privacy?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/45">
              If you have any questions about how we handle information,
              contact our team.
            </p>

            <a
              href="mailto:hello@zandrelix.tech"
              className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              Contact Zandrelix
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}