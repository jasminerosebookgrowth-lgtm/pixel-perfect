import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site/Layout";
import { Legal } from "@/components/site/Legal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => meta("Privacy Policy — Daniel Trade", "How Daniel Trade collects, uses, and protects your personal information."),
  component: () => (
    <Legal title="Privacy Policy" sections={[
      ["Information We Collect", "We may collect information you provide directly, such as your name, email address, phone number, and message content when you contact us."],
      ["How We Use Information", "Information is used to respond to inquiries, provide requested services, and improve our communications. We do not sell your personal information."],
      ["Data Protection", "We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure."],
      ["Third-Party Services", "Our website may use third-party services that collect information in accordance with their own privacy policies."],
      ["Your Rights", "Depending on your location, you may have rights to access, correct, or delete your personal information. Contact us to make a request."],
      ["Changes to This Policy", "We may update this policy from time to time. Changes will be posted on this page."],
    ]} />
  ),
});
